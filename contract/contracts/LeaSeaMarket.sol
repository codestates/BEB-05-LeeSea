// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract LeaSeaMarket {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSoldOrCanceled;
    uint256 listingPrice = 0.02 ether;
    constructor () {}

    mapping(uint256 => MarketItem) idMarketItem;

    enum ItemStatus {  
        ON_SALE, SOLD, SALE_CANCELED
    }

    struct NFTToken {
        address contractAddr;
        uint256 tokenId;
    }

    struct MarketItem {
        uint256 itemId;
        NFTToken token;
        address payable seller;
        uint256 price;
        ItemStatus itemStatus;
    }

    event ItemCreated (
        uint256 tokenId,
        uint256 itemId,
        address seller,
        uint256 price
    );

    event ItemSold (
        uint256 tokenId,
        uint256 itemId,
        address seller,
        address buyer,
        uint256 price
    );

    event SaleCanceled (
        uint256 tokenId,
        uint256 itemId,
        address seller
    );

    function sell(
        address _contractAddr,
        uint256 _tokenId,
        uint256 _price
    ) public payable {
        require(msg.sender == ERC721(_contractAddr).ownerOf(_tokenId),  "only owners can sell items");
        require(msg.value == listingPrice, "Price must be equal to listing price");
        require(_price > 0, "Price must be above zero");

        _itemIds.increment();
        uint256 itemId = _itemIds.current();

        idMarketItem[itemId] = MarketItem({
            itemId: itemId,
            token: NFTToken({
                contractAddr: _contractAddr,
                tokenId: _tokenId
            }),
            seller: payable(msg.sender),
            price: _price,
            itemStatus: ItemStatus.ON_SALE
        });

        ERC721(_contractAddr).transferFrom(msg.sender, address(this), _tokenId);

        emit ItemCreated(
            _tokenId,
            itemId,
            msg.sender,
            _price
        );
    }

    function saleCancel(
        address _contractAddr,
        uint256 _itemId
    ) public {
        require(msg.sender == idMarketItem[_itemId].seller, "only seller can cancel");
        require(ItemStatus.ON_SALE == idMarketItem[_itemId].itemStatus, "item is not on sale");

        uint tokenId = idMarketItem[_itemId].token.tokenId;

        ERC721(_contractAddr).transferFrom(address(this), msg.sender, tokenId);

        idMarketItem[_itemId].itemStatus = ItemStatus.SALE_CANCELED;
        _itemsSoldOrCanceled.increment();
        

        emit SaleCanceled(
            tokenId,
            _itemId,
            msg.sender
        );
    }

    function buy(
        address _contractAddr,
        uint256 _itemId
    ) public payable {
        uint price = idMarketItem[_itemId].price;
        uint tokenId = idMarketItem[_itemId].token.tokenId;

        require(msg.value == price, "Please submit the asking price in order to complete purchase");

        idMarketItem[_itemId].seller.transfer(msg.value);

        ERC721(_contractAddr).transferFrom(address(this), msg.sender, tokenId);
        idMarketItem[_itemId].itemStatus = ItemStatus.SOLD;
        _itemsSoldOrCanceled.increment();

        emit ItemSold(
            tokenId,
            _itemId,
            idMarketItem[_itemId].seller,
            msg.sender,
            price
        );
    }

    function fetchItemsOnSale() public view returns (MarketItem[] memory) {
        uint itemCount = _itemIds.current();
        uint unsoldItemCount = _itemIds.current() - _itemsSoldOrCanceled.current();
        uint currentIndex = 0;

        MarketItem[] memory items =  new MarketItem[](unsoldItemCount);

        for (uint i = 1; i <= itemCount; i++) {
            if (idMarketItem[i].itemStatus == ItemStatus.ON_SALE) {
                uint currentId = idMarketItem[i].itemId;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function fetchMyItemsOnSale() public view returns (MarketItem[] memory) {
        uint totalItemCount = _itemIds.current();

        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 1; i <= totalItemCount; i++) {
            if (
                idMarketItem[i].itemStatus == ItemStatus.ON_SALE
                && idMarketItem[i].seller == msg.sender
            ) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 1; i <= totalItemCount; i++) {
            if (
                idMarketItem[i].itemStatus == ItemStatus.ON_SALE
                && idMarketItem[i].seller == msg.sender
            ) {
                uint currentId = idMarketItem[i].itemId;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}

const LeeSeaNFT = artifacts.require("LeeSeaNFT");
const LeeSeaMarket = artifacts.require("LeeSeaMarket");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(LeeSeaMarket);
    await deployer.deploy(LeeSeaNFT, LeeSeaMarket.address);
  })
};

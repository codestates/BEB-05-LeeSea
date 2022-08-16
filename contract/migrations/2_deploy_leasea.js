const LeaSeaNFT = artifacts.require("LeaSeaNFT");
const LeaSeaMarket = artifacts.require("LeaSeaMarket");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(LeaSeaMarket);
    await deployer.deploy(LeaSeaNFT, LeaSeaMarket.address);
  })
};

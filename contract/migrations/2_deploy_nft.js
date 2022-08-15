const Migrations = artifacts.require("CozNFTs");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

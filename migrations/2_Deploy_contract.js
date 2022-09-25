const storageContra = artifacts.require('storageContra.sol');

module.exports = function (deployer) {
    deployer.deploy(storageContra);
};
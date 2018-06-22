const MaspToken = artifacts.require('MaspToken');

module.exports = (deployer, network, accounts) => {
  deployer.deploy(MaspToken);
};

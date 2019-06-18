const StarNotary = artifacts.require('StarNotary')

module.exports = function (deployer) {
  deployer.deploy(StarNotary, 'MikesCoolToken', 'MCT', 18, 1000)
}

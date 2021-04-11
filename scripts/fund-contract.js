const SumoPets = artifacts.require('SumoPets')
const LinkTokenInterface = artifacts.require('LinkTokenInterface')

/*
  This script is meant to assist with funding the requesting
  contract with LINK. It will send 1 LINK to the requesting
  contract for ease-of-use. Any extra LINK present on the contract
  can be retrieved by calling the withdrawLink() function.
*/

const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || '3000000000000000000'

module.exports = async callback => {
  try {
    const sumo = await SumoPets.deployed()

    const tokenAddress = await sumo.LinkToken()
    console.log("Chainlink Token Address: ", tokenAddress)
    const token = await LinkTokenInterface.at(tokenAddress)
    console.log('Funding contract:', sumo.address)
    const tx = await token.transfer(sumo.address, payment)
    callback(tx.tx)
  } catch (err) {
    callback(err)
  }
}

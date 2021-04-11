const SumoPetsApp = artifacts.require('SumoPets')

module.exports = async callback => {
  const sumo = await SumoPetsApp.deployed()
  console.log('Creating requests on contract:', sumo.address)
  const tx = await sumo.requestNewRandomCharacter(77, "Sumo Bear")
  const tx2 = await sumo.requestNewRandomCharacter(7777777, "Sumo Bunny")
  const tx3 = await sumo.requestNewRandomCharacter(7, "Sumo Chicken")
  const tx4 = await sumo.requestNewRandomCharacter(777, "Sumo Cow")
  const tx5 = await sumo.requestNewRandomCharacter(7777, "Sumo Pig")
  const tx6 = await sumo.requestNewRandomCharacter(77777, "Sumo Tiger")
  callback(tx.tx)
}

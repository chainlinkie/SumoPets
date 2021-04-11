const SumoPetsApp = artifacts.require('SumoPets')

module.exports = async callback => {
    const sumo = await SumoPetsApp.deployed()
    console.log('Let\'s get the overview of your character')
    const overview = await sumo.characters(0)
    console.log(overview)
    callback(overview.tx)
}

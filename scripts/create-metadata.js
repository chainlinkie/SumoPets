const SumoPetsApp = artifacts.require('SumoPets')
const fs = require('fs')

const metadataTemple = {
    "name": "",
    "description": "",
    "image": "",
    "attributes": [
        {
            "trait_type": "Weight",
            "value": 0
        },
        {
            "trait_type": "Squishiness",
            "value": 0
        },
        {
            "trait_type": "Hunger",
            "value": 0
        },
        {
            "trait_type": "Experience",
            "value": 0
        }
    ]
}
module.exports = async callback => {
    const sumo = await SumoPetsApp.deployed()
    length = await sumo.getNumberOfCharacters()
    index = 0
    while (index < length) {
        console.log('Let\'s get the overview of your character ' + index + ' of ' + length)
        let characterMetadata = metadataTemple
        let characterOverview = await sumo.characters(index)
        index++
        characterMetadata['name'] = characterOverview['name']
        if (fs.existsSync('metadata/' + characterMetadata['name'].toLowerCase().replace(/\s/g, '-') + '.json')) {
            console.log('test')
            continue
        }
        console.log(characterMetadata['name'])
        characterMetadata['attributes'][0]['value'] = characterOverview['weight']['words'][0]
        characterMetadata['attributes'][1]['value'] = characterOverview['squishiness']['words'][0]
        characterMetadata['attributes'][2]['value'] = characterOverview['hunger']['words'][0]

        filename = 'metadata/' + characterMetadata['name'].toLowerCase().replace(/\s/g, '-')
        let data = JSON.stringify(characterMetadata)
        fs.writeFileSync(filename + '.json', data)
    }
    callback(sumo)
}

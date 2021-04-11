
const { expectRevert, expectEvent } = require('@openzeppelin/test-helpers')

const RANDOM_SEED = 100
const CHARACTER_NAME = "Shrek"

contract('SumoPets', accounts => {
    const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
    const SumoPets = artifacts.require('SumoPets.sol')
    const defaultAccount = accounts[0]

    let link, sumo

    beforeEach(async () => {
        link = await LinkToken.new({ from: defaultAccount })
        sumo = await SumoPets.new({ from: defaultAccount })
    })

    describe('#requestNewRandomCharacter', () => {
        context('without LINK', () => {
            it('reverts', async () => {
                const newCharacter = await expectRevert.unspecified(sumo.requestNewRandomCharacter(RANDOM_SEED, CHARACTER_NAME))
            })
        })
    })
})  
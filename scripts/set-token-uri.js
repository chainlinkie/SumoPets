const SumoPetsApp = artifacts.require('SumoPets')
const TOKENID = 0
module.exports = async callback => {
    const sumo = await SumoPetsApp.deployed()
    console.log('Let\'s set the tokenURI of your characters')
    const tx = await sumo.setTokenURI(0, "https://ipfs.io/ipfs/QmewwtysuTwzoUBichFFTFAaZi6WkYvSiagpZj5f4wH9g2?filename=Bear.json")
    const tx1 = await sumo.setTokenURI(1, "https://ipfs.io/ipfs/QmQX4mrKPxTBPKomdK34PxYuepMqr3eTf4NjtFrkeGMFfW?filename=Bunny.json")
    const tx2 = await sumo.setTokenURI(2, "https://ipfs.io/ipfs/QmXXRRWjJKhNcK8xhmV9SSiBcJEXuAWbxve9duQS5B4K6L?filename=Chicken.json")
    const tx3 = await sumo.setTokenURI(3, "https://ipfs.io/ipfs/QmcSNX2pZC1tx5hWAwE2J8TGGmy2T8Rt7aUR1xxeysUpTv?filename=Cow.json")
    const tx4 = await sumo.setTokenURI(4, "https://ipfs.io/ipfs/QmW2GE5fvZPj3YaMVi1yqmGgAC8g6m6Aewb8hzKKJYZKNh?filename=Pig.json")
    const tx5 = await sumo.setTokenURI(5, "https://ipfs.io/ipfs/Qmcc3DqEoeuZFNcyxMop78Gcq12ZM3MLG32Ua9Y4QyJm6C?filename=Tiger.json")
    console.log(tx)
    callback(tx.tx)
}

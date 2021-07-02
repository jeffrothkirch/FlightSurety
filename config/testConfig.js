
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('../bignumber.js');
//var BigNumber = require('big-number');

var Config = async function(accounts) {
    let testAddresses = [
        "0x8b102E50ACC7B509ae6337d6621cbe1e13dA204c",
        "0xC9f114F1200F9c7484bd64ff9C8C98013F13Ebc3",
        "0xf7adC4C1de2F3b1282f21eFAD0f67f382b97a599",
        "0x7B10dFB54C218EA1B251A7777B505afAF8019F4D",
        "0x23254179221AdB764620F822e5181D05A962E7c0",
        "0xfec0D179AE99CEB740782Be844C7A8B15679aFfb",
        "0xeD4204265e0998D9a7B7920adB35CE466f77ff85",
        "0x89F6724244E02ef12aC4389DFdb86d00d5cb930f",
        "0x43e7719b96C5DDEf7E1E8d94737dA55D4E1aEDd0",
        "0x0EE6Cf93FB15363f3d1eD3Cb70F15217F702Bb00"
    ];

    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new();
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);
    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};
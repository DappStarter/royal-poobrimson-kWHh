require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strike dash rural exact harvest high swift symbol'; 
let testAccounts = [
"0x70c934ec835f34c7a5dde66ef8534a8023d909b97c4f6d104e8161a47a3576a7",
"0xb136b54de2446cf53863b94a34a5bda06799d5280e6c3ccfda57942d45b278b9",
"0x39b0d0461adbbdb28c3381c64187531d6e9f291ebd57566e8c6006b4567a92b0",
"0x69f3895f88872345685cdc86d501600460978a1b81c2c8a38bceab0c3f1ac7b3",
"0xd8f04d7f9af9da98e658ba935caae2fa32fe7c424e6eb7af5b1e0662e901f6e9",
"0xa06503f6b3b72ce40cac9d967c9d411cbc1ed28e7a38fa2a36add8a83b0d6382",
"0x22a64d222f00ecf7ef14b7ef88d97c7d8580054a54904194c522df2f02cde81f",
"0xae03e41b6466adc67a7ab09b8edd622843d3aab4d867492e2e7c1287348e5ca2",
"0x0478c693d143aff0c3338a709130b4301114d91fe9581e24c8fb0c531c9b1e34",
"0x2d4056e834f1a0723ddd061cc79093536b7dd1824b14fd4b9349cf2a6a730e16"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


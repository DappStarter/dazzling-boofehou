require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain evil hunt creek foam team'; 
let testAccounts = [
"0x30ddda99e63581ea079fab97c9a9ab2cca588acf5511a7fcaa864124b5c3e077",
"0x72e7dd52f215d9c7768e77a5e11bc9a5ace53a31ab9a4ded48a6054bc06b7f1b",
"0xc6be71ede8989878f02fb82d788451591c6edea719ca74f770a44c34f4f1c663",
"0x583ca8a62130063fcbc3346eaa0d05556c9f09d2d359a38f79a9c09ee2046f49",
"0x5c53a8dc4f7b5d238aa56ed6283eaca7495ca8db0671631a972d4e3436d008f4",
"0xbe3d2c5d441b9479b31e74cf63a0ff29c1984f53d6c1ba6ee53911043bf02b18",
"0x3cf8e470521c332d68660d25d6bb739563db8e67b8ff509ab6663342668074a4",
"0xc09656fbd98390b4de406cc730411d311dea83f6e616d29dd314e6c1ede03c8b",
"0x811b22ae11f07a9736b821978bc269c0e17d296c9b7132c3b130071f8ee0be86",
"0xe42a01ef482de55baf97b860d1d7508ddf8fd707c0cf2c3faa68680d52b71149"
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
            version: '^0.5.11'
        }
    }
};

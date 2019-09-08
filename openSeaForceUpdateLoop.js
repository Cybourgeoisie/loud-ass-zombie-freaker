const Web3 = require('web3');
const fs = require('fs');
const axios = require('axios');

const GlarbABI = [{"constant": true,"inputs": [{"name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x01ffc9a7"},{"constant": true,"inputs": [],"name": "name","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x06fdde03"},{"constant": true,"inputs": [{"name": "tokenId","type": "uint256"}],"name": "getApproved","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x081812fc"},{"constant": false,"inputs": [{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"}],"name": "approve","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x095ea7b3"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x18160ddd"},{"constant": true,"inputs": [],"name": "specialAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x21f3dd65"},{"constant": true,"inputs": [{"name": "owner","type": "address"},{"name": "index","type": "uint256"}],"name": "tokenOfOwnerByIndex","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x2f745c59"},{"constant": false,"inputs": [],"name": "unpause","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x3f4ba83a"},{"constant": true,"inputs": [{"name": "account","type": "address"}],"name": "isPauser","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x46fbf68e"},{"constant": true,"inputs": [{"name": "index","type": "uint256"}],"name": "tokenByIndex","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x4f6ccce7"},{"constant": true,"inputs": [],"name": "tokenOfInfectionAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x5bce2d1c"},{"constant": true,"inputs": [],"name": "paused","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x5c975abb"},{"constant": true,"inputs": [{"name": "tokenId","type": "uint256"}],"name": "ownerOf","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x6352211e"},{"constant": false,"inputs": [],"name": "renouncePauser","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x6ef8d66d"},{"constant": true,"inputs": [{"name": "owner","type": "address"}],"name": "balanceOf","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x70a08231"},{"constant": false,"inputs": [],"name": "renounceOwnership","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x715018a6"},{"constant": false,"inputs": [{"name": "account","type": "address"}],"name": "addPauser","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x82dc1ec4"},{"constant": false,"inputs": [],"name": "pause","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x8456cb59"},{"constant": true,"inputs": [],"name": "owner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x8da5cb5b"},{"constant": true,"inputs": [],"name": "isOwner","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x8f32d59b"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x95d89b41"},{"constant": false,"inputs": [{"name": "account","type": "address"}],"name": "addMinter","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x983b2d56"},{"constant": false,"inputs": [],"name": "renounceMinter","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x98650275"},{"constant": true,"inputs": [],"name": "zombieCounter","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x9c4ba790"},{"constant": false,"inputs": [{"name": "to","type": "address"},{"name": "approved","type": "bool"}],"name": "setApprovalForAll","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0xa22cb465"},{"constant": true,"inputs": [{"name": "account","type": "address"}],"name": "isMinter","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function","signature": "0xaa271e1a"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "walletGlarbs","outputs": [{"name": "","type": "uint8"}],"payable": false,"stateMutability": "view","type": "function","signature": "0xcbd8fdab"},{"constant": true,"inputs": [],"name": "proxyRegistryAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function","signature": "0xcd7c0326"},{"constant": true,"inputs": [],"name": "antidoteAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function","signature": "0xeed7ff81"},{"constant": false,"inputs": [{"name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0xf2fde38b"},{"inputs": [{"name": "tokenName","type": "string"},{"name": "tokenSymbol","type": "string"},{"name": "_proxyRegistryAddress","type": "address"},{"name": "_antidoteAddress","type": "address"},{"name": "_tokenOfInfectionAddress","type": "address"}],"payable": false,"stateMutability": "nonpayable","type": "constructor","signature": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"name": "_addr","type": "address"},{"indexed": false,"name": "_tokenId","type": "uint256"}],"name": "NewZombie","type": "event","signature": "0x8f27ef9a1c8b50dc3d87c76176842776bc6afa9403b5e6cf8e880e174fdd3464"},{"anonymous": false,"inputs": [{"indexed": false,"name": "_addr","type": "address"},{"indexed": false,"name": "_tokenId","type": "uint256"}],"name": "NewHuman","type": "event","signature": "0x1976ca35d8f84ac1c49d681bbd435d777a2cfadb96b398e6faddedaa569697d8"},{"anonymous": false,"inputs": [{"indexed": false,"name": "_addr","type": "address"},{"indexed": false,"name": "_tokenId","type": "uint256"}],"name": "LoveInTheAir","type": "event","signature": "0xed183540416b049e56184d95eceeb32964111cc3e97e583d80abe8df0e57925a"},{"anonymous": false,"inputs": [{"indexed": false,"name": "_from","type": "address"},{"indexed": false,"name": "_to","type": "address"}],"name": "TurnedZombie","type": "event","signature": "0xef0691863ec123a55358d5945cf245b9f2930c83afe363f116f08f79b4626191"},{"anonymous": false,"inputs": [{"indexed": false,"name": "_from","type": "address"},{"indexed": false,"name": "_to","type": "address"}],"name": "CuredHuman","type": "event","signature": "0xc2a49cae53aed4836897ee51765c5064883eede56aaaeac513913d95b3a44164"},{"anonymous": false,"inputs": [{"indexed": true,"name": "previousOwner","type": "address"},{"indexed": true,"name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event","signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous": false,"inputs": [{"indexed": true,"name": "account","type": "address"}],"name": "MinterAdded","type": "event","signature": "0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"},{"anonymous": false,"inputs": [{"indexed": true,"name": "account","type": "address"}],"name": "MinterRemoved","type": "event","signature": "0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"},{"anonymous": false,"inputs": [{"indexed": false,"name": "account","type": "address"}],"name": "Paused","type": "event","signature": "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"},{"anonymous": false,"inputs": [{"indexed": false,"name": "account","type": "address"}],"name": "Unpaused","type": "event","signature": "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"},{"anonymous": false,"inputs": [{"indexed": true,"name": "account","type": "address"}],"name": "PauserAdded","type": "event","signature": "0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8"},{"anonymous": false,"inputs": [{"indexed": true,"name": "account","type": "address"}],"name": "PauserRemoved","type": "event","signature": "0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e"},{"anonymous": false,"inputs": [{"indexed": true,"name": "from","type": "address"},{"indexed": true,"name": "to","type": "address"},{"indexed": true,"name": "tokenId","type": "uint256"}],"name": "Transfer","type": "event","signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous": false,"inputs": [{"indexed": true,"name": "owner","type": "address"},{"indexed": true,"name": "approved","type": "address"},{"indexed": true,"name": "tokenId","type": "uint256"}],"name": "Approval","type": "event","signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous": false,"inputs": [{"indexed": true,"name": "owner","type": "address"},{"indexed": true,"name": "operator","type": "address"},{"indexed": false,"name": "approved","type": "bool"}],"name": "ApprovalForAll","type": "event","signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"constant": false,"inputs": [{"name": "antidote","type": "address"}],"name": "setAntidoteAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x6f82e8b8"},{"constant": false,"inputs": [{"name": "tokenOfInfection","type": "address"}],"name": "setTokenOfInfectionAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x1dc02c0a"},{"constant": false,"inputs": [{"name": "to","type": "address"},{"name": "glarbType","type": "uint256"}],"name": "mint","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x40c10f19"},{"constant": true,"inputs": [{"name": "tokenId","type": "uint256"}],"name": "glarbs","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x28a94995"},{"constant": true,"inputs": [],"name": "humanCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function","signature": "0xcad07a06"},{"constant": true,"inputs": [],"name": "zombieCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x63721d6b"},{"constant": false,"inputs": [{"name": "addr","type": "address"}],"name": "setSpecialAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0xff67370c"},{"constant": true,"inputs": [{"name": "addr","type": "address"}],"name": "_checkHasAntidote","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function","signature": "0x3f119466"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"}],"name": "handleAntidote","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0xcfc46f51"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"}],"name": "transferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x23b872dd"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"}],"name": "safeTransferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0x42842e0e"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"},{"name": "","type": "bytes"}],"name": "safeTransferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0xb88d4fde"},{"constant": true,"inputs": [{"name": "_tokenId","type": "uint256"}],"name": "tokenURI","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function","signature": "0xc87b56dd"},{"constant": false,"inputs": [{"name": "proxyRegistry","type": "address"}],"name": "setProxyRegistryAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function","signature": "0xd26ea6c0"},{"constant": true,"inputs": [{"name": "tokenOwner","type": "address"},{"name": "tokenOperator","type": "address"}],"name": "isApprovedForAll","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function","signature": "0xe985e9c5"}];

let glarbContractAddress = '0x18F36D3222324DdAC1eFD0a524aabFb9D77D8041';
let providerUrl = 'https://mainnet.infura.io/v3/24792c3ebc9643f0a61afedf9e3256a1';

var web3 = new Web3(providerUrl);
var glarbContract = new web3.eth.Contract(GlarbABI, glarbContractAddress);

start();

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

var lastBlock = 0;
async function start() {
	lastBlock = await getLatestBlock();
	run();
}

async function run() {
	glarbContract.getPastEvents('allEvents', 
		{fromBlock: lastBlock - 6, toBlock: lastBlock - 2},
		async (err, events) => {
			if (events) {
				handleEvents(events);
			}
		}
	);

	lastBlock = await getLatestBlock();

	setTimeout(run, 5000);
}

/*
event NewZombie(address _addr, uint _tokenId);
event NewHuman(address _addr, uint _tokenId);
event LoveInTheAir(address _addr, uint _tokenId);
event TurnedZombie(address _from, address _to);
event CuredHuman(address _from, address _to);
*/

let legalEvents = ['NewZombie', 'NewHuman', 'TurnedZombie', 'CuredHuman'];

async function handleEvents(events) {
	for (let i = 0; i < events.length; i++) {
		let ev = events[i].event;
		if (legalEvents.indexOf(ev) === -1) {
			continue;
		}

		let rv = events[i].returnValues;
		let addr = rv.hasOwnProperty('_to') ? rv._to : rv._addr;
		if (!addr) {
			console.error("No address found:", rv);
			continue;
		}

		// Get all glarbs in the wallet
		let balanceOf = await glarbContract.methods.balanceOf(addr).call();

		// Iterate over all glarbs
		for (let j = 0; j < balanceOf; j++) {
			try {
				let tokenId = await glarbContract.methods.tokenOfOwnerByIndex(addr, j).call();				
				if (!tokenId) {
					console.error("could not retrieve tokenId", tokenId);
					continue;
				}

				axios.get('https://opensea.io/assets/0x18F36D3222324DdAC1eFD0a524aabFb9D77D8041/' + tokenId + '?force_update=true')
					.then(function (response) {
						console.log("Force updated tokenID", tokenId)
					})
					.catch(function (error) {
						console.error("Could not force update", error);
					});

			} catch (ex) {
				console.error("an error occurred", error);
			}
		}
	}
}

async function getLatestBlock() {
	let block;
	try {
		let block = await web3.eth.getBlock('latest');
		return parseInt(block.number, 10);
	} catch (ex) {
		return 8506000;
	}
}

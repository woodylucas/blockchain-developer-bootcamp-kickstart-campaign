# Kickstart Campaign (CrowdFund)

## Deployed Version URL:
https://blockchain-developer-bootcamp-kickstart-campaign.vercel.app/

### Prerequsites 
* Node.js
* Next.js
* React.JS
* Truffle and Ganache

### Contracts
* cd into Ethereum folder
* node compile
* node build

### Frontend/ Ethereum Tooks
* 'Solidity' - used to create Smart Contracts
* 'Remix - Solidity IDE' - online ide for creating, compiling and executing smart contracts in local, test or main network.
* 'MetaMask' - a chrome plugin, brings Ethereum dApps access to browser.
* 'solc' - Solidity compiler that generates Application Binary Interface(used as interface with Javascript appilcations) and Bytecode - that is deployed as a smart contract to an Ethereum network
* 'web3' - is the Ethereum compatible JavaScript API
*'ganache' - local test ethereum network
*'truffle' - provider for web3, to connect to test/main networks
* Rinkeby test network & Infura infrastructure
* React frontend

### Public Ethereum Wallet for Certification
* 0xbDAA618066d3c35FF59Aa27bF810bb4f708C59d0

### Project Description 

Kickstarter is to here to help bring creative projects to life. Kickstarter campaigns make ideas into reality. It's where creators share new visions for creative work with the communities that will come together to fund them.

### Problem 

Once your donation has been reach the manager that create the campaign can run off with your money. It's up to the campaign manager to take the money and spend it to further create the product that can be sent to their donators. Many of these products end up failing -- a manager ends up with running out of money, and have to  inform the donators they can't create the product. We also have individuals that raise money with no intent to create a product. External Address will be considered a vendor, and they will help us further the campaign along.

### Smart Contract to save the world

Instead of sending money to a manager, contributors will send money to an Ethereum Contract. This contract will regulate who can recieve money from the campaign. The contract wil represent the actual campaign, it's like all the public display of all the expense of the campaign. A manager can only see money if they create a spending request. Spending Request attempts to withdraw money from the contract and send to an external address.

### Directory Structure

* components
* ethereum
* test

### TODO FEATURES 
* BUILDING a ERC20 token used to raise funds in ICO


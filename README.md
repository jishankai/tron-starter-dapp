# Tron starter dApp

<p align="center">		
  <img src="logo.PNG">		
</p>

This project was generated with [vue-cli](https://github.com/vuejs/vue-cli) version 3.2.1

A Vue based Tron example dApp with tronweb, tronlink, tronbox and vue-cli

# Demo
Update a value of a smart contract with your Tronlink wallet address

![](demo.gif)

# Project setup
A TronLink account is required for this dApp to work!

Download Tronlink [here](https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec)

Get some free test TRX coins from [here](https://www.trongrid.io/shasta/) to get some balance on your account

### Install dependencies
```
npm install
```
### Update the .env file
```
VUE_APP_SHASTA_PRIVATE_KEY="Your key"
```
### Run the development server
```
npm run serve
```

# Compile your own smart contracts
Add your smart contract to the /contracts folder

### Install tronbox
```
npm install -g tronbox
```

### Compile the contract
```
tronbox compile
```

### Migrate the contract
```
tronbox migrate --network shasta
```
### Change the current address to your deployed contract address
```
  let contractInstance = await tronWeb
      .contract()
      .at("Your deployed contract address");
```

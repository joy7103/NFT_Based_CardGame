The goal of the project is to develop a web-based battle game that leverages Web3 technologies, 
such as blockchain and smart contracts, to create a decentralized and transparent gaming experience. 

The problem being addressed is the lack of trust, fairness, and ownership in traditional centralized gaming platforms, 
where players often face challenges related to cheating, fraud, and limited control over in-game assets.
By utilizing Web3 technologies, the project aims to provide a solution that offers a secure and verifiable gaming environment, where players can engage in battles, 
earn rewards, and own unique in-game assets.

Every element of this project is facilitated by blockchain and smart contract functionalities.

This project is built on the Avalanche blockchain using smart contracts.The game gives the players NFTs at the start of battle and after every round, 
the tokens are unique ,as they are combinations of random values. The frontend is built using React, and the smart contracts are written in Solidity.

The game tokens are represented as NFTs (non-fungible tokens) and are allotted to users during a battle . 
The game data is stored on the blockchain, and is fetched by calling the relevant contract function from the client-side code.
The frontend includes a wallet connection using the Core Wallet, and a modal that checks if the user has the necessary requirements to play the game. 
The modal checks if the user has installed the Core Wallet, connected their account to the wallet, is on the correct network, and has AVAX tokens in their account.
The game is round based, and the winner is determined by comparing the attack and defense strength of each player's token.

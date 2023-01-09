## Decentralized Kickstarter

### This is a PoC of a full-stack dApp that aim to implement a Kickstarter-like platform based on blockchain. Built with Hardhat, Ethers and Next 13.

## About the stack

- The business logic is written in two Solidity `v0.8.17` Smart Contracts located in `/ethereum/contracts` directory.
- [Hardhat](https://hardhat.org/) is used to compile the contracts and run tests locally.
- A custom script `/ethereum/deploy.ts` uses [Ether.js](https://docs.ethers.org/v5/) to deploy the contract on the Goerli testnet
- The front end is built with [Next 13](https://nextjs.org/blog/next-13) with use of the new [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components)

## Scripts

### Compile

To compile the Smart Contracts run:

```bash
yarn compile
```

This will compile the contracts into `/ethereum/build` folder.

### Run tests

To execute unit tests run:

```bash
yarn test
```

### Production deploy

In order to deploy the application on the "production" chain (Goerli testnet) run:

```bash
yarn deploy
```

This command will return the address of the contract. This address is the value of `CAMPAIGNS_FACTORY_ADDRESS` env var.

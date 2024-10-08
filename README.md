<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/ -->
<a id="readme-top"></a>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url] -->

<div align="center">

<!-- PROJECT SHIELDS -->
<img src="https://img.shields.io/github/forks/0xAquaWolf/base-chain-sniper-bot-ts.svg?style=for-the-badge" alt="Forks">
<img src="https://img.shields.io/github/stars/0xAquaWolf/base-chain-sniper-bot-ts.svg?style=for-the-badge" alt="Stars">
<img src="https://img.shields.io/github/issues/0xAquaWolf/base-chain-sniper-bot-ts.svg?style=for-the-badge" alt="Issues">
<img src="https://img.shields.io/github/license/0xAquaWolf/base-chain-sniper-bot-ts.svg?style=for-the-badge" alt="License">

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="images/base-chain-sniper-bot-logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Web3 Base Chain Sniper Bot</h3>

  <p align="center">
    <div>
    Filter out the garbage♻️. 
    </div>
    <div>
    Find the gems 💎. 
    </div>
    <div>
    Land on the moon 🚀
    </div>
    <!-- <a href="https://github.com/0xAquaWolf/wiki"><strong>Explore the Wiki »</strong></a> -->
    <br />
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/0xAquaWolf/base-chain-sniper-bot-ts/issues">Report Bug</a>
    ·
    <a href="https://github.com/0xAquaWolf/base-chain-sniper-bot-ts/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![mvp-prototype-idea](images/mvp-prototype-idea.png)

![product-screenshot](images/screenshot.png)

### Built With

<div align="center">

<img src="https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
<img src="https://img.shields.io/badge/Ethers.js-2535a0?style=for-the-badge&logo=ethereum&logoColor=white" alt="Ethers.js">
<img src="https://img.shields.io/badge/Discord.js-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.js">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
<img src="https://img.shields.io/badge/Drizzle_ORM-00A95C?style=for-the-badge&logo=drizzle&logoColor=white" alt="Drizzle ORM">

</div>

#### Watch me build in public

Daily live on streams on YouTube: https://www.youtube.com/@0xAquaWolf


I have always dreamed about finding a infinite money glitch, making money passively while i'm sleeping, its one of the reasons i learned how to code. 

This project endevours to accomplish this goal. If you resonate with that you can contribute to if you would like.

#### Why i believe in Base Chain 

Here's why:
* I believe that Base Chain (built by Coinbase) will on board and increase user adoption with the Web3 space because they have 115 MAU and they have already onboarded 11.3 Million users
https://tokenterminal.com/terminal/projects/base (MAU)

![Product Name Screen Shot](https://pbs.twimg.com/media/GRuvMo7WgAA5Zfa?format=jpg&name=medium)
* I see code as leverage, we can deploy bots and run code in the cloud while we are sleeping and potentialy make money from that code

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites
* local postgreSQL instance

* Install Bun (a fast JavaScript runtime and package manager)
  ```sh
  curl -fsSL https://bun.sh/install | bash
  ```
* set up postgreSQL with the following creds and make sure to add them to your `.env`
```bash
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="aquawolf" # change to YOUR os username
DB_PASSWORD=""
DB_NAME="base_chain_scanner"
```
### Installation


1. Get a BaseScan free API Key at [https://basescan.org/](https://basescan.org/)
2. Get a Discord Developer free API Key at [Discord Developer Portal](https://discord.com/developers/)
2. Clone the repo
   ```sh
   git clone https://github.com/0xAquaWolf/base-chain-sniper-bot-ts.git
   ```
3. Install NPM packages
   ```sh
   bun install
   ```
4. Enter your APIs & DB Creds inside `.env`
  - `.env` needs to be placed inside of `./.env`
   ```bash
    DISCORD_BOT_TOKEN="" # Slash Commands Discord bot
    BASE_TOKEN_SNIFFER="" # Discord Bot for blockchain notifications
    BASESCAN_API_TOKEN="" # sign up on basescan to get api key
    STAGING_CHANNEL_ID="" # copy from discord server
    DEBUG="true | false"
    CUSTOM_START_BLOCK="123512352" # for debuging from a block
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

1. `bun install`

2. `bun run dev`

<!-- ROADMAP -->
## Roadmap

- [x] setup project
	- [x] open sourced it
	- [x] create a readme 
	- [x] added a license
	- [x] create a logo
	- [x] create basic folder structure for project
	- [x] add drizzle support for postgreSQL
  	- [x] add drizzle support for postgreSQL
		- [x] setup drizzle kit
		- [x] introspected the current database scheme
- [ ] Create the blockchain scanner for all events
	- [ ] New token event
	- [ ] addLiquidityETH
	- [ ] removeLiquidityETH
- [ ] Save events to the db (postgreSQL)
- [ ] listen db to events
	- [ ] send events to discord
        - [ ] add new token events
        - [ ] addLiqudiityETH
        - [ ] removeLiqudiityETH
- [ ] add a 30 sec demo bootstraping the project and it scanning the network

See the [open issues](https://github.com/0xAquaWolf/base-chain-sniper-bot-ts/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GNU General Public License v3.0. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Twitter - [@0xAquaWolf](https://x.com/0xAquaWolf)

Youtube - [@0xAquaWolf](https://www.youtube.com/@0xAquaWolf)

Email - [aquawolf369](mailto:aquawolf369@gmail.com)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
These are all of the documentations to the packages that are being used in this project

- [Base Chain Documentation](https://docs.base.org/)
- [ethers.js docs](https://docs.ethers.org/v5/)
- [discord.js sdk](https://discord.js.org/docs/packages/discord.js/14.15.3)
- [drizzle docs](https://orm.drizzle.team/docs/overview)
- [bun.js](https://bun.sh/docs)
- [uniswap v2 docs](https://docs.uniswap.org/contracts/v2/overview)


<!-- * [Choose an Open Source License](https://choosealicense.com) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
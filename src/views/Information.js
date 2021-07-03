import React from 'react'
import { 
  Box,
  Paragraph,
  Heading,
  Image,
  ResponsiveContext,
  Stack,
} from 'grommet';
import { Scrollbars } from 'react-custom-scrollbars';

import catalystCat from '../assets/catalyst.png';

import BackgroundBox from '../components/Background';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Menu from '../components/Menu';

const Information = (props) => {
  return (
    <ResponsiveContext.Consumer>
    {size => (
      <BackgroundBox>
        <NavBar sideBarOpen={props.sideBarOpen} setSideBarOpen={props.setSideBarOpen}/>
        <Stack>
          <Menu sideBarOpen={props.sideBarOpen}/>
          <Box
            direction='column'
            align='center'
            overflow={{ horizontal: 'hidden' }}
            height='100vh'
          >
          <Image alt="..." src={catalystCat}/>
          <Heading color='white'>INFORMATION</Heading>
          <Scrollbars
            renderThumbVertical={({ style, ...props }) => 
              <div {...props} style={{ ...style, backgroundColor: 'rgba(255, 255, 255, 0.75)', right: "20px", top: "20px" }} />
            }
            style={{
                    height: 550,
                    width: `${size !== 'small' ? '40%' : '95%'}`,
                    borderRadius: "30px",
                    background: "rgba(0, 0, 0, 0.1)",
                  }}
          >
            <Box align='center' style={{padding: '30px'}}>
              <Paragraph color='white'>CatNIP is a new Financial Ecosystem.
                <br></br>
                Please see our whitepaper <a
                  style={{
                    color: "yellow"
                  }}
                  target="_blank"
                  href="/whitepaper">here</a>
                <br></br>
              </Paragraph>
              <Paragraph
                color='white'
                style={{
                  textAlign: "left"
                }}
              >
                Total Supply: 1,000,000,000 (1 Billion) NIP
                <br></br>
                Public Supply: &nbsp;&nbsp;65% - 650,000,000 NIP
                <br></br>
                Airdrop Supply: 20% - 200,000,000 NIP
                <br></br>
                Team Supply: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15% - 150,000,000 NIP
              </Paragraph>
              <Paragraph
                color='white'
                style={{
                  textAlign: "left"
                }}
              >
                CatNIP has a 2% Liquidity, 2% Holder, and 1% Team tax.
                <br></br>
                Whale Blocker - Max transfer of 1,000,000 NIP per 24 hours.
                <br></br>
                Bot Blocker - CatNIP uses a unique system to put an end to bot scalping.
              </Paragraph>
              <Paragraph
                color='white'
                style={{
                  textAlign: "left"
                }}
              >
                CatNIP has a 100% fair launch. No presale. No private sale.
                <br></br>
                The NIP contract is safeguarded with a Time Lock and a Multisig.
                <br></br>
                The NIP contract is also updated by proxy.
              </Paragraph>
              <Paragraph
                color='white'
                style={{
                  textAlign: "left"
                }}
              >
                The CatNIP Wave 1 Airdrop will only be available to those who
                <br></br>
                had PAW in their wallet on March 20th, 2021.
                <br></br>
                For more details please read the whitepaper.
              </Paragraph>
              <Paragraph
                color='white'
                style={{
                  textAlign: "left"
                }}
              >
                CatNIP Battler is a cat collection and battle game.
                <br></br>
                Players battle their NFT cats and collect more!
                <br></br>
                NIP is used to mint NFTs. The marketplace is coming later.

              </Paragraph>
              <Paragraph
                color='white'
                style={{
                  textAlign: "left"
                }}
              >
                Exchange listings are top priority for CatNIP.
                <br></br>
                CatNIP Audits are available.
                <br></br>
                The NIP team has very much planned. Please join Discord or Telegram for updates.
              </Paragraph>
            </Box>
          </Scrollbars>
          </Box>
        </Stack>
        <Footer/>
      </BackgroundBox>
    )}
    </ResponsiveContext.Consumer>
  )
}

export default Information

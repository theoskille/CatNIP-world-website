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

import WhitepaperPDF from '../assets/documents/CatNIPWhitepaper.pdf';

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
                <Paragraph color='white' style={{
                  textAlign: "left"
                }}>
                Total Supply: 1,000,000,000 (1 Billion) NIP<br/>
                Public Supply:   65% - 650,000,000 NIP<br/>
Airdrop Supply: 20% - 200,000,000 NIP<br/>
Team Supply:      15% - 150,000,000 NIP<br/>

Our key features:<br/>
CatNIP has a 2% Liquidity, 2% Holder, and 1% Team tax.<br/>
Whale Blocker - Max transfer of 1,000,000 NIP per 24 hours.<br/>
Bot Blocker - CatNIP uses a unique system to put an end to bot scalping.<br/>

For more info, please see our whitepaper <a
                  style={{
                    color: "yellow"
                  }}
                  target="_blank"
                  href={WhitepaperPDF}
                  rel="noreferrer"
                  >here</a>(Download Link)
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

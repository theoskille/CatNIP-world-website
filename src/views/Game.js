import React from 'react'

import { 
  Box,
  ResponsiveContext,
  Image,
  Heading,
  Stack,
} from 'grommet';
import BackgroundBox from '../components/Background';
import Footer from '../components/Footer';
import NavBar from "../components/NavBar";
import battleLogo from '../assets/catnipbattlerlogo.png';
import Menu from '../components/Menu';

import UnityGame from '../components/UnityGame';


const Game = (props) => {



  return (
    <ResponsiveContext.Consumer>
      {size => (
        <BackgroundBox >
          <NavBar sideBarOpen={props.sideBarOpen} setSideBarOpen={props.setSideBarOpen}/>
          <Stack>
            <Menu sideBarOpen={props.sideBarOpen}/>
            <Box
              direction='column'
              align='center'
              overflow={{ horizontal: 'hidden' }}
              height='100vh'
            >

              <UnityGame/>
              <Image style={{margin: '24px', width: `${size !== 'small' ? 'auto' : '50%'}`, height: 'auto'}} src={battleLogo}/>
              <Heading margin='small' color='white'>game will be hosted here</Heading>
              <Footer/>
            </Box>
          </Stack>
        </BackgroundBox>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Game

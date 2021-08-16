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
              {size !== 'small' ? <UnityGame/> : <Heading color='white' textAlign='center'>Game not available on mobile</Heading>}
              <Footer/>
            </Box>
          </Stack>
        </BackgroundBox>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Game

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
import CatNIPLogo from '../assets/CatNIPlogoIcon.png';
import Menu from '../components/Menu';
const Home = (props) => {
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
              <Image style={{margin: '24px', width: `${size !== 'small' ? 'auto' : '50%'}`, height: 'auto'}} src={CatNIPLogo}/>
              <Heading margin='small' color='white' >WELCOME TO CATNIP!</Heading>
              <Heading margin='none' color='white' level='3' textAlign='center'>CatNIP is a Cryptocurrency with an NFT Battler game.</Heading>
              <Footer/>
            </Box>
          </Stack>
        </BackgroundBox>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Home

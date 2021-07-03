import React from 'react'
import { 
  Box,
  ResponsiveContext,
  Stack,
} from 'grommet';
import BackgroundBox from '../components/Background';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Menu from '../components/Menu';


const Socials = (props) => {
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
              <Box direction='row'>
                {size}
              </Box>
            </Box>
          </Stack>
          <Footer/>
        </BackgroundBox>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Socials
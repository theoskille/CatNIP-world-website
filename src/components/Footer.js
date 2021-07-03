import React from 'react'

import { 
  Text,
  Box,
} from 'grommet';
import {Twitter} from 'grommet-icons';

const Footer = () => {
  return (
    <Box
      flex
      align='end'
      as='footer'
      direction='row'
      gap='medium'
      justify='around'
    >
      <Text color='white'>CatNIP © 2021</Text>
      <Twitter color='white'/>
    </Box>
  )
}

export default Footer

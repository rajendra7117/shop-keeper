import React from 'react'
import './Styles.css'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
const Header = () => {
  return (
    <AppBar position='fixed' sx={{backgroundColor: "#1c1d21"}}>
      <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography variant="h5" sx={{ml: "15rem"}}>Shop-keeper</Typography>
      </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
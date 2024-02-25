import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div sx={{flexGrow:1}}>
      <AppBar position='static' sx={{background:'purple'}}>
        <Toolbar>
            <Typography sx={{flexGrow:1}} align='left'style={{color:"white"}} variant h1><h2>NEW BLOG</h2></Typography>
            <Button> 
                <Link to='/a' style={{color:'white'}} ><h4>Home</h4></Link>
                </Button>
                <Button>
                <Link to='/b' style={{color:'white'}} ><h4>Blogform</h4></Link>
                </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar


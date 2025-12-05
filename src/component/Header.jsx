import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { PiReadCvLogo } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';


const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className='bg-primary'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <PiReadCvLogo />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Resume Builder
            </Typography>

            <Button color="inherit" className='mx-1'>
              <Link style={{ textDecoration: "none", color: "#FFFFFF" }} to={"/history"}>History</Link>
            </Button>

            <Tooltip title="Our Resume Builder is designed to help individuals create professional, well-structured resumes with ease. We focus on simplicity, customization, and modern design, ensuring that every user can highlight their skills, experience, and achievements effectively. Whether you’re a student, a fresher, or a working professional, our tool provides an effortless way to craft a resume that stands out." placement="bottom">
              <Button color="inherit" className='mx-1'>About</Button>
            </Tooltip>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  )

}

export default Header
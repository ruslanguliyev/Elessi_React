import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginOpen } from '../redux/state/loginSlice';
import { Link, NavLink, useNavigate } from 'react-router-dom';


const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;






const Login = () => {
  const dispatch = useDispatch();
  const isLoginOpen = useSelector((state) => state.login.isLoginOpen);


  
  return (
    <Box
      display={isLoginOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto">
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(300px, 20%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          <FlexBox mb="15px">
            <Typography variant="h6">SIGN IN</Typography>
            <IconButton onClick={() => dispatch(setIsLoginOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>
          <Box md={{ '& > :not(style)': { m: 1 } }}>
            <FormControl variant="standard">
              <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, }} />
                <TextField id="input-with-sx" label="Email" variant='standard' />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, }} />
                <TextField id="input-with-sx" label="Password" variant='standard' />
              </Box>
              <Button variant="contained" color="success">
                Sign In
              </Button>
              <Typography m={2} variant="p">Don't have an account yet?<NavLink style={{color: "blue"}} to='signup'>Sign Up</NavLink></Typography>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Login








import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Container } from '@mui/material';
import '../style/sign-up.scss'

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);



  return (
    <>

      <Container maxWidth='md'>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className='form_content'>
            <FormControl sx={{ m: 1, width: '25ch' }}>
              <TextField
                id="outlined-multiline-flexible"
                label="Email"
                multiline
                maxRows={4}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }}>
              <TextField
                id="outlined-multiline-flexible"
                label="Phone Number"
                multiline
                maxRows={4}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}

                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }}>
              <Button variant="outlined" color="success" maxRows={4}>
                Sign up with Google
              </Button>
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }}>
              <Button variant="contained" color="success" maxRows={3}>
                Sign Up
              </Button>
            </FormControl>
          </div>
        </Box>
      </Container>

    </>


  );
}

export default Signup



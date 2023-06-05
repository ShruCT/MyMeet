import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState } from "react";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [signUp, setSignUp] = useState(false);
    const [inpt, setInpt] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInpt((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inpt);
    }

    const handleClick = () => {
        navigate('/form')
    }

    const resetState = () => {
        setSignUp(!signUp);
        setInpt({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    display={'flex'}
                    flexDirection='column'
                    maxWidth={400}
                    justifyContent={'center'}
                    alignItems='center'
                    margin={'auto'}
                    marginTop={15}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ":hover": {
                            boxShadow: '10px 10px 20px #ccc'
                        }
                    }}
                >
                    <Typography
                        variant="h2"
                        padding={3}
                        textAlign='center'>
                        {
                            signUp ? 'SignUp' : 'Login'
                        }
                    </Typography>
                    {
                        signUp &&
                        <TextField
                            onChange={handleChange}
                            name="name"
                            value={inpt.name}
                            margin="normal"
                            type={'text'}
                            variant='outlined'
                            placeholder="Name" />
                    }
                    <TextField
                        onChange={handleChange}
                        name="email"
                        value={inpt.email}
                        margin="normal"
                        type={'email'}
                        variant='outlined'
                        placeholder="Email" />
                    <TextField
                        onChange={handleChange}
                        name="password"
                        value={inpt.password}
                        margin="normal"
                        type={'password'}
                        variant='outlined'
                        placeholder="Password" />
                    <Button
                        onClick={handleClick}
                        endIcon={signUp ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />}
                        type="submit"
                        sx={{
                            marginTop: 3,
                            borderRadius: 3
                        }}
                        variant="contained"
                        color="warning">
                        {
                            signUp ? 'signUp' : 'Login'
                        }
                    </Button>
                    <Button
                        endIcon={signUp ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />}
                        onClick={
                            resetState
                        }
                        sx={{
                            marginTop: 3
                        }}>
                        Change to {signUp ? 'Login' : 'SignUp'}
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default Login;
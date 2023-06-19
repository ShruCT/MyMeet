import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState } from "react";
import './Form.css'
import Multiselect from "multiselect-react-dropdown";
import { LocalizationProvider } from '@mui/lab';
import { useNavigate } from "react-router-dom";

const MeetForm = () => {

    const data = [
        { Person: 'Jitendra', id: '1' },
        { Person: 'Mayuresh', id: '2' },
        { Person: 'Rahul', id: '3' },
        { Person: 'Nidhi', id: '4' },
        { Person: 'Shailesh', id: '5' },
    ]

    const navigate = useNavigate();

    const [options] = useState(data);

    const [inpt, setInpt] = useState({
        name: '',
        email: '',
        password: ''
    });

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
        navigate('/table')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    display={'flex'}
                    flexDirection='column'
                    maxWidth={1000}
                    justifyContent={'center'}
                    alignItems='center'
                    margin={'auto'}
                    marginTop={10}
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
                        Meet
                    </Typography>
                    <div className="form-field">
                        <label className="form-label title">Title</label>
                        <TextField
                            className="form-control"
                            onChange={handleChange}
                            name="name"
                            value={inpt.name}
                            margin="normal"
                            type={'text'}
                            variant='outlined'
                            placeholder="Name" />
                    </div>
                    <div className="form-field">
                        <div className="form-field">
                            <label className="form-label">Start Time</label>
                            <LocalizationProvider>

                            </LocalizationProvider>
                            <TextField
                                onChange={handleChange}
                                name="email"
                                value={inpt.email}
                                margin="normal"
                                type={'email'}
                                variant='outlined'
                                placeholder="Email" />
                        </div>
                        <div className="form-field">
                            <label className="form-label">End Time</label>
                            <TextField
                                onChange={handleChange}
                                name="email"
                                value={inpt.email}
                                margin="normal"
                                type={'email'}
                                variant='outlined'
                                placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-field">
                        <label className="form-label">Participants</label>
                        <div style={{
                            width: 618,
                            height: 58,
                            padding: 4,
                        }}>
                            <Multiselect className="multiselect" options={options} displayValue='Person' />
                        </div>
                    </div>
                    <div className="form-field">
                        <label className="form-label">Description</label>
                        <textarea rows={4} cols={78}></textarea>
                    </div>
                    <Button
                        onClick={handleClick}
                        type="submit"
                        sx={{
                            marginTop: 3,
                            borderRadius: 3
                        }}
                        variant="contained"
                        color="warning">
                        Send
                    </Button>
                </Box>
            </form>
        </div >
    )
}

export default MeetForm;
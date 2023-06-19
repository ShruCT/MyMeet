import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Box from "@mui/material/Box";


const TableData = () => {
    return (
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
            <TableContainer component={Paper}>
                <Table sx={{
                    minWidth: 650
                }} aria-label="simple table">
                    <TableHead sx={{
                        backgroundColor: 'orange'
                    }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Domain</TableCell>
                            <TableCell>Bio</TableCell>
                            <TableCell>Update Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Domain</TableCell>
                        <TableCell>Bio</TableCell>
                        <TableCell>
                            <Button
                                type="button"
                                sx={{
                                    marginTop: 3,
                                    borderRadius: 3
                                }}
                                variant="contained"
                                color="warning"
                            >
                                Update
                            </Button>
                        </TableCell>
                    </TableBody>
                    {/* <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody> */}
                </Table>
            </TableContainer>
        </Box>
    );
}

export default TableData;
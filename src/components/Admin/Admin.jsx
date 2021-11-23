import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminItem from '../AdminItem/AdminItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Admin() {

    // const reducerName = useSelector(store => store.reducerName);

    const dispatch = useDispatch();
    const admin = useSelector(store => store.admin);

    useEffect(() => {
        getFeedback();
    }, []);

    const getFeedback = () => {

        console.log('inGET');
        axios.get('/api/feedback').then((response) => {
            console.log('GET successful', response.data);
            dispatch({
                type: 'GET_FEEDBACK_LIST',
                payload: response.data
            })

        }).catch((err) => {
            console.log(err);
            alert('Error in Axios GET');
        });


    }



    return (
        <div>

            <h1 >Admin</h1>
            {/* <p>results: {admin}</p> */}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{
                    backgroundColor: "#d4e3e7",
                    fontSize: "large",
                    // marginLeft: "50px",
                    color: "black"
                }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feedback Id</TableCell>
                            <TableCell align="center">Feeling</TableCell>
                            <TableCell align="center">Understanding</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Comments</TableCell>
                            <TableCell align="center">Flagged</TableCell>
                            <TableCell align="center"></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {admin.map(adminitem => (<AdminItem adminitem={adminitem} getFeedback={getFeedback} />))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}

export default Admin;
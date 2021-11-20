import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';





function AdminItem(props) {

    // const reducerName = useSelector(store => store.reducerName);

    const dispatch = useDispatch();

    const deleteItem = () => {
        console.log('in deleteItem');
        axios.delete(`/api/feedback/${props.adminitem.id}`, props.adminitem).then((response) => {
            console.log(response);
            props.getFeedback();
        }).catch((err) => {
            console.log(err);
        })

    }


    return (
        <>

            {/* <h1>AdminItem</h1> */}
            {/* <h2>{JSON.stringify(props)}</h2> */}

            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {props.adminitem.id}
                </TableCell>
                <TableCell align="right">{props.adminitem.feeling}</TableCell>
                <TableCell align="right">{props.adminitem.understanding}</TableCell>
                <TableCell align="right">{props.adminitem.support}</TableCell>
                <TableCell align="right">{props.adminitem.comments}</TableCell>
                <TableCell align="right"><Button onClick={deleteItem}>🗑</Button></TableCell>

            </TableRow>

        </ >
    )
}

export default AdminItem;
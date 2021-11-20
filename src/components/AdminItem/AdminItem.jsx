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



function AdminItem(props) {

    // const reducerName = useSelector(store => store.reducerName);

    const dispatch = useDispatch();
    const AdminItem = useSelector(store => store.AdminItem);




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
            </TableRow>

        </ >
    )
}

export default AdminItem;
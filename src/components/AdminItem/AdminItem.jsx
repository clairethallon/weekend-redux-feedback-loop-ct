import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



function AdminItem(props) {

    // const reducerName = useSelector(store => store.reducerName);

    const dispatch = useDispatch();
    const AdminItem = useSelector(store => store.AdminItem);




    return (
        <div>

            <h1 >AdminItem</h1>
            <h2>{JSON.stringify(props)}</h2>

            {/* <p>results: {AdminItem}</p> */}

        </div >
    )
}

export default AdminItem;
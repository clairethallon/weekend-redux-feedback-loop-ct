import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




function Comments() {

    // const reducerName = useSelector(store => store.reducerName);
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({
            type: 'COMMENTS_FIELD',
            payload: event.target.value
        });
        console.log(event.target.value);
    }

    return (
        <div>

            <h1>Any comments you want to leave?</h1>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange}>put your comments here</TextField>
            <Link to="/support"><Button variant="contained">Back</Button></Link>
            <Link to="/review"><Button variant="contained">Next</Button></Link>


        </div>
    )
}

export default Comments;
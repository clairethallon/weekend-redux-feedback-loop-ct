import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function Understanding() {

    // const reducerName = useSelector(store => store.reducerName);
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({
            type: 'UNDERSTANDING_CHOICE',
            payload: event.target.value
        });
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>How well are you understanding the material?</h1>
            <Box sx={{ minWidth: 250 }}>
                <InputLabel id="demo-simple-select-label">Understanding</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={understanding}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                </Select>
            </Box>
            <button>Next</button>
            <p>{understanding}</p>
        </div>
    )
}

export default Understanding;
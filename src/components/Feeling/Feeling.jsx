import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function Feeling() {

    // const reducerName = useSelector(store => store.reducerName);
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({
            type: 'FEELINGS_CHOICE',
            payload: event.target.value
        });
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <Box sx={{ minWidth: 250 }}>
                <InputLabel id="demo-simple-select-label">Feeling</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={feeling}
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
            <p>{feeling}</p>
        </div>
    )
}

export default Feeling;
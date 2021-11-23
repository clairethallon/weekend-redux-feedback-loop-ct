import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';



function Understanding() {

    // const reducerName = useSelector(store => store.reducerName);
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();
    const [input, setInput] = useState(false);

    useEffect(() => {
        checkInput();
    }, []);


    const checkInput = () => {
        console.log('in checkInput');
        if (understanding === '') {
            setInput(false);
            return;
        }
        else {
            setInput(true)
            return;
        }
    }

    const handleChange = (event) => {
        setInput(true);
        dispatch({
            type: 'UNDERSTANDING_CHOICE',
            payload: event.target.value
        });
        console.log(event.target.value);
    }

    return (
        <div className="inputPadding">
            <h1>How well are you understanding the material?</h1>
            <div >
                <Box sx={{ minWidth: 250 }}>
                    <FormControl sx={{ minWidth: 250 }}>
                        <InputLabel id="demo-simple-select-label" style={{
                            marginTop: "30px"
                        }}>Understanding</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={understanding}
                            label="Age"
                            onChange={handleChange}
                            style={{
                                marginTop: "30px"
                            }}
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Link to="/" style={{ textDecoration: "none" }}><Button variant="contained"
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#4c7c91",
                        color: "black",
                        marginTop: "50px",
                        marginRight: "10px",
                        padding: "5px 30px",
                        fontSize: "24px",
                        fontFamily: 'Courier New',
                        textDecoration: 'none'
                    }}>Back</Button></Link>
                {input ?
                    <Link to="/support" style={{ textDecoration: "none" }}><Button variant="contained"
                        style={{
                            borderRadius: 5,
                            backgroundColor: "#ff9d5c",
                            color: "black",
                            marginTop: "50px",
                            marginLeft: "15px",
                            padding: "5px 30px",
                            fontSize: "24px",
                            fontFamily: 'Courier New',
                            textDecoration: 'none'
                        }}>Next</Button></Link> :
                    <Button variant="contained"
                        style={{
                            borderRadius: 5,
                            marginTop: "50px",
                            marginLeft: "15px",
                            padding: "5px 30px",
                            fontSize: "24px",
                            fontFamily: 'Courier New',
                            textDecoration: 'none'
                        }} disabled>Next</Button>
                }
            </div>
        </div>
    )
}

export default Understanding;
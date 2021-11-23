import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../App/App.css';
import FormControl from '@mui/material/FormControl';


function Feeling() {

    // const reducerName = useSelector(store => store.reducerName);
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    useEffect(() => {
        checkInput();
    }, []);

    const [input, setInput] = useState(false);

    const checkInput = () => {
        console.log('in checkInput');
        if (feeling === '') {
            setInput(false);
            return;
        }
        else {
            setInput(true)
            return;
        }
    }

    const handleChange = (event) => {
        dispatch({
            type: 'FEELINGS_CHOICE',
            payload: event.target.value
        });
        setInput(true)
        console.log(event.target.value);
    }


    return (
        // <div className="mainInputDiv" >
        <div className="inputPadding">
            <h1>How are you feeling today?</h1>
            {/* <h2>(on a scale from 1-5)</h2> */}
            <div>
                <Box sx={{ minWidth: 250 }}>
                    <FormControl sx={{ minWidth: 250 }} style={{
                        marginTop: "30px"
                    }}>

                        <InputLabel id="demo-simple-select-label"
                        >Feeling</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={feeling}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem className="select" value="1">1</MenuItem>
                            <MenuItem className="select" value="2">2</MenuItem>
                            <MenuItem className="select" value="3">3</MenuItem>
                            <MenuItem className="select" value="4">4</MenuItem>
                            <MenuItem className="select" value="5">5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {input ?
                    <Link to="/understanding" style={{ textDecoration: "none" }}><Button
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
                        }}
                        variant="contained"
                    >Next</Button></Link> :
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
                <p></p>

            </div>

        </div >
    )
}

export default Feeling;
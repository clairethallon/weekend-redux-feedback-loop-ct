import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';




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
        <div className="inputPadding">

            <h1>Any comments you want to leave?</h1>
            <div>
                <FormControl sx={{ minWidth: 250 }}>
                    <TextField id="outlined-basic" label="Type comments here" variant="outlined" onChange={handleChange}
                        style={{
                            borderRadius: 5,
                            backgroundColor: "white",
                            fontFamily: 'Courier New',
                            marginTop: "30px"
                        }}
                    ></TextField>
                </FormControl>
            </div>
            <Link to="/support" style={{
                textDecoration: "none"
            }}>
                <Button variant="contained"
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
                    }}>Back</Button>
            </Link>

            <Link to="/review" style={{ textDecoration: "none" }}
            ><Button variant="contained" style={{
                borderRadius: 5,
                backgroundColor: "#ff9d5c",
                color: "black",
                marginTop: "50px",
                marginLeft: "15px",
                padding: "5px 30px",
                fontSize: "24px",
                fontFamily: 'Courier New',
                textDecoration: 'none'
            }}>Next</Button></Link>


        </div>
    )
}

export default Comments;
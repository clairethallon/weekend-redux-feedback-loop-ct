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


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Review() {

    // const reducerName = useSelector(store => store.reducerName);
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const dispatch = useDispatch();

    const [submitted, setSubmitted] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);


    const submitFeedback = () => {
        let objectToSend = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        }
        console.log('sending', objectToSend);
        axios.post('/api/feedback', objectToSend).then((response) => {
            console.log('post successful', response.data);
            setSubmitted(true);
            handleShow();
        }).catch((err) => {
            console.log(err);
            alert('nah');
        });


    }

    const clearResponses = () => {
        dispatch({
            type: 'EMPTY',
            payload: ''
        });
    }

    return (
        <div className="inputPadding">
            <h1 >Review</h1>
            <div className="reviewList">
                <List style={{
                    borderRadius: 5,
                    backgroundColor: "#d4e3e7",
                    marginTop: "30px",
                    marginLeft: "150px",
                    marginRight: "150px",
                    fontSize: "x-large"

                }}>
                    <ListItem>Feelings:  {feeling}/5</ListItem>
                    <ListItem>Understanding:  {understanding}/5</ListItem>
                    <ListItem>Support:  {support}/5</ListItem>
                    <ListItem>Comments:  {comments}</ListItem>
                </List>
                <Link to="/comments" style={{
                    textDecoration: "none"
                }}><Button variant="contained"
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
                {submitted ?
                    <Button variant="contained" onClick={submitFeedback}
                        style={{
                            borderRadius: 5,
                            // backgroundColor: "#ff9d5c",
                            color: "black",
                            marginTop: "50px",
                            marginLeft: "15px",
                            padding: "5px 30px",
                            fontSize: "24px",
                            fontFamily: 'Courier New',
                            textDecoration: 'none'
                        }} disabled>Submitted</Button> :
                    <Button variant="contained" onClick={submitFeedback}
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
                        }} >Submit</Button>}

                <Modal
                    open={show}
                    onClose={handleClose}
                    // aria-labelledby="modal-modal-title"
                    // aria-describedby="modal-modal-description"
                    style={{
                        minWidth: 300,
                        borderRadius: 5,
                        // backgroundColor: "#ff9d5c"
                    }}>

                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ minWidth: 300 }} style={{ fontFamily: 'Courier New' }}>
                            Feedback submitted!
                        </Typography>
                        <Button variant="contained" onClick={handleClose}
                            style={{
                                borderRadius: 5,
                                backgroundColor: "#4c7c91",
                                color: "black",
                                marginTop: "50px",
                                marginRight: "10px",
                                padding: "3px 20px",
                                fontSize: "20px",
                                fontFamily: 'Courier New',
                                textDecoration: 'none'
                            }}>Close</Button>

                        <Link onClick={clearResponses} to="/" style={{
                            textDecoration: "none"
                        }}><Button variant="contained"
                            style={{
                                borderRadius: 5,
                                backgroundColor: "#ff9d5c",
                                color: "black",
                                marginTop: "50px",
                                marginLeft: "15px",
                                padding: "5px 20px",
                                fontSize: "20px",
                                fontFamily: 'Courier New',
                                textDecoration: 'none'
                            }}>Start Again</Button></Link>

                    </Box>
                </Modal>
            </div>

        </div >
    )
}

export default Review;
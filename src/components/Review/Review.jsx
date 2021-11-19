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

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <div>

            <h1 >Review</h1>
            <div className="reviewList">
                <List>
                    <ListItem>Feelings:  {feeling}/5</ListItem>
                    <ListItem>Understanding:  {understanding}/5</ListItem>
                    <ListItem>Support:  {support}/5</ListItem>
                    <ListItem>Comments:  {comments}</ListItem>
                </List>
                <Button variant="contained" onClick={submitFeedback}>Submit</Button>
                <Modal
                    open={show}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Feedback submitted!
                        </Typography>

                        <Link onClick={clearResponses} to="/" ><Button variant="contained">Record another response</Button></Link>
                        <Button variant="contained" onClick={handleClose}>Close</Button>

                    </Box>
                </Modal>
            </div>

        </div >
    )
}

export default Review;
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material/TextField';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import axios from 'axios';


function Review() {

    // const reducerName = useSelector(store => store.reducerName);
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const dispatch = useDispatch();


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
        }).catch((err) => {
            console.log(err);
            alert('nah');
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
            </div>

        </div >
    )
}

export default Review;
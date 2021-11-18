import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material/TextField';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';



function Review() {

    // const reducerName = useSelector(store => store.reducerName);
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const dispatch = useDispatch();


    return (
        <div>

            <h1>Review</h1>
            <List>
                <ListItem>Feelings: {feeling}/5</ListItem>
                <ListItem>Understanding: {understanding}/5</ListItem>
                <ListItem>Support: {support}/5</ListItem>
                <ListItem>Comments: {comments}/5</ListItem>
            </List>
            <Button variant="contained">Submit</Button>

        </div>
    )
}

export default Review;
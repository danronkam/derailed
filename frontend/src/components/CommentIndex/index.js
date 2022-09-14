import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../store/comment';

const CommentIndex = ({ listingId }) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => Object.values(state.comments))

    useEffect(() => {
        dispatch(fetchComments(listingId))
    }, [])
    
    return (
        <div>
            COMMENTS INDEX
        </div>
    )
}

export default CommentIndex;
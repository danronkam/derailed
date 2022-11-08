import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../store/comment';
import CommentIndexItem from '../CommentIndexItem';

const CommentIndex = ({ listingId }) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => Object.values(state.comments))
    
    useEffect(() => {
        dispatch(fetchComments(listingId))
    }, [])
    
    return (
        <div>
            <h3>comments</h3>
            <ul className='comment-list'>
                    {comments.map(comment => {
                        return <CommentIndexItem key={comment.id} listing={comment} />
                    })}
                </ul>
        </div>
    )
}

export default CommentIndex;
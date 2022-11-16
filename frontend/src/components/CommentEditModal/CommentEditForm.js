import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../store/comment";

function CommentEditForm({commentData}) {
    const dispatch = useDispatch()
    const [comment, setComment] = useState(commentData);
    console.log(commentData)

    const handleSubmit = e => {
        e.preventDefault()
        const newComment = {}
        // newComment.id = comment.comment.id
        newComment.body = comment.body
        
    }



    return(
        <>
        <div className="comment-edit-container">
            <form id="comment-edit" onSubmit={handleSubmit}>
                <textarea form='comment-edit' value={comment.body} onChange={e => {setComment({...comment, body: e.target.value})}} />
                <input type='submit' className='search-button' />
            </form>

        </div>
        
        </>
    )
}

export default CommentEditForm
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../store/comment";

function CommentEditForm({commentData}) {
    const dispatch = useDispatch()
    const [comment, setComment] = useState(commentData);
    const [showEditModal, setShowEditModal] = useState(true)

    const handleSubmit = e => {
        e.preventDefault()
        const newComment = {}
        newComment.author = commentData.author
        newComment.authorId = commentData.authorId
        newComment.id = commentData.id
        newComment.body = comment.body
        newComment.listingId = commentData.listingId

        dispatch(updateComment({comment: newComment}))
        setShowEditModal(false)
    }



    return(
        <>
        <div className="comment-edit-container">
            <form id="comment-edit" onSubmit={handleSubmit}>
                <textarea form='comment-edit' value={comment.body} onChange={e => {setComment({...comment, body: e.target.value})}} />
                <br />
                <input type='submit' className='search-button' />
            </form>

        </div>
        
        </>
    )
}

export default CommentEditForm
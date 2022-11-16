import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CommentEditForm from "./CommentEditForm";
import { Modal } from "../../context/Modal";
import { updateComment } from "../../store/comment";

const CommentEditModal = ({commentData}) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState(commentData.commentData);
    const [showEditModal, setShowEditModal] = useState(false)

    const handleClick = e => {
        e.preventDefault();
        setShowEditModal(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newComment = {}
        // newComment.id = comment.comment.id
        newComment.author = commentData.commentData.author
        newComment.authorId = commentData.commentData.authorId
        newComment.id = commentData.commentData.id
        newComment.body = comment.body
        newComment.listingId = commentData.commentData.listingId

        dispatch(updateComment({comment: newComment}))
        setShowEditModal(false)
    }


    return(
        <>
        <button onClick={handleClick}  className="comment-buttons"> EDIT </button>
        {showEditModal && (
            <>
                <Modal onClose={() => setShowEditModal(false)}>
                <div className="comment-edit-container">
                    <form id="comment-edit" onSubmit={handleSubmit}>
                        <textarea form='comment-edit' value={comment.body} onChange={e => {setComment({...comment, body: e.target.value})}} />
                        <br />
                        <input type='submit' className='search-button' />
                    </form>

                </div>
                    {/* <CommentEditForm commentData={comment.commentData} /> */}
                </Modal>
            
            </>
        )}

        
        </>
    )
}

export default CommentEditModal
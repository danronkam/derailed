import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../../store/comment";
import CommentEditModal from "../CommentEditModal";
import './CommentIndexItem.css'


const CommentIndexItem = (comment) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleDelete = e => {
        e.preventDefault()
        dispatch(deleteComment(comment.commentData.id))
    }

    let buttons;
    if(sessionUser.id === comment.commentData.authorId) {
        buttons = (
            <>
                <CommentEditModal commentData={comment}/>
                <button  className="comment-buttons" onClick={handleDelete}>DELETE</button>
            </>
        )
    } else {
        <>
           <p>test</p>
        </>
     
    }
    
    
    return(
        <>
        <div className="comment_container">
            <div className="comment-header-container">
                <i className="fa-solid fa-circle-user" id='comment_avatar'></i>
                <Link to={`/users/${comment.commentData.authorId}`}><p className="comment_username">{comment.commentData.author}</p></Link>
            </div>

            <p className="comment_body">{comment.commentData.body} </p>
            <div className="button_container">
                {buttons}
            </div>
        </div>
  
        
        </>
    )
}

export default CommentIndexItem
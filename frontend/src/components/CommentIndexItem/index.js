import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../store/user";
import { deleteComment } from "../../store/comment";
import './CommentIndexItem.css'


const CommentIndexItem = (comment) => {
    const dispatch = useDispatch()
    const userId = comment.listing.authorId
    const user = useSelector(getUser(userId))
    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser.id)
    console.log(user.user.id)
    console.log(comment)

    const handleDelete = e => {
        e.preventDefault()
        dispatch(deleteComment(comment.listing.id))
    }

    let buttons;
    if(sessionUser.id === user.user.id) {
        buttons = (
            <>
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
                <Link to={`/users/${user.user.id}`}><p className="comment_username">{user.user.username}</p></Link>
            </div>

            <p className="comment_body">{comment.listing.body} </p>
            <div className="button_container">
                {buttons}
            </div>
        </div>
  
        
        </>
    )
}

export default CommentIndexItem
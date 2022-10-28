import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import listingsReducer from "../../store/listings";
import { getUser } from "../../store/user";
import './CommentIndexItem.css'


const CommentIndexItem = (comment) => {
    const userId = comment.listing.authorId
    const user = useSelector(getUser(userId))
    // 
    
    console.log(user)
    return(
        <>
        <div className="comment_container">
            <div className="comment-header-container">
                <i className="fa-solid fa-circle-user" id='comment_avatar'></i>
                <p className="comment_username">{user.user.username} </p>
            </div>

            <p className="comment_body">{comment.listing.body} </p>
        </div>

        
        </>
    )
}

export default CommentIndexItem
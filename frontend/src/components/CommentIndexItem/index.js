import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import listingsReducer from "../../store/listings";
import { getUser } from "../../store/user";

const CommentIndexItem = (comment) => {
    const userId = comment.listing.authorId
    const user = useSelector(getUser(userId))
    // 
    
    console.log(user)
    return(
        <>
        <p>{user.user.username}</p>
        <p>{comment.listing.body}</p>
        
        </>
    )
}

export default CommentIndexItem
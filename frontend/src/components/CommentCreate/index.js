import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../../store/comment";
import { useState } from "react";
import { getListing } from "../../store/listings";
import "./CommentCreate.css"


const CommentCreate = ({commentData}) => {
    // const {commentId} = useParams()
    // let commentData = useSelector(getComment)

    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))
    const [body, setBody] = useState("");

    // const [comment, setComment] = useState(reportData)

    const handleSubmit = (e) => {
    
        e.preventDefault();
        console.log(sessionUser.id)
        console.log(listing.id)
        dispatch(createComment({body, author_id: sessionUser.id, listing_id: listing.id}));
    }


    return(
        <>
        <div className='comment-form-container' onSubmit={handleSubmit}>
            <form id='comment-form'>

                <textarea name='comment' form='comment-form' id="comment_text_area" onChange={(e) => setBody(e.target.value)} ></textarea>
                <br />
                <input type='submit' />
            </form>
            
        </div>
        </>
    )
}

export default CommentCreate
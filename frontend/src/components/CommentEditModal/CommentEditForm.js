import React, { useState } from "react";
import { useDispatch } from "react-redux";

function CommentEditForm({comment}) {
    const dispatch = useDispatch()
    const [body, setBody] = useState("");
    console.log(comment)



    return(
        <>
        <div className="comment-edit-container">
            <form id="comment-edit">
                <textarea form='comment-edit' onChange={(e) => setBody(e.target.value)} />
                <input type='submit' classname='search-button' />
            </form>

        </div>
        
        </>
    )
}

export default CommentEditForm
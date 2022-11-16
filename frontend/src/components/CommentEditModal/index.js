import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CommentEditForm from "./CommentEditForm";
import { Modal } from "../../context/Modal";

const CommentEditModal = ({comment}) => {
    const dispatch = useDispatch()
    const [showEditModal, setShowEditModal] = useState(false)
    // console.log(comment)

    const handleClick = e => {
        e.preventDefault();
        setShowEditModal(true)
    }

    return(
        <>
        <button onClick={handleClick}  className="comment-buttons"> EDIT </button>
        {showEditModal && (
            <>
                <Modal onClose={() => setShowEditModal(false)}>
                    <CommentEditForm comment={comment} />
                </Modal>
            
            </>
        )}

        
        </>
    )
}

export default CommentEditModal
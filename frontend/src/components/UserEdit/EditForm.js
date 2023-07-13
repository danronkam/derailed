import React from "react";
import { useForm } from "react-hook-form";

const EditForm = ({user}) => {

    const {register, handleSubmit } = useForm({

    })

    const onSubmit = (data) => {

    }
 
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="First Name"
                    type="text"
                    name="firstname"
                />
                <input
                    placeholder="Last Name"
                    type="text"
                    name="lastname"
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default EditForm
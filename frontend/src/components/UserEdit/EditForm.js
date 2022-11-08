import React from "react";
import { useForm } from "react-hook-form";

const EditForm = ({user}) => {

    const {register, handleSubmit } = useForm({
        // defaultValues: user
    })

    const onSubmit = (data) => {

    }
 
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    // ref={register}
                    placeholder="First Name"
                    type="text"
                    name="firstname"
                />
                <input
                    // ref={register}
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
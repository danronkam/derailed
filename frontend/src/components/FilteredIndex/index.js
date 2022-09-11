import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings } from "../../store/listings";

const FilteredIndex = () => {
    const dispatch = useDispatch()
    const listings = useSelector(getListings)

    return(
        <>
        <h1>This is a filtered index</h1>
        
        </>
    )
}

export default FilteredIndex
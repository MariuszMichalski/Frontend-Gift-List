import React from "react";
import {ChildrenList} from "../Components/Children/ChildrenList";
import {AddChild} from "../Components/AddChild/AddChild";

export const ChildView = () => {
    return (
        <>
            <ChildrenList/>
            <AddChild/>
        </>
    )
}
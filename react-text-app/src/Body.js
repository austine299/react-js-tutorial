import React from "react";

export default function Body(props){

    return(
        <div className="main--body">
            <h1>Welcome Back, {props.user} </h1>
        </div>
    )

}
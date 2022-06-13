import React from "react";

export default function Header(props){

    return(
        <header className="header--nav">
            <p> Current User :{props.user}</p>
        </header>
    )

}
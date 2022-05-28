import React from "react";

export default function Meme(){
    return(
        <main>
            <form className="form">
                <input 
                    type="text"
                    className="form--text"
                    placeholder="SHUT UP"
                />
                <input 
                    type="text"
                    className="form--text"
                    placeholder="AND TAKE THE MONEY"
                />
                <button className="form--button">Get a new meme image</button>
            </form>
            <div className="main--body">
                <img src="./money.PNG" alt="money" className="money--img"/>
            </div>
        </main>
    )
}
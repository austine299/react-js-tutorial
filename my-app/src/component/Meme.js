import React from "react";
import MemesData from "./MemesData";

export default function Meme(){

    let url
    function getMemesImg(){
        const memeArray = MemesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        console.log(url)

    }

    return(
        <main>
            <p>{url}</p>
            <div className="form">
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
                <button className="form--button" onClick={getMemesImg}>Get a new meme image</button>
            </div>
            
        </main>
    )
}
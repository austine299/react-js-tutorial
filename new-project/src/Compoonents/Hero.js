import React from "react";
import Card from "./Card";

import data from "./Data";

export default function Hero(){

    const cards = data.map(item =>{
        return(
            <Card 
                key = {item.id}
                openSpot = {item.openSpot}
                img ={item.coverImg}
                ratingStar = {item.ratingStar}
                rate = {item.stats.rating}
                reviewCount ={item.stats.reviewCount}
                cloth ={item.description}
                price ={item.price}
            />
        )
    })
    return(
        
        <div className="body">
           {cards}
        </div>
    )
}


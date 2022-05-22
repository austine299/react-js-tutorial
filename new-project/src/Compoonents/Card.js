import React from "react";



export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} className="card-img" alt="img" />
            <div className="crad-stats">
                <img src={props.rate} className="star" alt="rate"/>
                <span>{props.num}</span>
                <span className="gray">{props.dot}</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.cloth}</p>
            <p className="bold">{props.price}</p>
        </div>
    )
}
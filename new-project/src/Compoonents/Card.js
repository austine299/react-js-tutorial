import React from "react";



export default function Card(props){
    return(
        <div className="card">
            {props.openSpot === 0 && <div className="card-badge">SOLD OUT</div>}
            <img src={props.img} className="card-img" alt="img" />
            <div className="crad-stats">
                <img src={props.ratingStar} className="star" alt="rate"/>
                <span >{props.rate}</span>
                <span>({props.reviewCount}) .</span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.cloth}</p>
            <p className="bold">${props.price}</p>
        </div>
    )
}


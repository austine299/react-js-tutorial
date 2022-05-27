import React from "react";



export default function Card(props){

    let badgeText
    if (props.openSpot === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.img} className="card-img" alt="img" />
            <div className="crad-stats">
                <img src={props.ratingStar} className="star" alt="rate"/>
                <span >{props.rate}</span>
                <span>({props.reviewCount}) .</span>
                <span className="gray"> {props.location}</span>
            </div>
            <p>{props.cloth}</p>
            <p className="bold">${props.price}</p>
        </div>
    )
}


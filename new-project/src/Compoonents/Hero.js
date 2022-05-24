import React from "react";
import Card from "./Card";

import Img from "../img/gown3.jpg";
import Img2 from "../img/gown2.jpg";
import Img3 from "../img/gown1.jpg";
import Rate from "../img/star.jpg";

export default function Hero(){
    return(
        <div className="body">
            <Card 
                img ={Img}
                rate = {Rate}
                num ="5.0"
                dot ="(6) ."
                country ="Nigeria"
                cloth ="Sexy Gown"
                price ="$10"
            />
            <Card 
                img ={Img2}
                rate = {Rate}
                num ="5.0"
                dot ="(6) ."
                country ="Nigeria"
                cloth ="Sexy Gown"
                price ="$10"
            />
            <Card 
                img ={Img3}
                rate = {Rate}
                num ="5.0"
                dot ="(6) ."
                country ="Nigeria"
                cloth ="Sexy Gown"
                price ="$10"
            />
        </div>
    )
}


/*
<div className="card">
        <img src={Img} className="card-img" alt="img" />
        <div className="crad-stats">
            <img src={Rate} className="star" alt="rate"/>
            <span>5.0</span>
            <span className="gray">(6) .</span>
            <span className="gray">Nigeria</span>
        </div>
        <p>Sexy Gown</p>
        <p className="bold">Price: $10</p>
    </div>
    <div className="card">
        <img src={Img2} className="card-img" alt="img"  />
        <div className="crad-stats">
            <img src={Rate} className="star" alt="rate"/>
            <span>5.0</span>
            <span className="gray">(6) .</span>
            <span className="gray">Nigeria</span>
        </div>
        <p>Sexy Gown</p>
        <p className="bold">Price: $10</p>
    </div>
    <div className="card">
        <img src={Img3} className="card-img" alt="img"  />
        <div className="crad-stats">
            <img src={Rate} className="star" alt="rate"/>
            <span>5.0</span>
            <span className="gray">(6) .</span>
            <span className="gray">Nigeria</span>
        </div>
        <p>Sexy Gown</p>
        <p className="bold">Price: $10</p>
    </div>
    <div className="card">
        <img src={Img} className="card-img" alt="img" />
        <div className="crad-stats">
            <img src={Rate} className="star" alt="rate"/>
            <span>5.0</span>
            <span className="gray">(6) .</span>
            <span className="gray">Nigeria</span>
        </div>
        <p>Sexy Gown</p>
        <p className="bold">Price: $10</p>
    </div>
    <div className="card">
        <img src={Img2} className="card-img" alt="img"  />
        <div className="crad-stats">
            <img src={Rate} className="star" alt="rate"/>
            <span>5.0</span>
            <span className="gray">(6) .</span>
            <span className="gray">Nigeria</span>
        </div>
        <p>Sexy Gown</p>
        <p className="bold">Price: $10</p>
    </div>
*/

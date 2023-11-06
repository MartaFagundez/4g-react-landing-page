import React from "react";

import birdImage from "../../img/bird1.jpg";

export default function Card() {
    return <div className="card m-2" style={{maxWidth: "18rem"}}>
            <img src={birdImage} className="card-img-top" alt=""></img>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex border-top">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    ;
}
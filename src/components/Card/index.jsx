import React from "react";
import "../../index.css";

function Card(props) {
    return (

        <div className="col-12 col-md-4">
            <div className="card text-white bg-success mb-3 mx-0">
                <div className="card-header mx-0">{props.cardHeader}</div>
                <div className="card-body mx-0">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.cardText}</p>
                    {
                        (props.img !== undefined) ? <img src={props.img} className="margin-between-anchors grow-button img-stuff"
                            alt={props.alt} /> : null
                    }

                    <a className="btn btn-secondary btn-lg" style={{ marginBottom: 5 }} rel="noreferrer" target="_blank"
                        href={props.url}>{props.description} </a>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Card;
import React from "react";
import "../../index.css";
function Card(props) {
    return (
        // <>
        //     <div className="col-12 col-md-4">
        //         <div className="card text-white bg-success mb-3 mx-0">
        //             <div className="card-header mx-0">LinkedIn</div>
        //             <div className="card-body mx-0">
        //                 <h5 className="card-title">My LinkedIn Profile</h5>
        //                 <p className="card-text">Click on the LinkedIn button to see my LinkedIn Profile</p>
        //                 <a className="btn btn-secondary btn-lg" target="_blank"
        //                     href="https://www.linkedin.com/in/mario-thompson-991b8486/">LinkedIn
        //           Profile</a>
        //             </div>
        //         </div>
        //     </div>
        // </>

        
            <div className="col-12 col-md-4">
                <div className="card text-white bg-success mb-3 mx-0">
                    <div className="card-header mx-0">{props.cardHeader}</div>
                    <div className="card-body mx-0">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.cardText}</p>
                        <a className="btn btn-secondary btn-lg" target="_blank"
                            href={props.url}>{props.description}</a>
                    </div>
                </div>
            </div>
        








        //   <div
        //     className="card"
        //     style={{
        //       backgroundImage: props.image ? `url(${props.image})` : "none"
        //     }}
        //   >
        //     {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
        //     <CardBtn
        //       onClick={props.handleBtnClick}
        //       data-value="pass"
        //     />
        //     <CardBtn
        //       onClick={props.handleBtnClick}
        //       data-value="pick"
        //     />
        //   </div>
    );
}


export default Card;
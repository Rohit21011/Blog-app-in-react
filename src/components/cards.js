import React from "react";
function Card(props){
    return(
       
      <div key={props.key} className="card" >
      <div className="card-body">
        <h5 className="card-title">{props.category}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
        <p className="card-text ">
          {props.description}
        </p>
        
      </div>
    </div>
     
    )
}
export default Card;
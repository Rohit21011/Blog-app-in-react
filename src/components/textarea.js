import React from "react";
function Description_textbox(props){
    return(
        <>
        <div className="mt-4">
        <label className="form-label"  htmlFor={props.type}>
        {props.name}
      </label>
      <textarea  id={props.id} rows="10" cols="40" onChange={props.onChange} className="form-control w-50 "  />
      </div>
      </>
    )

    
}
export default Description_textbox;
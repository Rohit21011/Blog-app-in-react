import axios from "axios";
import { useFormik} from "formik";
import React, { useState } from "react";
import Button from "./Button";
import Description_textbox from "./textarea";
import Textbox from "./Textbox";
import * as Yup from 'yup';
function Create_blog(){
    
 const formik=useFormik({
    initialValues:{
        type:"Tech",
        title:"",
        description:""
    },
    validationSchema:Yup.object({
     type:Yup.string().required("required"),
     title:Yup.string().max(30,"must be less than 10 charachers").required("required"),
     description:Yup.string().max(1000,"must be less than 1000 characters").required("required")
    }),
    onSubmit:(values)=>{

           axios.post("http://localhost:4000",values)
           .then(res=>console.log(res));

    
 },
 

});
console.log(formik.values);
 
    return(
    <form onSubmit={formik.handleSubmit}>
           <label htmlFor="type">select class</label>
        <select id="type" onChange={formik.handleChange} className="ml-2" >
            <option  value="Tech">Tech</option>
            <option value="Community">Community</option>
            <option value="Entertainment">Entertainment</option>
            
        </select>
        {formik.errors.type? <p className="error">{formik.errors.type}</p>:null}
    
    <Textbox type="text" id="title" name="Enter title of blog" onChange={formik.handleChange}/>
    {formik.errors.title? <p className="error">{formik.errors.title}</p>:null}
   <Description_textbox id="description" name="Description" onChange={formik.handleChange}/>
   {formik.errors.description? <p className="error">{formik.errors.description}</p>:null}
   <Button type="submit" name="Submit" />
   {/* <div>{data.type}</div>
   <div>{data.title}</div>
   <div>{data.description}</div> */}
    </form> 
    )

    
}
export default Create_blog;
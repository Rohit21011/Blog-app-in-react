import React, { useEffect, useState } from "react";
import Card from "./cards";
import Textbox from "./Textbox";

function All_Blogs() {
  const [Data,setdata]=useState([]);
  const [search,setsearch]=useState("");
  useEffect(()=>{
    fetch("http://localhost:4000/fetch_all")
    .then(res=>res.json())
    .then(data=>setdata(data));
         },[]);
        
       
  return (
     
   <>

   <h1>All blogs</h1>
   <div className="row justify-content-around" style={{marginLeft: "-150px"}}>
  
{ Data.map((item,index)=>{
 return <Card key={index} category={item.type} title={item.title} description={item.description}/>
})}
  </div>
  </>
  )
}
export default All_Blogs;

import React, { useEffect, useState } from "react";
import Card from "./cards";
function Entertainment_blog(props){
    console.log(props)
    const [Data,setData]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/fetch_by_category",{
         method: 'post',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(({
           type: props.category,
           
         }))
         })
         .then(res=>res.json())
         .then(data=>setData(data))
     
     
       },[])
       console.log(Data);
    return (
        <>
        <h1>Entertainment blogs</h1>
        <div className="row justify-content-around" style={{marginLeft: "-150px"}}>
  
  {Data.map((item,index)=>{
   return <Card key={index} category={item.type} title={item.title} description={item.description}/>
  })} 
    </div>
        </> 
      )   
    
}
export default Entertainment_blog;
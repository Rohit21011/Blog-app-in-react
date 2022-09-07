import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import All_Blogs from "./all_blogs";
import Create_blog from "./create_blog";
import Tech_blog from "./tech_blog";
import Entertainment_blog from "./entertainment_blog";
import Community_blog from "./communiy_blog";
function Sidebar() {
  // const [getStudentLogin,setStudentLogin]=useState(<Dashboard/>);
  // function StudentLogin(heading){
  //   setStudentLogin(<Registration heading={heading}/>);
    
  // } 
  // function dashboard(){
  //   setStudentLogin(<Dashboard/>);
    
  // } 
  // function attendance(){
  //   setStudentLogin(<Attendance/>);
    
  // } 
  // function TeacherLogin(){
  //   setStudentLogin(<Textbox type="email" name="enter email"/>);
    
  // }
  return (
    <BrowserRouter>
  <div className="container-fluid">
<div className="row">
  <div className="col-3">
    <div className="sidebar">
      <ul>
      <li className="active">
        <div className="d-flex ml-3 ">
          <i className="fab fa-blogger dash-icons" />
          <Link to="/" className="card__link" >All blogs</Link>
          {/* <a className="card__link" href="#products" onClick={dashboard} >
            Dashboard
          </a> */}
        </div>
      </li>
      <li>
        <div className="d-flex ml-3 mt-3">
          <i className="	fas fa-database dash-icons" />
          <Link to="Tech_blog" className="card__link">Tech </Link>
          {/* <a className="card__link" href="#dashboard" onClick={(e)=>StudentLogin("Teacher Registration")}>
           Teacher 
          </a> */}
        </div>
      </li>
      <li>
        <div className="d-flex ml-3 mt-3">
          <i className="	fas fa-tv dash-icons" />
          <Link to="Entertainment_blog" className="card__link">Entertainment </Link>
          {/* <a className="card__link" href="#products" onClick={(e)=>StudentLogin("Student Registration")}>
            Student 
          </a> */}
        </div>
      </li>
      <li>
        <div className="d-flex ml-3 mt-3">
          <i className="	fas fa-users dash-icons" />
          <Link to="Community_blog" className="card__link">Community</Link>
          {/* <a className="card__link" href="#menu" onClick={attendance}  >
              Attendance
          </a> */}
        </div>
      </li>
      <li>
        <div className="d-flex ml-3 mt-3">
          <i className="	fas fa-pen dash-icons" />
          <Link to="create_blog" className="card__link">Create Blog</Link>
          {/* <a className="card__link" href="#menu" onClick={attendance}  >
              Attendance
          </a> */}
        </div>
      </li>
      </ul>
    </div>
  </div>
</div>
<div className="col-7 inputForm">

      <Routes>
        <Route  path="/"  element={<All_Blogs/>}/>
          <Route path="Tech_blog" element={<Tech_blog category="Tech"/>}/>
          <Route path="Entertainment_blog" element={<Entertainment_blog category="Entertainment"/>}/>
          <Route path="Community_blog" element={<Community_blog category="Community"/>} />
          <Route path="create_blog" element={<Create_blog/>} />
       
      </Routes>
   
</div>


  </div>
  </BrowserRouter>
  );
}
export default Sidebar;

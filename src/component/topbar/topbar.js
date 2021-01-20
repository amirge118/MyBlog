import React from 'react';
import './Topbar.css';
import {Link } from "react-router-dom";

function Topbar(props){


return(

<div className ="toolbar">
    
    <ul className="centertopbar">
     <li><Link className=" link" to ="/">HOME</Link></li>
     <li><Link className="link" to ="/aboutme" >ABOUT</Link></li>
     <li><Link className="link" to ="/contact" >CONTACT ME</Link></li>
     <li><Link className="link" to ="/login">LOGIN</Link></li>
    </ul>
</div>
)}
export default Topbar;

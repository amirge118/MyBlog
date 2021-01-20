import React from 'react';
import './sidebar.css';
import {Link} from "react-router-dom";
import Weather from '../weather/weather';
function Sidebar(){
return (
<div className="side-bar">

    <div className="weather">
         <header>check how the weather today:</header>
        <Weather/>
    </div>

    <hr className="line"/>
    <h1>latest</h1>
    <ul className="sidebar-header">
        <li>blog post #1 <Link to ="/post/1">go to page</Link></li>
        <li>blog post #2 <Link to ="/post/2">go to page</Link></li>
        <li>blog post #3 <Link to ="/post/3">go to page</Link></li>
    </ul>
    <hr className="line"/>
    <h1>popular</h1>
    <ul className="sidebar-header">
        <li>blog post #1 <Link to ="/post/1">go to page</Link></li>
        <li>blog post #2 <Link to ="/post/2">go to page</Link></li>
        <li>blog post #3 <Link to ="/post/3">go to page</Link></li>
    </ul>
 </div>
)}

export default Sidebar;


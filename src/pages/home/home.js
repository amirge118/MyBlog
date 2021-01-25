import Sidebar from "../../component/sidebar/sidebar";
import MainSection from "../../component/mainSection/mainSection";
import React from "react"
import Topbar from "../../component/topbar/topbar";

export default function Home(){
    return (
        <div>
            <Topbar />
            <MainSection/>
            <Sidebar/>
        </div>
    );
}
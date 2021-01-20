import './App.css';
import React from 'react';
import Topbar from './component/topbar/topbar'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Aboutme from "./pages/aboutme/aboutme";
import Contact from "./pages/contact/contact";
import Opost from "./pages/post/post";
import Login from "./pages/login/login";
class App extends React.Component {
     constructor(props) {
         super(props);
         this.state={
             user:null,
             name: null,
             pwd:null
         }
     }



     render(){
         return (
             <BrowserRouter>
             <div className="app">

             <div className="body">
                 <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/aboutme"  component={Aboutme} />
                      <Route path="/contact"  component={Contact} />
                      <Route path="/post/:id" component={Opost}/>
                      <Route path="/login" component={Login}/>
                      
                 </Switch>
             </div>
             </div>
             </BrowserRouter>
         );
}
}

export default App;

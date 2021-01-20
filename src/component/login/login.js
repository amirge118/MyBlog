import React from "react"
import axios from "axios";
import "./login.css"
export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:null,
            pass:null,
            data:[],
            res:null
        }
    }
doName=(e)=>{
    this.setState({name:e.target.value,});
}
doPass=(e)=>{
        this.setState({pass:e.target.value,});
    }

    dologin=(e)=>{
        const url="/login";
        const data = {
            user:this.state.name,
            pass:this.state.pass
        }
        axios.get(url,data).then((res)=>{
            this.setState({data:[],resp:"success!"});

        }).catch((err)=>{
            this.setState({data:[],resp:"Eroor"})});

    }

render(){
        return(
            <div className="divlogin">
                Username: <input type="text" className="namelog" onChange={this.doName}></input>
                Password: <input type="text" className="namelog" onChange={this.doPass}></input>
                <button className="loginbutn" onClick={this.state.dologin}>Login</button>
<span>{this.state.resp?this.state.resp:null}</span>

            </div>
        )


}

    }
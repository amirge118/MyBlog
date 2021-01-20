import React from 'react';
import axios from 'axios';
import './weather.css';
const key = '8d94328deebf37802111e9e90608fb78';
export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city:"Tel Aviv",
            data:null,
            resp:null
        };

    }
doEdit=(e)=>{
        this.setState({city:e.target.value,});
}
doCall=(e)=>{
        const url =`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${key}`;
        axios.get(url).then((res)=>{
                this.setState({data:res.data,resp:null});

    }).catch((err)=>{
    this.setState({data:null,resp:"Eroor"})});
}



    render() {
        const {data}=this.state;
    return(
        <div>
             <div>
               {data ?(`the weather in ${data.name} is ${data.main.temp}`):null}
           </div>
           <input type="text" onChange={this.doEdit}></input>
           <button onClick={this.doCall}>Check</button>
           <div>
               {this.state.resp?this.state.resp:null}
           </div>
          
       </div>
    );
    }
}


//api key 8d94328deebf37802111e9e90608fb78

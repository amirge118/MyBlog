import React from 'react';
import './mainSection.css';
import {Link,useParams} from "react-router-dom";
export const posts=[
{
    id:1,
title:"This is post #1 ",
content:"Manchester City are quietly building momentum, Liverpool limp over the line again and Hakim Ziyech begins to make a mark at Chelsea.",
published:"day ago",
author:"Amir Gefen"
},
{id:2,
    title:"This is post #2  ",
 content:"Jurgen Klopp described Nat Phillips' Premier League debut as a \"wow\" performance as he earned the MOTM award in Liverpool's 2-1 win over West Ham.",
 published:"2 day ago",
 author:"Amir Gefen"
 },
 {id:3,
     title:"this is post #3 ",
    content:"Bruno Fernandes is adamant he and Paul Pogba can play together, learn from each other, and achieve great things at Manchester United.",
    published:"3 day ago",
    author:"Amir Gefen"
    },
    ]


 function Post(props){

     const link = `post/${props.id}`;
return(
<div className="post">
    <h1 className="post-title"><Link to = {link}>{props.title}</Link></h1>
<p className="post-content">{props.content}</p>
<label className ="post-footer"> published {props.published} by {props.author}</label>
    <img className="post-img" src="https://wallpapercave.com/wp/wp2550666.jpg"  width="90" height="90"/>
    
</div>


)
}


function Posts(){
var postlistjsxs = posts.map(function(post){
return <Post
    id={post.id}
title={post.title}
content={post.content}
published={post.published}
author={post.author}
/>
});
return postlistjsxs;
}


class MainSection extends React.Component
{
    constructor(props) {
    super(props);
    this.state={
        cityname:null

    }
}

render(){
return(
    <section className ="body">
    <title className ="blog-title">----------my blog----------</title>
      <Posts/>
    </section>

);}
}

export default MainSection;
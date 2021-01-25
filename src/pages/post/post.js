
import React from "react";
import {useParams} from "react-router-dom";
import {posts} from "../../component/mainSection/mainSection";


export default function Opost(){
    let {id}= useParams();
    var i,showpost;
    console.log(id);
    for (i =0;i<posts.length;i++){
        if (posts[i].id == id){
            showpost={ id:posts[i].id,
                title:posts[i].title,
                content:posts[i].content,
                published:posts[i].published,
                author:posts[i].author
            }

            console.log(id);
            break;
        }
    }

    return (
        <div className="post">

                <h1 className="post-title">{showpost.title}</h1>
                <p className="post-content">{showpost.content}</p>
                <label className ="post-footer"> published {showpost.published} by {showpost.author}</label>
                <img className="post-img" src="https://wallpapercave.com/wp/wp2550666.jpg"  width="90" height="90"/>

            </div>
    )

}
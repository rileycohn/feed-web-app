import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import Post from './Post';
import ReactDOM from 'react-dom';

function TweetBox() {
    let j = 50;
    return(
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://th.bing.com/th/id/OIP.nqBtDRTkJOqNwWdx3j9kwQHaHa?w=214&h=213&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
                    <input name="input_text" placeholder="What's happening?"  type="text" id="text_id"/>                                 
                </div> 
                <input className="tweetBox__imageInput" 
                       placeholder="Optional: Enter image URL" 
                       type="text"
                       id="image_id"/>      
                <Button id="bt1" className="tweetBox__tweetButton"
                    onClick={()=> {
                            let post_text = document.getElementById("text_id").value;
                            let post_image = document.getElementById("image_id").value;
                            console.log(document.getElementById("image_id").value);
                            console.log("value of j is: " + j);
                            document.getElementById("text_id").value = "";
                            document.getElementById("image_id").value = "";
                            ReactDOM.render(
                                <Post avatar={"https://th.bing.com/th/id/OIP.nqBtDRTkJOqNwWdx3j9kwQHaHa?w=214&h=213&c=7&r=0&o=5&dpr=1.5&pid=1.7"}
                                      displayName={"Ruben Bojorquez"}
                                      username={"@rubenBojorquez"}
                                      id="test_post"
                                      text={post_text}
                                      image={post_image}/>, document.getElementById(j));
                            j--;
                            console.log("value of j after click is: " + j);
                    }}
                    >Feed</Button>
                    <div id="1"></div>
                    <div id="2"></div>
                    <div id="3"></div>
                    <div id="4"></div>
                    <div id="5"></div>
                    <div id="6"></div>
                    <div id="7"></div>
                    <div id="8"></div>
                    <div id="9"></div>
                    <div id="10"></div>
                    <div id="11"></div>
                    <div id="12"></div>
                    <div id="13"></div>
                    <div id="14"></div>
                    <div id="15"></div>
                    <div id="16"></div>
                    <div id="17"></div>
                    <div id="18"></div>
                    <div id="19"></div>
                    <div id="20"></div>
                    <div id="21"></div>
                    <div id="22"></div>
                    <div id="23"></div>
                    <div id="24"></div>
                    <div id="25"></div>
                    <div id="26"></div>
                    <div id="27"></div>
                    <div id="28"></div>
                    <div id="29"></div>
                    <div id="30"></div>
                    <div id="31"></div>
                    <div id="32"></div>
                    <div id="33"></div>
                    <div id="34"></div>
                    <div id="35"></div>
                    <div id="36"></div>
                    <div id="37"></div>
                    <div id="38"></div>
                    <div id="39"></div>
                    <div id="40"></div>
                    <div id="41"></div>
                    <div id="42"></div>
                    <div id="43"></div>
                    <div id="44"></div>
                    <div id="45"></div>
                    <div id="46"></div>
                    <div id="47"></div>
                    <div id="48"></div>
                    <div id="49"></div>
                    <div id="50"></div>                    
            </form>
        </div>
    )
}

export default TweetBox;
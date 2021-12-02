import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import Post from './Post';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import API from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import {getPostV3, getProfileV3, listLikesV3s, listPostV3s, listProfileV3s} from './graphql/queries';
import {listPostWithProfileV3} from './graphql/custom_queries';



function TweetBox() {

    const [postsWithProfile, setPostsWithProfile] = useState([]);

    const [postsToUsername, setPostsToUsername] = useState([]);

    const [postsToAvatar, setPostsToAvatar] = useState([]);


    useEffect(() => {
      fetchPostsWithProfile();
    }, []);
  
    const fetchPostsWithProfile = async () => {
      try {
        const postDataWithProfile = await API.graphql(graphqlOperation(listPostWithProfileV3));
        console.log("data:",postDataWithProfile.data);
        const postListWithProfile = postDataWithProfile.data.listPostV3s.items;
        let profileNames = [];
        let profileAvatars = [];
        for(let i = 0; i < postListWithProfile.length; i++) {

          const profileNameForPost = await API.graphql(graphqlOperation(getProfileV3, { id: postListWithProfile[i].profileID}));
          if(profileNameForPost.data && profileNameForPost.data.getProfileV3 && profileNameForPost.data.getProfileV3.name) {
            profileNames.push(profileNameForPost.data.getProfileV3.name);
            profileAvatars.push(profileNameForPost.data.getProfileV3.profilePic);
            console.log("Data ", profileNameForPost.data);
          }
          else {
            profileNames.push("Unknown");
            profileAvatars.push("https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg");
          }
        }
        
        console.log('post list with profile', postListWithProfile);
        setPostsWithProfile(postListWithProfile);
        setPostsToUsername(profileNames);
        setPostsToAvatar(profileAvatars);
      } catch(error) {
        console.log('error on fetching posts with profile', error);
      }
    }
        
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
                            if(post_text == "" && post_image == "") {
                                alert("ERROR: There is nothing to post. Both text fields are empty");
                            }
                            else {
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
                    }}}
                    >Feed</Button>
                <br/><div className="tweetBox__border"></div>

            </form>
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
            <div>
            {               
            postsWithProfile.map((element, index) => (
                     <Post avatar={postsToAvatar[index]}
                              displayName={postsToUsername[index]}
                              username={postsToUsername[index]}
                              id={element.profileID}
                              text={element.post} 
                              image={"https://th.bing.com/th/id/OIP.2I5m3mAT8uztVwT80eKHggHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"}/>                
              ))}
            </div>
        </div>
       
    )
}

export default TweetBox;
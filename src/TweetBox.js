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
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //   fetchPosts();
    // }, []);
  
    // const fetchPosts = async () => {
    //   try {
    //     const postData = await API.graphql(graphqlOperation(listPostV3s));
    //     const postList = postData.data.listPostV3s.items;
    //     console.log('post list', postList);
    //     setPosts(postList);
    //   } catch(error) {
    //     console.log('error on fetching posts', error);
    //   }
    // }

    const [postsWithProfile, setPostsWithProfile] = useState([]);

    useEffect(() => {
      fetchPostsWithProfile();
    }, []);
  
    const fetchPostsWithProfile = async () => {
      try {
        const postDataWithProfile = await API.graphql(graphqlOperation(listPostWithProfileV3));
        console.log("data:",postDataWithProfile.data);
        const postListWithProfile = postDataWithProfile.data.listPostV3s.items;
        console.log('post list with profile', postListWithProfile);
        setPostsWithProfile(postListWithProfile);
      } catch(error) {
        console.log('error on fetching posts with profile', error);
      }
    }

    /** */
    // const [profile, setProfile] = useState([]);

    // useEffect(() => {
    //   fetchProfile();
    // }, []);
  
    // const fetchProfile = async () => {
    //   try {
    //     const profile = await API.graphql(graphqlOperation(listProfileV3s));
    //     const profileData = profile.data.listProfileV3s.items;
    //     console.log('profile data', profileData);
    //     setProfile(profileData);
    //   }
    //   catch(error) {
    //     console.log('ERROR on getting profiles', error);
    //   }
    // }
        
    let j = 50;
  //  console.log("profile: ", profile/*[0].profilePic*/);
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
            {postsWithProfile.map(post => (
                     <Post avatar={post.profilePic}
                              displayName={post.profileID}
                              username={"@" + post.profileID}
                              id={post.profileID}
                              text={post.post} 
                              image={"https://th.bing.com/th/id/OIP.2I5m3mAT8uztVwT80eKHggHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"}/>                
              ))}
              {/* {posts.map(post => (
                     <Post avatar={profile[3].profilePic}
                              displayName={profile[3].name}
                              username={"@" + profile[3].name}
                              id={post.id}
                              text={post.post}
                              image={"https://th.bing.com/th/id/OIP.2I5m3mAT8uztVwT80eKHggHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"}/>                
              ))} */}
            </div>
        </div>
       
    )
}

export default TweetBox;
import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return(
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://th.bing.com/th/id/R39d9721f02ebe3425b52301757636b35?rik=FeL3k%2beRjvhBSg&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f09%2fblade-runner-2049-image-ryan-gosling.jpg&ehk=YtCM9UeVff7nSVTGthQ530FmiXbTQVmlAOuf4LL8quw%3d&risl=&pid=ImgRaw"/>
                    <input placeholder="What's happening?"  type="text"/>                                 
                </div> 
                <input className="tweetBox__imageInput" 
                       placeholder="Optional: Enter image URL" 
                       type="text"/>      
                <Button className="tweetBox__tweetButton">Feed</Button>
            </form>

        </div>
    )
}

export default TweetBox;
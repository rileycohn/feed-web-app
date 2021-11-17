import React, { forwardRef } from "react";
import "./Post.css";
import "./Like.css";
import { Avatar, colors } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import Like from './Like';
import MyCommentBox from './comment';

function Post(props) {
  let state = { liked: false };
  let toggle = () => {
    let localLiked = this.state.liked;

    // Toggle the state variable liked
    localLiked = !localLiked;
    this.setState({ liked: localLiked });
  }
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={props.avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {props.displayName}{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                {props.username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{props.text}</p>
          </div>
        </div>
        <img src={props.image} alt="" />
        <div id = "first" className="post__footer">
          <MyCommentBox />
          <RepeatIcon className="interaction" fontSize="small" />
          <Like />
          <PublishIcon className="interaction" fontSize="small" />
        </div>
        <div id="commentBox">
          <br />
          <form id="form">
            <input type="text" name="Name" size="60" placeholder="Type comment..." />
            <text>    </text>
            <button disabled>Post</button>
          </form>
        </div>
      </div>
    </div>
  );

};


export default Post;
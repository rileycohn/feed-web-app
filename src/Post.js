import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post(props) {
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
              <VerifiedUserIcon className="post__badge"/>
                {props.username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{props.text}</p>
          </div>
        </div>
        <img src={props.image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon className="interaction" fontSize="small" />
          <RepeatIcon className="interaction" fontSize="small" />
          <FavoriteBorderIcon className="interaction" fontSize="small" />
          <PublishIcon className="interaction" fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
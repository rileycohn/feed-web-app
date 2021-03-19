import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './PostStyle.css';
  
  function Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        height="80"
        width="80"
        alt={props.user.name}
      />
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
        <div className="Feed-name">
          {props.user.feedName}
        </div>
      </div>
    );
  }
  
  function TextContent(props) {
    return(
      <div className="TextContent">{props.user.text}</div>
    );
  }

  function Images(props=[]) {
    return (
      <div className="Photos">
        <img
          className="Images"
          src={props.user.image}
          alt={props.user.description}
          height="200"
          width="200"
        />;
      </div>
      );
  }

  function Interactions() {
    return (
      <div className ="Interactions">
              <hr id="line"/>
              <i className="fa fa-thumbs-o-up"></i>
              &emsp;0&emsp;&emsp;
              <i className="fa fa-retweet"></i>
              &emsp;0
      </div>
    );
  }

  export default function Post(props) {
    return (
      <div className="Post">
        <UserInfo user={props.author} />
        <TextContent user={props.content}/>
        <Images user={props.images}/>
        <Interactions/>
        <hr id="line"/>
        <br/><br/>
      </div>
    );
  }
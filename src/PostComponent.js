import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

export default function Post(props) {
  return (
    <div className="Post">
      <UserInfo user={props.author} />
      <div className="Post-text">{props.text}</div>
      <div className="Post-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
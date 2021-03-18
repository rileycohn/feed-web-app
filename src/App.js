import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Post from "./PostComponent";
import React from "react";

function App() {
  let author = {
    avatarUrl: "https://google.com",
    name: "riley"
  }
return(
  <>
  <AmplifySignOut button-text="Sign Out"/>
  <Post text="Test" date="2021-01-01" author={author}/>
  </>
);
}

export default withAuthenticator(App);

import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import "./App.css";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import API from '@aws-amplify/api';

function App() {

  return (
    <div className="app">
      <AmplifySignOut button-text="Sign Out"/>
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default withAuthenticator(App);

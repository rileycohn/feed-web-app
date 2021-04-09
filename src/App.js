import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import "./App.css";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  function reload() {
    window.location.reload(false);
  }
  return (
    //BEM
    <div className="app">
      <AmplifySignOut button-text="Sign Out"/>
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default withAuthenticator(App);

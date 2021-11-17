import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import "./App.css";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
    </div>
  );
}

export default withAuthenticator(App);

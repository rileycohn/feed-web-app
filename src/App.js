import logo from './logo.svg';
import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <>
    <AmplifySignOut button-text="Sign Out"/>
    </>
  );
}

export default withAuthenticator(App);

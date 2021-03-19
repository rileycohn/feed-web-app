import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Post from './PostComponent';
import React from 'react';

function App() {
  let author1={
    avatarUrl: 'https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png',
    name: "User 1",
    feedName: "Feed 1",
  }
  let author2={
    avatarUrl: 'https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png',
    name: "User 2",
    feedName: "Feed 2",
  }
  let content={
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
  }
  let image1={
    image: "https://www.99inspiration.com/wp-content/uploads/2016/01/Beautiful-Landscape-Photography-by-Daniel-Herr-1024x683.jpg",
    description: 'Blade Runner pic'
  }
  let image2={
    image: "https://th.bing.com/th/id/R629eacd918be613de5bbf4cee057f26e?rik=thlvs8b3gkG5%2fw&riu=http%3a%2f%2fi.ytimg.com%2fvi%2fT9K2zjVaodk%2fmaxresdefault.jpg&ehk=CihWn31YAQrrJGy5Pu2QcZ%2f5s8w5yfNhWANnCfLovPc%3d&risl=&pid=ImgRaw",
    description: 'Blade Runner pic'
  }

return(
  <>
  <AmplifySignOut button-text="Sign Out"/>
  <Post content={content} author={author1} images={image1}/>
  <Post content={content} author={author2} images={image2}/>

  </>
);
}

export default withAuthenticator(App);

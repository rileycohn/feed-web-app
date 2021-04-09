import React from 'react';
import TweetBox from  './TweetBox';
import Post from './Post';
import './Feed.css';

function Feed() {
    return (
       <div className="feed">
           <div className="feed__header">
               <h2>Home</h2>
           </div>
           <TweetBox/>
           <Post    avatar={"https://th.bing.com/th/id/R39d9721f02ebe3425b52301757636b35?rik=FeL3k%2beRjvhBSg&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f09%2fblade-runner-2049-image-ryan-gosling.jpg&ehk=YtCM9UeVff7nSVTGthQ530FmiXbTQVmlAOuf4LL8quw%3d&risl=&pid=ImgRaw"} 
                    displayName={"Ruben Bojorquez"}
                    username={"@rubenBojorquez"}
                    text={"Hello world, this is my first post. There is still more work to be done. Nothing is connected to the backend yet. All of these posts have been hardcoded and the plan is to customize the webpage for Feed."}
                    image={"https://66.media.tumblr.com/8c769075a4d4a06a6bfda9a52df6e67f/tumblr_p5fzcoTWYh1rey868o1_540.gif"}
                />
            <Post    avatar={"https://th.bing.com/th/id/R39d9721f02ebe3425b52301757636b35?rik=FeL3k%2beRjvhBSg&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f09%2fblade-runner-2049-image-ryan-gosling.jpg&ehk=YtCM9UeVff7nSVTGthQ530FmiXbTQVmlAOuf4LL8quw%3d&risl=&pid=ImgRaw"} 
                    displayName={"Ruben Bojorquez"}
                    username={"@rubenBojorquez"}
                    text={"Hello world, this is my second post. This is a GIF from the movie Blade Runner 2049."}
                    image={"https://static1.squarespace.com/static/588a4776f5e23132a09d23b2/t/59d783fde5dd5b440b26a655/1507296264115/blade.gif"}
            />
             <Post    avatar={"https://th.bing.com/th/id/R39d9721f02ebe3425b52301757636b35?rik=FeL3k%2beRjvhBSg&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f09%2fblade-runner-2049-image-ryan-gosling.jpg&ehk=YtCM9UeVff7nSVTGthQ530FmiXbTQVmlAOuf4LL8quw%3d&risl=&pid=ImgRaw"} 
                    displayName={"Ruben Bojorquez"}
                    username={"@rubenBojorquez"}
                    text={"Hello world, this is my third post. This is a GIF from the movie Parasite."}
                    image={"https://0.soompi.io/wp-content/uploads/2019/10/25163330/Song-Kang-Ho-Parasite10.gif"}
            />
             <Post    avatar={"https://th.bing.com/th/id/R39d9721f02ebe3425b52301757636b35?rik=FeL3k%2beRjvhBSg&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f09%2fblade-runner-2049-image-ryan-gosling.jpg&ehk=YtCM9UeVff7nSVTGthQ530FmiXbTQVmlAOuf4LL8quw%3d&risl=&pid=ImgRaw"} 
                    displayName={"Ruben Bojorquez"}
                    username={"@rubenBojorquez"}
                    text={"Hello World, this is my fourth post. This is a GIF from the movie Inception"}
                    image={"https://i.gifer.com/VMs3.gif"}
            />
       </div>
    );
}

export default Feed;
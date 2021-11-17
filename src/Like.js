import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from '@iconify/react';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Like.css"

class Like extends Component {
 
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  state = { liked: false, 
            count: 0};
  toggle = () => {
    let localLiked = this.state.liked;
    let localCount = this.state.count;
    localLiked = !localLiked;
    if(localCount == 1) {
      localCount = 0;
    }
    else if(localCount == 0) {
      localCount = 1;
    }
    this.setState({ liked: localLiked });
    this.setState({ count: localCount});
  };

  render() {
    let count = this.state.count;
    return (
      <div className="container">
        <center>
          <div
            className="container"
           
            onClick={() => this.toggle()}
          >
            {this.state.liked === false ? (
              <div>
              <FavoriteBorderIcon className="interaction1" fontSize="small">
              <text>  {count}</text>
              </FavoriteBorderIcon>
              </div>
            ) : (
              <div>
              <Icon icon="twemoji:red-heart" className="interaction2"/>
              <text>  {count}</text>
              </div>
            )}
          </div>
        </center>
      </div>
    );
  }
}
  
export default Like;
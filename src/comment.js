import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from '@iconify/react';
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";
import Like from './Like';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import "./comment.css"

class MyCommentBox extends Component {

    state = { liked: false };
    toggle = () => {
        let localLiked = this.state.liked;
        localLiked = !localLiked;
        this.setState({ liked: localLiked });
    };

    render() {
        let liked = this.state.liked;
        return (
            <div className="container">
                <center>
                    <div
                        className="container"

                        onClick={() => this.toggle()}
                    >
                        {this.state.liked === false ? (
                            <ChatBubbleOutlineIcon className="interaction" fontSize="small" />
                        ) : (
                            <div>
                            <ChatBubbleOutlineIcon className="interaction" fontSize="small" />
                            </div>
                        )}
                    </div>
                </center>
            </div>
        );
    }
}

export default MyCommentBox;
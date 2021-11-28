import React from "react";
import './Sidebar.css';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Settings } from "@material-ui/icons";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarOption id="first" active Icon={HomeIcon} text="Home"/>
            <SidebarOption id="second" Icon={SearchIcon} text="Explore"/>
            <SidebarOption id="third" Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption id="fourth" Icon={MailOutlineIcon} text="Messages"/>
            {/* <SidebarOption id="fifth" Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption id="sixth" Icon={ListAltIcon} text="Lists"/> */}
            <SidebarOption id="seventh" Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption id="fifth" Icon={Settings} text="Settings"/>
            <SidebarOption id="eigth" Icon={MoreHorizIcon} text="More"/>

            <AmplifySignOut button-text="Sign Out"/>

        </div>
    );
}

export default Sidebar;
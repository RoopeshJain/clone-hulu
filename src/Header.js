import React from "react";
import "./Header.css";
import logo from "./hulu-white.png";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    <div className="header">
      <div className="headers__icons"></div>
      <div className="headers__icon headers__icon--active">
        <HomeIcon />
        <p>Home</p>
      </div>
      <div className="headers__icon">
        <FlashOnIcon />
        <p>Trending</p>
      </div>
      <div className="headers__icon">
        <LiveTvIcon />
        <p>Verified</p>
      </div>
      <div className="headers__icon">
        <VideoLibraryIcon />
        <p>Collections</p>
      </div>
      <div className="headers__icon">
        <SearchIcon />
        <p>Search</p>
      </div>
      <div className="headers__icon">
        <PersonOutlineIcon />
        <p>Account</p>
      </div>
      <img src={logo} alt=""></img>
    </div>
  );
}

export default Header;

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SearchPage from "./SearchPage";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/About">About</Link>
          <Link to="/Store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/Gmail">Gmail</Link>
          <Link to="/Images">Images</Link>
          <AppsIcon className="appIcon" />
          <Avatar className="avatar" />
        </div>
      </div>
      <div className="home_body">
        <img
          className="home_bodyImage"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="googleImage"
        />
        <SearchPage hideButton />
      </div>
    </div>
  );
};

export default Home;

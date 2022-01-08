import React from "react";
import PhotoCards from "./components/PhotoCards";
import Posts from "./components/Posts";
import "./style.css";
import { notification, comment } from "./assets/images";

const Feeds = () => {
  return (
    <div className="main">
      <div className="main_header">
        <h2 className="main_title">Discover</h2>
        <div>
          <img className="main_icon" src={notification} />
          <img className="main_icon" src={comment} />
        </div>
      </div>
      <PhotoCards />
      <div className="main_content">
        <h2 className="main_content-title">
          Feed<sup className="power">2</sup>
        </h2>
        <div>
          <span className="main_content-filter main_content-filter--selected">
            Friends
          </span>
          <span className="main_content-filter">All</span>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Feeds;

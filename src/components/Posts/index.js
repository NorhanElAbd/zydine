import React, { useEffect, useState } from "react";
import "./style.css";
import { addComment, love, share } from "../../assets/images";
import reactStringReplace from "react-string-replace";
import axios from "axios";
import { DateTime } from "luxon";

const Posts = () => {
  const [postsData, getPostsData] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      getPostsData(res.data);
    }, []);
  });

  const isoStringToRelativeTime = (isoString) =>
    DateTime.fromISO(isoString).toRelative();

  const formatContent = (content, mention) => {
    if (mention) {
      const store = Object.keys(mention[0])[0];
      const link = `https://${mention[0][store]}`;
      return reactStringReplace(content, store, (match) => (
        <a href={link} target="_blank" className="post-list">
          {match}
        </a>
      ));
    }
  };

  if (!postsData)
    return (
      <div className="stage">
        <div className="dot-collision"></div>
      </div>
    );

  return (
    <>
      {postsData.map((post) => (
        <div className="posts" key={post.id}>
          <div className="post_profile">
            <img src={post.user.avatar} />
          </div>
          <div className="posts_details">
            <div className="posts_details-user">
              <span>{post.user.nickname}</span>
              <span className="time">{` . ${isoStringToRelativeTime(
                post.created_at
              )}`}</span>
            </div>
            <p className="posts_details-content">
              {formatContent(post.body.postContent, post.body.mentions)}
            </p>
            <div className="posts_details-actions">
              <div className="action">
                <img src={love} />
                <span>{post.number_of_likes}</span>
              </div>
              <div className="action">
                <img src={addComment} />
                <span>{post.number_of_comments}</span>
              </div>
              <div className="action">
                <img src={share} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;

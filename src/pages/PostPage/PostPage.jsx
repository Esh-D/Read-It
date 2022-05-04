import React from 'react';
import Navbar from "../../components/navbar/Navbar"
import RightBar from "../../components/rightBar/RightBar"
import PostFeed from '../../components/postFeed/PostFeed';
import Post from '../../components/post/Post';
import CommunityHeader from '../../components/communityHeader/CommunityHeader'; 

import "./postPage.css";

const PostPage = () => {
  return (
    <>
      <div className="background">
        <Navbar />
        <div className="postPageContainer">
          <div className="discussionContainer">
            <Post />
          </div>
          <RightBar type="Post"/>
        </div>
      </div>
    </>

    
  )
}

export default PostPage;
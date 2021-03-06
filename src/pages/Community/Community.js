import React from 'react';
import Navbar from "../../components/navbar/Navbar"
import RightBar from "../../components/rightBar/RightBar"
import PostFeed from '../../components/postFeed/PostFeed';
import CommunityHeader from '../../components/communityHeader/CommunityHeader'; 

import "./community.css";

const Community = () => {
  return (
    <>
      <div className="background">
        <Navbar />
        <CommunityHeader/>
        <div className="homeContainer">
          <PostFeed />
          <RightBar type="Community"/>
        </div>
      </div>
    </>

    
  )
}

export default Community;
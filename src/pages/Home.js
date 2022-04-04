import React from 'react';
import Navbar from "../components/navbar/Navbar"
import RightBar from "../components/rightBar/RightBar"
import PostFeed from "../components/postFeed/PostFeed"

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="background">
        <Navbar />
        <div className="homeContainer">
          <PostFeed />
          <RightBar />
        </div>
      </div>
    </>
  )
}

export default Home;
import React from 'react';
import "./aboutCard.css"

const AboutCard = () => {
    return ( 
        <div className="aboutCard">
            <div className="acWrapper">
                <div className="acTop">
                    <div className="acBanner">
                        About Community
                    </div>
                </div>
                <div className="acBody">
                    <div className="acText">
                        The subreddit for Arcane, an animated series created by Riot Games portraying the origins of two iconic League champions, set in the utopian Piltover and the oppressed underground of Zaun.
                    </div>
                    <div className="acActionButtons">
                        <div className="buttonPost" onClick={() => {console.log("Create Post")}}>
                            Create Post
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;
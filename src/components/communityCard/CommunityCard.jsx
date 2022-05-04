import React from 'react';
import "./communityCard.css"

const CommunityCard = () => {
    let community = "Arcane";
    let description = "The subreddit for Arcane, an animated series created by Riot Games portraying the origins of two iconic League champions, set in the utopian Piltover and the oppressed underground of Zaun.";

    return ( 
        <div className="communityCard">
            <div className="ccWrapper">
                <div className="ccTop">
                    <div className="ccBanner">
                        r/{community}
                    </div>
                </div>
                <div className="ccBody">
                    <div className="ccText">
                        {description}
                    </div>
                    <div className="ccActionButtons">
                        <div className="buttonJoin" onClick={() => {console.log("Create Post")}}>
                            Join
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityCard;
import React from 'react';
import "./communityHeader.css"

const CommunityHeader = () => {
    let community = "Arcane";

    return ( 
        <div className="communityHeader">
            <div className="chWrapper">
                <div className="chTop">
                    <div className="chBanner">
                        r/{community}
                    </div>
                </div>
                <div className="chBottom">
                    <div className="chTitle">
                        {community}
                    </div>
                    <div className="acActionButtons">
                        <div className="buttonJoin" onClick={() => {console.log("Create Post")}}>
                            Join
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityHeader;
import "./rightBar.css"

import HomeWelcomeCard from "../homeWelcome/HomeWelcome";
import AboutCard from "../../components/aboutCard/AboutCard"
import CommunityCard from "../../components/communityCard/CommunityCard"

const RightBar = ({type}) => {
    return (
        <div className="rightBarContainer">
            {type === "Home" && <HomeWelcomeCard />}
            {type === "Community" && <AboutCard />}
            {type === "Post" && <CommunityCard />}
        </div>
    )
}

export default RightBar;
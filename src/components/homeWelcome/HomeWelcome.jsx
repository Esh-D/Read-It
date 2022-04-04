import "./homeWelcome.css"
import CircleIcon from '@mui/icons-material/Circle';

const HomeWelcomeCard = () => {
    return ( 
        <div className="homeWelcome">
            <div className="hwWrapper">
                <div className="hwTop">
                    <div className="hwBanner"></div>
                </div>
                <div className="hwBody">
                    <div className="hwTitle">
                        <CircleIcon/>
                        <div className="hwTitleText">
                            Home
                        </div>
                    </div>
                    <div className="hwText">
                        Your personal readIt frontpage. Come here to check in with your favorite communities.
                    </div>
                    <div className="hwActionButtons">
                        <div className="buttonPost" onClick={() => {console.log("Create Post")}}>
                            Create Post
                        </div>
                        <div className="buttonCommunity" onClick={() => {console.log("Create Community")}}>
                            Create Community
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWelcomeCard;
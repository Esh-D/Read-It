import "./post.css"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'; 
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';

const Post = () => {
    // if preview is true, postBody text is shortened, if not, then its in full
    // ^will make that functionality later, just a reminder
    let preview = true;
    let saved = false;
    let title = "Arcane is awesome!";
    let body = "I just love Arcane. The characters, the plot, the art, everything about it is great. My favourite character is Vi.";
    let community = "Arcane";
    let user = "Eshika";
    let time = "5 hours";
    let comments = 6;

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postLeft">
                    <div className="upIcon">
                        <ArrowCircleUpIcon />
                    </div>
                    57
                    <div className="downIcon">
                        <ArrowCircleDownIcon/>
                    </div>
                </div>
                <div className="postRight">
                    <div className="postTop">
                        r/{community} - Posted by {user} {time} ago
                    </div>
                    <div className="postTitleContainer">
                        <div className="postTitle">
                            {title}
                        </div>
                    </div>
                    <div className="postBody">
                        {preview && 
                        <div className="postBodyText">
                            {body}
                        </div>}
                    </div>
                    <div className="postBottom">
                        <div className="actionButton">
                            <ForumOutlinedIcon />
                            <div className="buttonText">
                                {comments} Comments
                            </div>
                        </div>
                        <div className="actionButton">
                            {saved ? <BookmarkAddedOutlinedIcon /> :
                            <BookmarkAddOutlinedIcon />}
                            <div className="buttonText">
                                Save
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
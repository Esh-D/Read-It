import "./post.css"

import {useState} from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'; 
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';

const Post = () => {
    // if preview is true, postBody text is shortened, if not, then its in full
    // ^will make that functionality later, just a reminder
    let preview = true;
    let [saved, setSaved] = useState(false);
    let title = "Arcane is awesome!";
    let body = "I just love Arcane. The characters, the plot, the art, everything about it is great. My favourite character is Vi.";
    let community = "Arcane";
    let user = "Eshika";
    let time = "5 hours";
    let comments = 6;
    let [upvotes, setUpvotes] = useState(0);
    let [downvotes, setDownvotes] = useState(0);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postLeft">
                    <div className="upIcon" onClick={() => {setUpvotes(++upvotes)}}>
                        <ArrowCircleUpIcon />
                    </div>
                    {upvotes - downvotes}
                    <div className="downIcon" onClick={() => {setDownvotes(++downvotes)}}>
                        <ArrowCircleDownIcon/>
                    </div>
                </div>
                <div className="postRight">
                    <div className="postTop">
                        <span className="postCommunity">r/{community}</span> - Posted by u/{user} {time} ago
                    </div>
                    <div className="postTitleContainer">
                        <span className="postTitle" onClick={() => {console.log("Go to post page")}}>
                            {title}
                        </span>
                    </div>
                    <div className="postBody">
                        {preview && 
                        <div className="postBodyText">
                            {body}
                        </div>}
                    </div>
                    <div className="postBottom">
                        <div className="postActionButton">
                            <ForumOutlinedIcon />
                            <span className="buttonText" onClick={() => {console.log("Go to post page (where comments are)")}}>
                                {comments} Comments
                            </span>
                        </div>
                        
                        {saved ? 
                            <div className="postActionButton" onClick={() => {setSaved(!saved)}}>
                                <BookmarkAddOutlinedIcon />
                                <span className="buttonText">
                                    Save
                                </span>
                            </div>
                        :
                            <div className="postActionButton" onClick={() => {setSaved(!saved)}}>
                                <BookmarkAddedOutlinedIcon />
                                <span className="buttonText">
                                    Saved
                                </span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
import "./postFeed.css";

import Post from "../post/Post";
import SortBar from "../sortBar/SortBar"

const PostFeed = () => {
    return (
        <div className="postFeedContainer">
            <div className="postFeedWrapper">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default PostFeed;
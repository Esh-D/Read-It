import "./postFeed.css";

import Post from "../post/Post";

const PostFeed = () => {
    return (
        <div className="postFeedContainer">
            <div className="postFeedWrapper">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default PostFeed;
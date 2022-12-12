import React from "react";
import PostContent from "./PostContent";
import PostNav from "./PostNav";
import "./style.css"

function Post(props) {
    return (
        <div className="cl">
            <PostContent text={props.text} />
            <PostNav text={props.button} />
        </div>
    )
}

export default Post;
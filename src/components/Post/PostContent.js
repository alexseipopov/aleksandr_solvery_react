import React from "react";
import FetchApi from "../FetchApi";
// import Ccomponent from "../FetchApi2";

function PostContent() {
    return (
        <div >
            <p id='post'>
                <FetchApi/>
            </p>
            <hr/>
            <p>
                {/* <Ccomponent /> */}
            </p> 
        </div>
    );
}

export default PostContent;

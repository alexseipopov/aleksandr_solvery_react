import React from "react";
import Button from "../../Button";

function PostNav(props) {
    console.log(props.text)
    return (
        
        <div>
            <Button label={props.text}/>
        </div>
    )
}

export default PostNav;
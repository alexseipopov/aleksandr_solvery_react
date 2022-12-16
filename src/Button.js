import React from "react"

const style = {
    "width": "500px",
    "backgroundColor": "#ffaa00"
}

function Button(props) {
    return (
        <button style={style}>{props.label}</button>
    )
}

export default Button
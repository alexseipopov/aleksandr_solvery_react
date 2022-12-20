// import React from "react";

function FetchApi() {
    return (document.querySelector("#post-button").onclick = async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            if (response.ok) {
                let data = response.json;
                document.querySelector("#post").innerHTML = data;
            }
        } catch (error) {
            console.log(error);
        }
    });
}

export default FetchApi;

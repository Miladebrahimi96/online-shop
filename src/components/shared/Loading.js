import React from 'react';

//Gif
import gif from "../../Gif/loading-gif.gif";

const Loading = () => {
    return (
        <div style={{textAlign:"center", marginTop:"150px"}}>
            <img src={gif} alt="loading"/>
            <h1>Loading...</h1>
        </div>
    );
};

export default Loading;
import React from 'react';
import Video from './video'


export const Home = () => (
    <div className="pageBgColor">
        <div className="contentStyling">

            <Video/>

                {/* <!-- The video --> */}
                {/* <video autoplay loop id="myVideo" autoplay=''>
                <source src="https://steamcdn-a.akamaihd.net/steam/apps/256742028/movie480.webm?t=1549069619" type="video/mp4" />
                </video> */}

                {/* <!-- Optional: some overlay text to describe the video --> */}
                {/* <div class="content">
                    <h1>Mortal Kombat</h1>
                    <p>Lorem ipsum...</p> */}
                    {/* <!-- Use a button to pause/play the video with JavaScript --> */}
                    {/* <button id="myBtn" onclick="myFunction()">Pause</button>
                </div> */}

        </div>
    </div>
)
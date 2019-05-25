import React from "react";


class Video extends React.Component {
    componentDidMount = () => {
        this.playVideo();
    };

    componentWillUnmount = () => {
        this.pauseVideo();
    };


    playVideo = () => {
        // You can use the play method as normal on your video ref
        this.refs.vidRef.play();
    };

    pauseVideo = () => {
        // Pause as well
        this.refs.vidRef.pause();
    };

    render = () => {
        return (
            <div>
                <video
                ref="vidRef"
                src="https://steamcdn-a.akamaihd.net/steam/apps/256742028/movie480.webm?t=1549069619"
                type="video/mp4"
                />

                <div>
                    <button className="btn-dark" onClick={this.playVideo}>
                        Play
                    </button>
                    <button className="btn-dark" onClick={this.pauseVideo}>
                        Pause
                    </button>
                </div>

                <div className="content">
                        <h1>Mortal Kombat</h1>
                </div>

            </div>
        );
    };
}

 export default Video;
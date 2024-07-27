import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import "./style.scss";
import VolumeControl from "./VolumeControl.jsx";
import FullscreenIcon from "./fullscreen.svg";

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const playerWrapperRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [showControls, setShowControls] = useState(true);

  const handlePlayPause = () => setPlaying(!playing);
  const handleRewind = () =>
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  const handleForward = () =>
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  const handlePlaybackRateChange = (rate) => setPlaybackRate(rate);
  const handleProgress = (state) => setPlayed(state.played);
  const handleMouseEnter = () => setShowControls(true);
  const handleMouseLeave = () => setShowControls(false);

  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(playerWrapperRef.current);
    }
  };

  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        setIsFullscreen(screenfull.isFullscreen);
      });
    }
  }, []);

  return (
    <div
      className={"container mt-4 mb-4"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="player-wrapper" ref={playerWrapperRef}>
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          playing={playing}
          playbackRate={playbackRate}
          volume={volume}
          onProgress={handleProgress}
          width="100%"
          height="100%"
          controls={false}
        />
        {showControls && (
          <div className="controls">
            <div className="btn-group" role="group">
              <button className="btn btn-primary" onClick={handlePlayPause}>
                {playing ? "Pause" : "Play"}
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={handleRewind}
              >
                {"<<"}
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={handleForward}
              >
                {">>"}
              </button>
            </div>
            <div className="progress w-100">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${played * 100}%` }}
              ></div>
            </div>
            <VolumeControl volume={volume} setVolume={setVolume} />
            <div className="btn-group" role="group">
              <button
                className="btn btn-outline-primary"
                onClick={() => handlePlaybackRateChange(0.5)}
              >
                0.5x
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => handlePlaybackRateChange(1)}
              >
                1x
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => handlePlaybackRateChange(1.5)}
              >
                1.5x
              </button>
            </div>
            <button
              className="btn btn-primary d-flex justify-content-center align-items-center fullscreenButton"
              onClick={handleFullscreen}
            >
              <img src={FullscreenIcon} alt="Fullscreen" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

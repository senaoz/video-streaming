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
  const [showReplay, setShowReplay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
    setShowControls(true); // Show controls on play/pause
  };

  const handleRewind = () =>
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  const handleForward = () =>
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  const handlePlaybackRateChange = (rate) => setPlaybackRate(rate);
  const handleProgress = (state) => setPlayed(state.played);
  const handleMouseEnter = () => setShowControls(true);
  const handleMouseLeave = () => {
    if (!isFullscreen) {
      setShowControls(false);
    }
  };

  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(playerWrapperRef.current);
    }
  };

  const handleEnded = () => {
    setShowReplay(true);
    setPlaying(false);
  };

  const handleReplay = () => {
    playerRef.current.seekTo(0);
    setPlaying(true);
    setShowReplay(false);
  };

  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        setIsFullscreen(screenfull.isFullscreen);
        if (screenfull.isFullscreen) {
          setTimeout(() => setShowControls(false), 3000);
        } else {
          setShowControls(true);
        }
      });
    }
  }, []);

  return (
    <div
      className={`container mt-4 mb-4 ${isFullscreen ? "fullscreen" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={() => isFullscreen && setShowControls(true)}
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
          onEnded={handleEnded}
          width="100%"
          height="100%"
          controls={false}
          onClickPreview={() => handlePlayPause()}
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
              />
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
        {showReplay && (
          <button
            className="btn btn-primary replay-button rounded-5 text-uppercase fs-3"
            onClick={handleReplay}
          >
            Replay
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

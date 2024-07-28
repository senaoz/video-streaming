import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import "./style.scss";
import VolumeControl from "./VolumeControl.jsx";
import FullscreenIcon from "./icons/fullscreen.svg";
import PlayIcon from "./icons/play.svg";
import PauseIcon from "./icons/pause.svg";
import SkipF from "./icons/skip-forward.svg";
import SkipB from "./icons/skip-back.svg";

const VideoPlayer = ({ url }) => {
  const playerRef = useRef(null);
  const playerWrapperRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [showControls, setShowControls] = useState(true);
  const [showReplay, setShowReplay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [seeking, setSeeking] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
    setShowControls(true); // Show controls on play/pause
  };

  const handleRewind = () =>
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  const handleForward = () =>
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  const handlePlaybackRateChange = (rate) => setPlaybackRate(rate);
  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };
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

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e) => {
    const newPlayed = parseFloat(e.target.value);
    setPlayed(newPlayed);
    playerRef.current.seekTo(newPlayed);
  };

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    const newPlayed = parseFloat(e.target.value);
    playerRef.current.seekTo(newPlayed);
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
      className={`container pt-4 pb-4 ${isFullscreen ? "fullscreen" : "pt-8"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={() => isFullscreen && setShowControls(true)}
    >
      <div className="player-wrapper" ref={playerWrapperRef}>
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          url={url || "https://www.youtube.com/watch?v=UaVTIH8mujA"}
          playing={playing}
          playbackRate={playbackRate}
          volume={volume}
          onProgress={handleProgress}
          onEnded={handleEnded}
          width="100%"
          height="100%"
          controls={false}
        />
        {showControls && (
          <div className="controls">
            <div onClick={handlePlayPause}>
              {playing ? (
                <img src={PauseIcon} alt="Pause" />
              ) : (
                <img src={PlayIcon} alt="Play" />
              )}
            </div>
            <div onClick={handleRewind}>
              <img src={SkipB} alt="Rewind" />
            </div>
            <div onClick={handleForward}>
              <img src={SkipF} alt="Forward" />
            </div>
            <div className="progress-container">
              <input
                type="range"
                min={0}
                max={1}
                step="any"
                value={played}
                onMouseDown={handleSeekMouseDown}
                onChange={handleSeekChange}
                onMouseUp={handleSeekMouseUp}
                className="progress-bar"
              />
            </div>
            <VolumeControl volume={volume} setVolume={setVolume} />
            <div className="btn-group" role="group">
              <button
                className="btn btn-primary"
                onClick={() => handlePlaybackRateChange(0.5)}
              >
                0.5x
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handlePlaybackRateChange(1)}
              >
                1x
              </button>
              <button
                className="btn btn-primary"
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
            className="btn btn-primary replay-button shadow"
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

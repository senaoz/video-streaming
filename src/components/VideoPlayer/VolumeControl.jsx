import "./style.scss";
import React, { useState } from "react";
import Mute from "./icons/volume-x.svg";
import Speaker from "./icons/volume-2.svg";

const VolumeControl = ({ volume, setVolume }) => {
  const [showSlider, setShowSlider] = useState(true);
  const [muted, setMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume);

  const toggleMute = () => {
    if (muted) {
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      setVolume(0);
    }
    setMuted(!muted);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    if (e.target.value > 0) {
      setMuted(false);
    }
  };

  return (
    <div
      className="volume-control"
      onMouseEnter={() => setShowSlider(true)}
      onMouseLeave={() => setShowSlider(false)}
    >
      <button className="btn btn-link m-0 p-0 volume-icon" onClick={toggleMute}>
        {muted || volume === 0 ? (
          <img src={Mute} alt="Mute" />
        ) : (
          <img src={Speaker} alt="Speaker" />
        )}
      </button>
      <div
        className="volume-slider"
        style={{
          opacity: showSlider ? 1 : 0,
          pointerEvents: showSlider ? "all" : "none",
        }}
      >
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          className="form-range p-2"
        />
      </div>
    </div>
  );
};

export default VolumeControl;

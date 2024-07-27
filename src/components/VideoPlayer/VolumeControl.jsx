import "./style.scss";
import React, { useState } from "react";
import Mute from "./mute.svg";
import Speaker from "./speaker.svg";

const VolumeControl = ({ volume, setVolume }) => {
  const [showSlider, setShowSlider] = useState(false);
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
      {showSlider && (
        <div className="volume-slider">
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
      )}
    </div>
  );
};

export default VolumeControl;

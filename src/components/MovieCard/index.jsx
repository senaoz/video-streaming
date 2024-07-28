import React from "react";
import "./style.scss";

const MovieCard = ({ title, thumbnail, youtube_video_id }) => {
  return (
    <div
      className="movie-card card"
      onClick={() => {
        window.location.href = `/movie/${youtube_video_id}`;
      }}
    >
      <div className="card-img-container">
        <img src={`${thumbnail}`} className="card-img" alt={title} />
        <div className="card-img-overlay">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

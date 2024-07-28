import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, thumbnail, youtube_video_id }) => {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card card"
      onClick={() => {
        navigate(`/movie/${youtube_video_id}`);
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

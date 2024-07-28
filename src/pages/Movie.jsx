import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer/index.jsx";
import Navbar from "../components/Navbar/index.jsx";
import MovieCard from "../components/MovieCard/index.jsx";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider/index.jsx";

function Movie() {
  const [movieData, setMovieData] = useState([
    {
      title: "The Shawshank Redemption",
      trailer: {
        thumbnail: "https://i3.ytimg.com/vi/JhbYCKyj7aA/maxresdefault.jpg",
        youtube_video_id: "JhbYCKyj7aA",
      },
    },
    {
      title: "The Dark Knight",
      trailer: {
        thumbnail: "https://i3.ytimg.com/vi/EXeTwQWrcwY/maxresdefault.jpg",
        youtube_video_id: "EXeTwQWrcwY",
      },
    },
    {
      title: "The Godfather",
      trailer: {
        thumbnail: "https://i3.ytimg.com/vi/UaVTIH8mujA/maxresdefault.jpg",
        youtube_video_id: "UaVTIH8mujA",
      },
    },
    {
      title: "The Godfather: Part II",
      trailer: {
        thumbnail: "https://i3.ytimg.com/vi/Lxp4c0hqu9w/maxresdefault.jpg",
        youtube_video_id: "Lxp4c0hqu9w",
      },
    },
    {
      title: "The Lord of the Rings:\nThe Return of the King",
      trailer: {
        thumbnail: "https://i3.ytimg.com/vi/r5X-hFf6Bwo/maxresdefault.jpg",
        youtube_video_id: "r5X-hFf6Bwo",
      },
    },
    {
      title: "Pulp Fiction",
      trailer: {
        thumbnail: "https://i3.ytimg.com/vi/s7EdQ4FqbhY/maxresdefault.jpg",
        youtube_video_id: "s7EdQ4FqbhY",
      },
    },
    {
      title: "Schindler's List",
      trailer: {
        thumbnail: "https://i3.ytimg.com/vi/gG22XNhtnoY/maxresdefault.jpg",
        youtube_video_id: "gG22XNhtnoY",
      },
    },
    {
      title: "Inception",
      trailer: {
        thumbnail: "https://i3.ytimg.com/vi/YoHD9XEInc0/maxresdefault.jpg",
        youtube_video_id: "YoHD9XEInc0",
      },
    },
    {
      title: "Fight Club",
      trailer: {
        thumbnail: "https://i3.ytimg.com/vi/SUXWAEX2jlg/maxresdefault.jpg",
        youtube_video_id: "SUXWAEX2jlg",
      },
    },
    {
      title: "Forrest Gump",
      trailer: {
        thumbnail: "https://i3.ytimg.com/vi/bLvqoHBptjg/maxresdefault.jpg",
        youtube_video_id: "bLvqoHBptjg",
      },
    },
  ]);

  const params = useParams();
  const id = params.id;
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    setVideoUrl(`https://www.youtube.com/watch?v=${id}`);
  }, []);

  const handleCardClick = (youtube_video_id) => {
    window.location.href = `/movie/${youtube_video_id}`;
  };

  return (
    <>
      {id && <VideoPlayer videoUrl={videoUrl} />}
      <div className={`container ${!id && `pt-8`}`}>
        <h2 className="m-3">Suggested Movies</h2>
        <div className="d-flex flex-wrap justify-content-between">
          {movieData.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              thumbnail={movie.trailer.thumbnail}
              youtube_video_id={movie.trailer.youtube_video_id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Movie;

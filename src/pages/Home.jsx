import React, { useState } from "react";
import Slider from "../components/Slider/index.jsx";
import Navbar from "../components/Navbar/index.jsx";
import MovieCard from "../components/MovieCard/index.jsx";

function Home() {
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

  return (
    <>
      <Slider
        movies={movieData.map((movie) => ({
          src: movie.trailer.thumbnail,
          label: movie.title,
          link: `/movie/${movie.trailer.youtube_video_id}`,
        }))}
      />
      <div className="d-flex flex-wrap justify-content-center p-5">
        {movieData.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            thumbnail={movie.trailer.thumbnail}
            youtube_video_id={movie.trailer.youtube_video_id}
          />
        ))}
      </div>
    </>
  );
}

export default Home;

import React from "react";
import Slider from "../components/Slider/index.jsx";
import MovieCard from "../components/MovieCard/index.jsx";

function Home({ movieData }) {
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

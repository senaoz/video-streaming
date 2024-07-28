import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer/index.jsx";
import MovieCard from "../components/MovieCard/index.jsx";
import { useParams } from "react-router-dom";

function Movie({ movieData }) {
  const [videoUrl, setVideoUrl] = useState("");
  const params = useParams();
  const id = params.id;
  console.log(id, videoUrl);

  useEffect(() => {
    setVideoUrl(`https://www.youtube.com/watch?v=${id}`);
    console.log(id, videoUrl);
  }, [id]);

  return (
    <>
      {id && <VideoPlayer url={videoUrl} />}
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

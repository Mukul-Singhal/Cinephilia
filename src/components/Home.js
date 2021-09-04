import React, { useState, useEffect } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components
import Spinner from "./Spinner";
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";

//Hook
import { useHomeFetch } from "./hooks/useHomeFetch";
//Image

import FallbackImage from "../Images/no_image.jpg";

const Home = () => {
  const { data, loading, error } = useHomeFetch();

  return (
    <>
      {data.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.results[0].backdrop_path}`}
          title={data.results[0].original_title}
          text={data.results[0].overview}
        />
      )}
      {loading ? (
        <Spinner />
      ) : (
        <Grid header="Popular Movies">
          {data["results"].map((movie) => (
            <Thumbnail
              key={movie.id}
              image={IMAGE_BASE_URL + BACKDROP_SIZE + movie.poster_path}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;

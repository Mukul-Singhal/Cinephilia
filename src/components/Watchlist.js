import React, { useContext } from "react";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import { GlobalContext } from "../context/GlobalState";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

function Watchlist() {
  const { watchlist, addMovieToWatched, removeMovieFromWatchlist } =
    useContext(GlobalContext);

  console.log(watchlist);
  return (
    <Grid header="WatchList">
      {watchlist.map((movie) => (
        <div>
          <Thumbnail
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : null
            }
            movieId={movie.id}
          />
          <button className="btns" onClick={() => addMovieToWatched(movie)}>
            Watched
          </button>
          <button
            className="btns"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </Grid>
  );
}

export default Watchlist;

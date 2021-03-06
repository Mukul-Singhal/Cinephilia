import React, { useContext } from "react";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import { GlobalContext } from "../context/GlobalState";

import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";

function Watchlist() {
  const { watchlist, addMovieToWatched, removeMovieFromWatchlist } =
    useContext(GlobalContext);

  return (
    <div>
      {watchlist.length ? (
        <Grid header="My WatchList">
          {watchlist.map((movie) => (
            <div>
              <Thumbnail
                key={movie.id}
                clickable
                title={movie.original_title}
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
      ) : (
        <div className="nomovies">No movies in your list! Add some!</div>
      )}
    </div>
  );
}

export default Watchlist;

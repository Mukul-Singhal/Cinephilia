import React, { useContext } from "react";
import PropTypes from "prop-types";
// Components
import Thumbnail from "../Thumbnail";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Image
// import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
import { GlobalContext } from "../../context/GlobalState";

const MovieInfo = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
    favourites,
    addMovieToFavourites,
  } = useContext(GlobalContext);
  console.log(addMovieToWatchlist);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);
  let favouritesMovie = favourites.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  const favouritesDisabled = favouritesMovie ? true : false;

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumbnail
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : null
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
          <button
            className="btn"
            disabled={favouritesDisabled}
            onClick={() => addMovieToFavourites(movie)}
          >
            Add to Favourites
          </button>
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;

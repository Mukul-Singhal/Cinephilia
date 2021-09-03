import { useEffect, useState } from "react";

import API from "../../API";

const InitialState = {
  page: 0,
  results: [],
  total_results: 0,
  total_pages: 0,
};

export const useHomeFetch = () => {
  const [data, setData] = useState(InitialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      // console.log(movies);
      setData((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    // API.fetchMovies(searchTerm, page);
    fetchMovies(1);
  }, []);

  return { data, loading, error };
};

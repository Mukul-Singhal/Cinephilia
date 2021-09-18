import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Favourites from "./components/Favourites";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";

import { GlobalProvider } from "./context/GlobalState";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <GlobalProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  </GlobalProvider>
);

export default App;

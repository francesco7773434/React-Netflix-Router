import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

import TvShow from "./components/TvShow";
import TopBar from "./components/TopBar";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvShow" element={<TvShow />} />
        <Route path="/tvShow/MovieDetails/:imbdID" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

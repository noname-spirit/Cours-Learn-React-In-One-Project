import "./App.css";
import Favorites from "../src/components/favorites/Favorites";
import Home from "../src/components/homepage/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "../src/components/contexts/MovieContext";
import NavBar from "../src/components/navbar/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;

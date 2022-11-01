import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import Achievements from "./pages/Achievements";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Fragment>
  );
}

export default App;

import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import Achievements from "./pages/Achievements";
import AddProjects from "./pages/AddProjects";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import StudentsProjects from "./pages/StudentsProjects";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/students-projects">
          <Route index element={<StudentsProjects />} />
          <Route path=":id" element={<Project />} />
        </Route>
        <Route path="/add-projects" element={<AddProjects />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

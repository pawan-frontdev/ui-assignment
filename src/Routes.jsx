import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "pages/Home";
import Home from "pages/HomeScreen";
import NotFound from "pages/NotFound";
const Menu = React.lazy(() => import("pages/MenuExtension"));
const EMS = React.lazy(() => import("pages/EMS"));
// const Home = React.lazy(() => import("pages/HomeScreen"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/ems" element={<EMS />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

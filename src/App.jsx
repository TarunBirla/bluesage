import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./admin/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./middleware/ProtectedRoute";
import Home from "./components/Home";
import ProjectNew from "./components/ProjectNew";
import PortFolio from "./components/PortFolio";
import Partner from "./components/Partner";
import Blog from "./components/Blog";
import Abouts from "./components/Abouts";
import ScrollToTop from "./service/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      <ScrollToTop />
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectNew />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/abouts" element={<Abouts />} />
      

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute role="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import ProtectedLayout from "./protectedRoute/ProtectedRoute";
import Homepage from "./pages/Home/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import OpenPostions from "./pages/OpenPostions/OpenPostions";
import SocielMedia from "./pages/SocielMedia/SocielMedia";
import ApplyPosition from "./pages/ApplyPosition/ApplyPosition";
import Contact from "./pages/Contact/Contact";
import HireUs from "./pages/HireUs/HireUs";
import { useDispatch, useSelector } from "react-redux";
import { setupTokenRefresh } from "./utils/setupTokenRefresh";
import { useEffect } from "react";
import Login from "./pages/Login/Login";
import Blog from "./pages/Blog/Blog";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogDeatails from "./pages/BlogDeatails/BlogDeatails";

function App() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      setupTokenRefresh(dispatch);
    }
  }, [accessToken, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/open-positions" element={<OpenPostions />} />
          <Route path="/social" element={<SocielMedia />} />
          <Route path="/apply-position" element={<ApplyPosition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hires" element={<HireUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDeatails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedLayout from "./protectedRoute/ProtectedRoute";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Home/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import OpenPostions from "./pages/OpenPostions/OpenPostions";
import SocielMedia from "./pages/SocielMedia/SocielMedia";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/open-positions" element={<OpenPostions />} />
          <Route path="/social" element={<SocielMedia />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

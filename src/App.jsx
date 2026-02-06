import { Routes, Route } from "react-router-dom";
import ProtectedLayout from "./protectedRoute/ProtectedRoute";
import Homepage from "./pages/Home/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import OpenPostions from "./pages/OpenPostions/OpenPostions";
import SocielMedia from "./pages/SocielMedia/SocielMedia";
import ApplyPosition from "./pages/ApplyPosition/ApplyPosition";
import Contact from "./pages/Contact/Contact";
import HireUs from "./pages/HireUs/HireUs";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/open-positions" element={<OpenPostions />} />
          <Route path="/social" element={<SocielMedia />} />
          <Route path="/apply-position" element={<ApplyPosition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hires" element={<HireUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

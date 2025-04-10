import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}>
          <Route index element={<PrivacyPolicy />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

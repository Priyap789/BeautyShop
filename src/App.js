import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;

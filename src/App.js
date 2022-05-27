import Home from "./Home.js";
import TopBar from "./Components/TopBar";
import Single from "./Single.js";
import Write from "./Write.js";
import Settings from "./Settings.js";
import Login from "./Login.js";
import Register from "./Register.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

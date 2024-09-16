import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./assets/Pages/Home/HomePage";
import Navbar from "./assets/components/navbar/all/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

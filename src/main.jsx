import React from "react";
import ReactDOM from "react-dom/client";
import Movie from "./pages/Movie.jsx";
import "./scss/styles.scss";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar/index.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movie/*" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

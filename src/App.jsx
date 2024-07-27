// src/App.js
import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer/index.jsx";
import Dropdown from "./components/Dropdown/index.jsx";
import Navbar from "./components/Navbar/index.jsx";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  const handleSelectedChange = (option) => {
    setSelected(option);
  };

  return (
    <>
      <Navbar />
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={handleSelectedChange}
      />
      <main>
        <VideoPlayer />
      </main>
    </>
  );
}

export default App;

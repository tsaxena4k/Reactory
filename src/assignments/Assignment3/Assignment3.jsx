import React from "react";
import ToggleSwitch from "../../components/ToggleSwitch";
import { useMyContext } from "../../context/AppContext";

function Assignment3() {
  const { darkMode } = useMyContext();
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center mt-5 pt-5"
      id="theme-container"
    >
      <div className="d-flex align-items-center">
        <h1 className="me-3">{darkMode ? "🌑Dark Mode" : "🌞Light Mode"}</h1>
        <ToggleSwitch />
      </div>
    </div>
  );
}

export default Assignment3;

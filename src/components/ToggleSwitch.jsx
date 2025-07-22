import React, { useState, useEffect } from "react";
import { useMyContext } from "../context/AppContext";

function ToggleSwitch() {
  const { darkMode, setDarkMode } = useMyContext();

  return (
    <label class="switch">
      <input
        type="checkbox"
        onChange={() => setDarkMode(!darkMode)}
        checked={darkMode}
      />
      <span class="slider round"></span>
    </label>
  );
}

export default ToggleSwitch;

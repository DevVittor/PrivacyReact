import { useState } from "react";
import '../styles/darkMode.css';
export default function DarkMode() {
  const [mode, setMode] = useState(true);

  function alterMode() {
    setMode(!mode);
  }
  document.body.className = mode ? "dark-mode" : "light-mode";

  return (
    <>
      <button className={mode ? "btn_mode_theme_light" : "btn_mode_theme_dark"} onClick={alterMode}>
        {mode ? (
          <>
            <i className="ri-sun-fill"></i> Light
          </>
        ) : (
          <>
            <i className="ri-moon-fill"></i> Dark
          </>
        )}
      </button>
    </>
  );
}

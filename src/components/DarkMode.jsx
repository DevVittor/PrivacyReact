import { useState } from "react";

export default function DarkMode() {
  const [mode, setMode] = useState(true);

  function alterMode() {
    setMode(!mode);
  }
  document.body.className = mode ? "dark-mode" : "light-mode";
  return (
    <>
      <button onClick={alterMode}>
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

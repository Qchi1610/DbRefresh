import React, { useState, useEffect } from "react";

import Configure from "../components/configure/Configure";
import Home from "../components/home/Home";

function Main() {
  // true = Home, false = Configure
  const [on, setOn] = useState(true);

  useEffect(() => {
    console.log("[Main.js] mounted");
  }, []);

  function updateToggleButtons(bool) {
    setOn(bool);
  }

  return (
    <section>
      {on ? (
        <Home on={on} updateHandler={updateToggleButtons} />
      ) : (
        <Configure on={on} updateHandler={updateToggleButtons} />
      )}
    </section>
  );
}

export default Main;

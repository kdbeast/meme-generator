import { useState } from "react";
import { useEffect } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watcheWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      console.log("Resized!");
    };
    window.addEventListener("resize", watcheWindowWidth);
    return () => {
      window.removeEventListener("resize", watcheWindowWidth);
      console.log("Cleaning...");
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
};

export default WindowTracker;

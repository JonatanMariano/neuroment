// Background.jsx
import React from "react";

function Background({ theme = "light", variant = "default", children }) {
  const baseImage =
    theme === "light"
      ? "/images/background-light.jpg"
      : "/images/background-dark.jpg";

  const style = {
    backgroundImage: `url(${baseImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    filter:
      variant === "incolor"
        ? theme === "light"
          ? "brightness(1.75)"
          : "brightness(0.25)"
        : "none",
  };

  return <div style={style}>{children}</div>;
}

export default Background;







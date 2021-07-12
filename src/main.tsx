import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./reset.css";

export const rem = (pxWidth = 1080, pxHeight = 2000) => {
  const html: HTMLHtmlElement = document.querySelectorAll("html")[0];

  const oWidth =
    window.innerWidth ||
    document.body.clientWidth ||
    document.documentElement.clientWidth;
  const oHeight =
    window.innerHeight ||
    document.body.clientHeight ||
    document.documentElement.clientHeight;
  if (oWidth < oHeight) {
    html.style.fontSize = `${(oWidth / pxWidth) * 100}px`;
  } else {
    html.style.fontSize = `${(oWidth / pxHeight) * 100}px`;
  }
};

rem();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

import { Update } from "@mui/icons-material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

/*const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js"
      );
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};
*/

// ...

//registerServiceWorker();

ReactDOM.render(<App flag={1} />, document.getElementById("root"));

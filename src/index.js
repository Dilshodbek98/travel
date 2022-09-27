import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Root />
  </React.StrictMode>
);

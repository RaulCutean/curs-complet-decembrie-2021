import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App tab="home" />);

/*
FCP - First contentful paint (de cand incepe sa incarce pana cand a aparut primul element)
TTFB - Time to First Byte (dupa cat timp primim primele date) Recomandat < 0.01
*/

reportWebVitals(console.log);

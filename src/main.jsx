import React, { StrictMode, Profiler } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// const onRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
// 	console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime });
// };

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	<BrowserRouter>
		{/* <Profiler id="App" onRender={onRenderCallback}> */}
		<App />
		{/* </Profiler> */}
	</BrowserRouter>
	// </StrictMode>
);

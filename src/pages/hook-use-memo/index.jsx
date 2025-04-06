import { useEffect, useState } from "react";

// Child Component
const Child = ({ config }) => {
	// console.log("<Child />");
	useEffect(() => {
		console.log("==== New config detected ====");
	}, [config]);

	return (
		<div>
			<h1>Child component</h1>
			<p>I am designed to take action based on given config value</p>
		</div>
	);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Hint: useMemo(() => ({}), [])
const HookUseMemo = () => {
	console.log("<HookUseMemo />");
	// States
	const [isDark, setIsDark] = useState(false);
	const [input, setInput] = useState(1);

	// Pre-calculated values
	const styleConfig = {
		background: isDark ? "black" : "white",
		color: isDark ? "white" : "black",
		height: "200px",
		border: "1px solid black",
	};
	const doubledNumber = slowFunction(input);

	// Handlers
	const themeHandler = () => setIsDark((prev) => !prev);
	const inputHandler = (e) => setInput(e.target.value);

	// Static object
	// const config = { config1: "value1", config2: "value2" };

	return (
		<div id="use-memo-demo">
			<button onClick={themeHandler}>Toggle Theme</button>
			<div style={styleConfig}>
				<input type="number" value={input} onChange={inputHandler} />
				<h1>Doubled number: {doubledNumber}</h1>
			</div>

			<hr />

			{/* <Child config={config} /> */}
		</div>
	);
};

export default HookUseMemo;

// Consider this as any heavy/time intensive computation in your app
function slowFunction(value) {
	console.log("calculating........");
	for (let i = 0; i <= 1000000000; i += 1) {}

	return value * 2;
}

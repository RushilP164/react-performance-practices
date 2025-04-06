import { useEffect, useState } from "react";

// Child Component
const Child = ({ getList }) => {
	console.log("<Child />");
	const [items, setItems] = useState([]);

	useEffect(() => {
		console.log("==== Updating the items ====");
		setItems(getList()); // upadtes the state
	}, [getList]);

	return (
		<ul>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
};

// Hint: useCallback(() => {}, [])
const HookUseCallback = () => {
	console.log("<HookUseCallback />");
	// States
	const [isDark, setIsDark] = useState(false);
	const [inputValue, setInputValue] = useState(2);

	// Pre-calculated values
	const styleConfig = {
		background: isDark ? "black" : "white",
		color: isDark ? "white" : "black",
		height: "200px",
		border: "1px solid black",
	};

	// Handlers
	const themeHandler = () => setIsDark((prev) => !prev);
	const inputHandler = (e) => setInputValue(e.target.value);

	// Rreturns array 1 to <inputValue> => [1,2,3,4]
	const getList = () => Array.from({ length: inputValue }, (_, i) => i + 1);

	return (
		<div id="use-callback-demo">
			<button onClick={themeHandler}>Toggle Theme</button>

			<hr />

			<div style={styleConfig}>
				<input type="number" value={inputValue} onChange={inputHandler} min={1} />
				<Child getList={getList} />
			</div>
		</div>
	);
};

// HookUseCallback.whyDidYouRender = true;

export default HookUseCallback;

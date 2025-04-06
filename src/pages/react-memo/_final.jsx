import { memo, useState } from "react";

const Child = memo(({ value }) => {
	console.log("<Child />");
	return (
		<div>
			<h3>Child component:</h3>
			<p>I received {value} from Parent component.</p>
		</div>
	);
});

const ReactMemo = () => {
	console.log("<ReactMemo />");
	// States
	const [value, setValue] = useState(1);
	const [dummy, setDummy] = useState(1);

	// Handlers
	const valueHandler = () => setValue((prev) => prev + 1);
	const dummyHandler = () => setDummy((prev) => prev + 1);

	return (
		<div>
			<h3>Value State: {value}</h3>
			<input type="number" value={value} onChange={valueHandler} />
			<h3>Dummy State: {dummy}</h3>
			<input type="number" value={dummy} onChange={dummyHandler} />

			<hr />

			<Child value={value} />
		</div>
	);
};

export default ReactMemo;

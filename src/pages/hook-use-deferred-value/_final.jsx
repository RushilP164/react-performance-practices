import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { generateArray } from "../../utils";

const HookUseDeferredValue = () => {
	console.log("<HookUseDeferredValue />");
	const [input, setInput] = useState("");
	const deferredInput = useDeferredValue(input, input);

	useEffect(() => {
		console.log(input, deferredInput);
	}, [input, deferredInput]);

	// Pre-calculated value
	const list = useMemo(() => generateArray({ size: 20000, value: deferredInput }), [deferredInput]);

	const inputHandler = (e) => {
		setInput(e.target.value);
	};

	return (
		<div>
			<h3>Input</h3>
			<input value={input} onChange={inputHandler} />
			<hr />
			<h3>List</h3>
			{list.map((item) => (
				<div key={item.id}>{item.value}</div>
			))}
		</div>
	);
};

export default HookUseDeferredValue;

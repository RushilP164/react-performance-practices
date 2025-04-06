import { useMemo, useState } from "react";
import { generateArray } from "../../utils";

const HookUseDeferredValue = () => {
	console.log("<HookUseDeferredValue />");
	const [input, setInput] = useState("");

	// useEffect(() => {
	// 	console.log(input, deferredInput);
	// }, [input, deferredInput]);

	// Pre-calculated value
	const list = useMemo(() => generateArray({ size: 20000, value: input }), [input]);

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

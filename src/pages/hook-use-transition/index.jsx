import { useState } from "react";
import { generateArray } from "../../utils";

// Hint: const [isPending, startTransition] = useTransition();
const HookUseTransition = () => {
	console.log("<HookUseTransition />");
	const [input, setInput] = useState("");
	const [list, setList] = useState([]);

	const inputHandler = (e) => {
		// 1st state update
		setInput(e.target.value);

		// 2nd state update - slow
		const temp = generateArray({ size: 20000, value: e.target.value });
		setList(temp);
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

export default HookUseTransition;

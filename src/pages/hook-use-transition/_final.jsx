import { useState, useTransition } from "react";
import { generateArray } from "../../utils";

const HookUseTransition = () => {
	console.log("<HookUseTransition />");
	const [input, setInput] = useState("");
	const [list, setList] = useState([]);

	const [isPending, startTransition] = useTransition();

	const LIST_SIZE = 20000;

	const inputHandler = (e) => {
		// 1st state update
		setInput(e.target.value);

		// 2nd state update
		startTransition(() => {
			// Consider this as any heavy/time intensive computation in your app
			const temp = generateArray({ size: 20000, value: e.target.value });
			setList(temp);
		});
	};

	return (
		<div>
			<h3>Input</h3>
			<input value={input} onChange={inputHandler} />
			<hr />
			<h3>List</h3>
			{isPending ? "Loading..." : list.map((item) => <div key={item.id}>{item.value}</div>)}
		</div>
	);
};

export default HookUseTransition;

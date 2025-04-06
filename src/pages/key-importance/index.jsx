import React, { memo, useState } from "react";

const initialItems = [
	{ id: "i1", name: "Apple" },
	{ id: "i2", name: "Banana" },
	{ id: "i3", name: "Cherry" },
	{ id: "i4", name: "Dragon Fruit" },
];

const ListItem = memo(({ name }) => {
	console.log("<ListItem /> rendered for", name);
	const [value, setValue] = useState("");
	const inputHandler = (e) => setValue(e.target.value);

	return (
		<li>
			<span>{name}</span>
			<span>
				<input value={value} onChange={inputHandler} />
			</span>
		</li>
	);
});

const KeyImporatnce = () => {
	const [items, setItems] = useState(initialItems);

	// Reverse the list order.
	const reverseList = () => {
		setItems([...items].reverse());
	};

	return (
		<div id="key-importance">
			<h2>Using Index as Key (Problematic)</h2>
			<button onClick={reverseList}>Reverse List</button>
			<ul>
				{items.map((item, index) => (
					// Using index as key can cause mismatches when the list order changes.
					<ListItem key={index} name={item.name} /> // key={0} name={something}
				))}
			</ul>
		</div>
	);
};

export default KeyImporatnce;

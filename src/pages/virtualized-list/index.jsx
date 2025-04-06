import { useState } from "react";
import WithApi from "./WithApi";
import WithoutApi from "./WithoutApi";

const active = { background: "cornflowerblue", color: "white" };

const VirtualizedList = () => {
	const [selected, setSelected] = useState("WITHOUT_API");
	const selecedHandler = (value) => () => {
		setSelected(value);
	};

	return (
		<div id="virtualized-list">
			<button onClick={selecedHandler("WITHOUT_API")} style={selected === "WITHOUT_API" ? active : null}>
				Without Api
			</button>
			<button onClick={selecedHandler("WITH_API")} style={selected === "WITH_API" ? active : null}>
				With Api
			</button>
			<hr />
			{selected === "WITHOUT_API" && <WithoutApi />}
			{selected === "WITH_API" && <WithApi />}
		</div>
	);
};

export default VirtualizedList;

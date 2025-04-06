import { FixedSizeList as List } from "react-window";
import "./virtualized.css";

// Generate some sample data
const data = Array.from({ length: 50000 }, (_, index) => ({
	id: index + 1,
	name: `Item ${index + 1}`,
	description: `This is the description for item ${index + 1}.`,
}));

// Row component for each item in the list
const Row = ({ index, style, data }) => {
	const item = data[index];
	return (
		<div className="list-row" style={style}>
			<div className="item-id">{item.id}</div>
			<div>
				<p>{item.name}</p>
				<p>{item.description}</p>
			</div>
		</div>
	);
};

const WithoutApi = () => {
	return (
		<div className="list-container">
			<h2>Virtualized Fix-sized List Demo</h2>
			<List
				height={400} // Height of the list container in pixels
				itemCount={data.length} // Total number of items
				itemSize={80} // Height of each row in pixels
				width={800} // Width of the list container in pixels
				itemData={data} // Pass the data array to the row renderer
				style={{ maxWidth: "100%" }}
			>
				{Row}
			</List>
		</div>
	);
};

export default WithoutApi;

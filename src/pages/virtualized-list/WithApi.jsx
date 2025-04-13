import React, { useState, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { sleep } from "../../utils";
import "./virtualized.css";

// Row component to render each item. If an item isn't loaded, show a loading placeholder.
const Row = ({ index, style, data }) => {
	const item = data.items[index];
	if (!item) {
		return (
			<div className="list-row" style={style}>
				<em>Loading...</em>
			</div>
		);
	}
	return (
		<div className="list-row" style={style}>
			<div className="item-id">{item.id}</div>
			<div>
				<p>{item.title}</p>
				<p>{item.body}</p>
			</div>
		</div>
	);
};

// Function to fetch data for a given page
const itemsPerPage = 10;
const fetchItems = async (pageNumber) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${itemsPerPage}`);
	await sleep(500);
	const newItems = await response.json();
	return newItems;
};

const WithApi = () => {
	const [items, setItems] = useState([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	// loadMoreItems is called by InfiniteLoader when more items need to be loaded.
	const loadMoreItems = useCallback(async () => {
		if (!hasMore) return;
		const newItems = await fetchItems(page);
		if (newItems.length < itemsPerPage) {
			setHasMore(false);
		}
		setItems((prev) => [...prev, ...newItems]);
		setPage((prev) => prev + 1);
	}, [page, hasMore]);

	// InfiniteLoader requires this function to determine if an item is loaded
	const isItemLoaded = (index) => index < items.length;

	// If there are more pages, we add an extra row for the loading indicator.
	const itemCount = hasMore ? items.length + 1 : items.length;

	const itemData = { items };

	return (
		<div className="list-container">
			<h2>Virtualized Paginated List Demo</h2>
			<InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreItems}>
				{({ onItemsRendered, ref }) => (
					// function-as-children pattern
					<List
						height={500} // Height of the list container
						itemCount={itemCount} // Total total number of items (including loading row)
						itemSize={100} // Height of each row
						width={800} // Width of the list container
						onItemsRendered={onItemsRendered} // Callback for monitoring which rows are rendered.
						ref={ref} // To track the scrollable element.
						itemData={itemData} // Pass our data array to the row component
						style={{ maxWidth: "100%" }}
					>
						{Row}
					</List>
				)}
			</InfiniteLoader>
		</div>
	);
};

export default WithApi;

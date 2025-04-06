import React, { useState, lazy, Suspense } from "react";
import Child from "./components/Child";

// Lazy import the component (loads only when needed)
const LazyChild = lazy(() => import("./components/LazyChild"));

const LazyComponentDemo = () => {
	const [showChild, setShowChild] = useState(false);
	const [showLazyChild, setShowLazyChild] = useState(false);

	const childHandler = () => setShowChild((prev) => !prev);
	const lazyChildHandler = () => setShowLazyChild((prev) => !prev);

	return (
		<div style={{ textAlign: "center", padding: "20px" }}>
			<h2>🔴 Normal Component (Always Loaded) | Child.jsx</h2>
			<button onClick={childHandler}>Load Normal Component</button>
			{showChild && <Child />}

			<hr />

			<h2>🟢 Lazy Loaded Component | LazyChild.jsx</h2>
			<button onClick={lazyChildHandler}>Load Lazy Component</button>

			{/* Lazy Loading: Only loads when showLazy is true */}
			{showLazyChild && (
				<Suspense fallback={<h3>Loading Component...</h3>}>
					<LazyChild />
				</Suspense>
			)}
		</div>
	);
};

export default LazyComponentDemo;

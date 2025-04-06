const LazyChild = () => {
	return (
		<div style={{ padding: "20px", background: "#f0f0f0", marginTop: "20px" }}>
			<h2>✅ Lazy Loaded Component</h2>
			<p>This component was loaded only when needed!</p>
		</div>
	);
};

export default LazyChild;

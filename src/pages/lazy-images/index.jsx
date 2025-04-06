import React, { Fragment } from "react";

// Generate Image URLs
const images = Array.from({ length: 50 }, (_, i) => `https://picsum.photos/300/200?random=${i}`);

const LazyImages = () => {
	return (
		<div id="lazy-images">
			<h1>Image Loading Comparison</h1>

			{/* <h2>🔴 Without Lazy Loading (All Images Load Immediately)</h2>
			{images.map((src, index) => (
				<Fragment key={src}>
					<label>{index}</label>
					<img src={src} alt={`Simple Image ${index}`} width="300" height="200" />
				</Fragment>
			))} */}

			<h2>🟢 With Lazy Loading (Images Load When Scrolled Into View)</h2>
			{images.map((src, index) => (
				<Fragment key={src}>
					<label>{index}</label>
					<img src={src} key={src} alt={`Lazy Image ${index}`} width="300" height="200" loading="lazy" />
				</Fragment>
			))}
		</div>
	);
};

export default LazyImages;

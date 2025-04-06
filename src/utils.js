export const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateArray = ({ size, value }) => {
	if (!value) return [];
	console.log("Generating list...");
	const temp = [];
	for (let i = 0; i < size; i += 1) {
		// Consider this as any heavy/time intensive computation in your app
		temp.push({ id: `i${i}`, value });
	}
	return temp;
};

import Nav from "./Nav";
import "./App.css";
import EagerRoutesHub from "./EagerRoutesHub";

const App = () => {
	return (
		<div>
			<header>
				<Nav />
			</header>
			<main>
				<EagerRoutesHub />
			</main>
		</div>
	);
};

export default App;

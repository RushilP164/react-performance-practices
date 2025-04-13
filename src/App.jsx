import Nav from "./Nav";
import "./App.css";
import RoutesHub from "./EagerRoutesHub";

const App = () => {
	return (
		<div>
			<header>
				<Nav />
			</header>
			<main>
				<RoutesHub />
			</main>
		</div>
	);
};

export default App;

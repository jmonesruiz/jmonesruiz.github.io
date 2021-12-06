import { RiToolsLine as ConstructionIcon } from "react-icons/ri";
import "./App.scss";

function App() {
	return (
		<div className="app">
			<header className="app__header">
				<h1 className="app__title">Site under construction</h1>
				<ConstructionIcon className="app__header-icon" />
			</header>
			{
				//<h2 className="app__sub-header">Check out my projects</h2>
			}
			<footer className="app__footer">
				<h2 className="app__footer-title--temp">jmonesruiz</h2>
			</footer>
		</div>
	);
}

export default App;

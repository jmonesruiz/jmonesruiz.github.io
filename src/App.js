import { RiToolsLine as ConstructionIcon } from "react-icons/ri";
import ProjectList from "./components/ProjectList";
import { BsLinkedin as LIIcon } from "react-icons/bs";
import { FaGithub as GHIcon } from "react-icons/fa";
import { ImProfile as ResumeIcon } from "react-icons/im";
import "./App.scss";

function App() {
	return (
		<div className="app">
			<header className="app__header">
				<h1 className="app__title">Site under construction</h1>
				<ConstructionIcon className="app__header-icon" />
			</header>

			<h2 className="app__sub-header">Check out my projects</h2>
			<ProjectList />

			<footer className="app__footer">
				<h2 className="app__footer-title">jmonesruiz</h2>
				<a className="app__footer-link" href="https://www.linkedin.com/in/juan-mones/">
					<LIIcon className="app__footer-icon" />
				</a>
				<a className="app__footer-link" href="https://github.com/jmonesruiz">
					<GHIcon className="app__footer-icon" />
				</a>
				<a
					className="app__footer-link"
					href="https://github.com/jmonesruiz/jmonesruiz/raw/main/CV%20Juan%20Mones%20Ruiz.pdf"
				>
					<ResumeIcon className="app__footer-icon" />
				</a>
			</footer>
		</div>
	);
}

export default App;

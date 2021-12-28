import ProjectCard from "./ProjectCard";
import "./ProjectList.scss";

import restImg from "../img/rest-countries.jpg";
import splitterImg from "../img/splitter.jpg";
import shortlyImg from "../img/shortly.jpg";
import manageImg from "../img/manage.jpg";

const rootDomain = "https://jmonesruiz.github.io";

const projects = [
	{
		name: "Where in the world? ",
		description: "REST countries API display app",
		tags: ["React", "SASS"],
		img: restImg,
		url: rootDomain + "/rest-countries",
	},
	{
		name: "Splitter",
		description: "Bill splitter and tip calculator",
		tags: ["React", "SASS"],
		img: splitterImg,
		url: rootDomain + "/tip-calculator",
	},
	{
		name: "Shortly",
		description: "URL shortener landing page",
		tags: ["HTML", "SASS", "JS"],
		img: shortlyImg,
		url: rootDomain + "/url-shortening-api",
	},
	{
		name: "Manage",
		description: "Product landing page",
		tags: ["HTML", "SASS", "JS"],
		img: manageImg,
		url: rootDomain + "/manage-landing-page",
	},
];

function ProjectList() {
	return (
		<ul className="project-list">
			{projects.map((project, index) => {
				return (
					<ProjectCard
						className="project-list__item"
						key={index}
						name={project.name}
						description={project.description}
						tags={project.tags}
						img={project.img}
						url={project.url}
					/>
				);
			})}
		</ul>
	);
}

export default ProjectList;

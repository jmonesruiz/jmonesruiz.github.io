import ProjectCard from "./ProjectCard";

const rootDomain = "https://jmonesruiz.github.io";

const projects = [
	{
		name: "Where in the world? ",
		tags: ["React", "SASS"],
		img: "../img/rest-countries",
		url: rootDomain + "/rest-countries",
	},
	{
		name: "Splitter",
		tags: ["React", "SASS"],
		img: "../img/splitter",
		url: rootDomain + "/tip-calculator",
	},
	{
		name: "Shortly",
		tags: ["HTML", "SASS", "JS"],
		img: "../img/shortly",
		url: rootDomain + "/manage-landing-page",
	},
	{
		name: "Manage",
		tags: ["HTML", "SASS", "JS"],
		img: "../img/manage",
		url: rootDomain + "/url-shortening-api",
	},
];

function ProjectList() {
	return (
		<ul className="project-list">
			{projects.map((project, index) => {
				return (
					<ProjectCard
						key={index}
						name={project.name}
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

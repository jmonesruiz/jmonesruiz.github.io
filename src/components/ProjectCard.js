import "./ProjectCard.scss";

function ProjectCard(props) {
	return (
		<li className={props.className}>
			<a className="project-card" href={props.url} target="_blank" rel="noreferrer">
				<header className="project-card__header">
					<h3 className="project-card__name">{props.name}</h3>
					<ul className="project-card__tags">
						{props.tags.map((tag, index) => {
							return (
								<li key={index} className="project-card__tag">
									{tag}
								</li>
							);
						})}
					</ul>
				</header>
				<p className="project-card__description">{props.description}</p>
				<img
					className="project-card__img"
					src={props.img}
					alt={`${props.name} screenshot`}
				/>
			</a>
		</li>
	);
}

export default ProjectCard;

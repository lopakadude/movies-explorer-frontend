import React from "react";

function AboutProject() {
	return (
		<section className="techs section" id="techs">
			<div className="techs__container section-container">
				<h2 className="techs__title section-title">Технологии</h2>
				<h3 className="techs__heading">7 технологий</h3>
				<p className="techs__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
				<ul className="techs__list">
					<li className="techs__name">HTML</li>
					<li className="techs__name">CSS</li>
					<li className="techs__name">JS</li>
					<li className="techs__name">React</li>
					<li className="techs__name">Git</li>
					<li className="techs__name">Express.js</li>
					<li className="techs__name">mongoDB</li>
				</ul>
			</div>
		</section >
	)
}

export default AboutProject;
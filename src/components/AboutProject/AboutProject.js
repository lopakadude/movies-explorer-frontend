import React from "react";

function AboutProject() {
	return (
		<section className="about-project" id="about-project">
			<div className="about-project__container section-container">
				<h2 className="about-project__title section-title">О проекте</h2>
				<div className="about-project__raw">
					<div className="about-project__text-container">
						<h3 className="about-project__heading">Дипломный проект включал 5 этапов</h3>
						<p className="about-project__caption">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
					</div>
					<div className="about-project__text-container">
					<h3 className="about-project__heading">На выполнение диплома ушло 5 недель</h3>
						<p className="about-project__caption">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
					</div>
				</div>
				<div className="about-project__time-containers">
					<div className="about-project__container-backend"><p className="about-project__backend">1 неделя</p></div>
					<div className="about-project__container-frontend"><p className="about-project__frontend">4 недели</p></div>
				</div>
			</div>
		</section>
	)
}

export default AboutProject
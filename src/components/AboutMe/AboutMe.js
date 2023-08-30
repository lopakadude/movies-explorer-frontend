import React from "react";
import photo from '../../images/photo_profile.jpg';
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
	return (
		<section className="about-me" id="about-me">
			<div className="about-me__container section-container">
				<h2 className="about-me__title section-title">Студент</h2>
				<div className="about-me__raw">
					<div className="about-me__container-text">
						<h3 className="about-me__name">Дмитрий</h3>
						<span className="about-me__job">Фронтенд-разработчик, {new Date().getFullYear() - 1994} лет</span>
						<p className="about-me__info">
							Я родился в Ставропольском крае, в городе Благодарный. Сейчас проживаю в городе Долгопрудный. С детства нравились естественные науки и техника. В школе принимал участие в различных олимпиадах, в том числе по программированию. В 2017 закончил магистратуру на Физтехе (МФТИ) на направлению "Системный анализ и управление". Год назад понял, что пора вспомнить как учиться, поступил в Яндекс Практикум.</p>
						<a className="about-me__link link" href="https://github.com/lopakadude" target="_blank" rel="noreferrer">Github</a>
					</div>
					<img className="about-me__photo" src={photo} alt="фото профиля" />
				</div>
				<Portfolio />
			</div>
		</section >
	)
}

export default AboutMe;
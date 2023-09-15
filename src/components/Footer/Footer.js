import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<h6 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h6>
				<div className="footer__bottom-container">
					<p className="footer__year">&copy; {new Date().getFullYear()}</p>
					<div className="footer__projects">
						<a className="footer__link link" href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
						<a className="footer__link link" href="https://github.com/lopakadude" target="_blank" rel="noopener noreferrer">Github</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
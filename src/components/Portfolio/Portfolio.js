import React from "react";

function Portfolio() {
	return (
		<>
			<h4 className="portfolio-title">Портфолио</h4>
			<ul className="portfolio">
				<li className="portfolio__li-container">
					<a className="portfolio__li-link link" href="https://github.com/lopakadude/how-to-learn" target="_blank" rel='noreferrer'>
						<p className="portfolio__li-text">Статичный сайт</p>
						<p className="portfolio__li-icon">↗</p>
					</a>
				</li>
				<li className="portfolio__li-container">
					<a className="portfolio__li-link link" href="https://github.com/lopakadude/russian-travel" target="_blank" rel='noreferrer'>
						<p className="portfolio__li-text">Адаптивный сайт</p>
						<p className="portfolio__li-icon">↗</p>
					</a>
				</li>
				<li className="portfolio__li-container">
					<a className="portfolio__li-link link" href="https://github.com/lopakadude/react-mesto-api-full-gha" target="_blank" rel='noreferrer'>
						<p className="portfolio__li-text">Одностраничное приложение</p>
						<p className="portfolio__li-icon">↗</p>
					</a>
				</li>
			</ul>
		</>
	)
}

export default Portfolio;
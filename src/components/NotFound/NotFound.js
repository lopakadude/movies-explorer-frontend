import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();

	function navigateBack() {
		navigate(-1);
	}
	return (
		<section className="notfound">
			<h1 className='notfound__title'>404</h1>
			<p className='notfound__caption'>Страница не найдена</p>
			<button type="button" className="notfound__link link" onClick={navigateBack}>Назад</button>
		</section>
	)
}

export default NotFound;
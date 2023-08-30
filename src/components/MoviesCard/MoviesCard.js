import React from "react";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
	const location = useLocation();

	const [isActiveRemoveClass, setIsActiveRemoveClass] = useState('card-movie__delete-button button')
	const [isLikeActive, setIsLikeActive] = useState(false);

	const handleMouseEnter = (e) => {
		setIsActiveRemoveClass('card-movie__delete-button card-movie__delete-button_active button')
	}

	const handleMouseLeave = (e) => {
		setIsActiveRemoveClass('card-movie__delete-button button')
	}

	const toHoursAndMinutes = (totalMinutes) => {
		const minutes = totalMinutes % 60;
		const hours = Math.floor(totalMinutes / 60);
		return `${hours}ч ${minutes}м`;
	}
	
	const likeToggle = () => {
		if (!isLikeActive) {
			setIsLikeActive(true)
		} else { setIsLikeActive(false) }
	}

	const cardLikeButtonClassName = ( 
		`card-movie__like-button ${isLikeActive && 'card-movie__like-button_active'}` 
	); 

	return (
		<li className="card-movie" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<a className="card-movie__trailer-link" href={props.card.trailerLink} target="_blank" rel='noreferrer'>
				<img className="card-movie__photo" src={props.card.image} alt="Заставка фильма"></img>
			</a>
			<div className="card-movie__container">
				<h6 className="card-movie__name">{props.card.nameRU}</h6>
				{location.pathname === '/movies' ? <button className={cardLikeButtonClassName} onClick={likeToggle}></button> :
					<button className={isActiveRemoveClass}></button>}
			</div>
			<p className="card-movie__duration">{toHoursAndMinutes(props.card.duration)}</p>
		</li>
	)
}

export default MoviesCard;
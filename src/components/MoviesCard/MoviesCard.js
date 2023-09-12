import React from "react";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import changeUrl from "../../utils/getPropperMoviesList";
import { api } from '../../utils/API';

function MoviesCard(props) {
	const location = useLocation();
	const card = changeUrl(props.card);

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
		if (hours === 0) {
			return `${minutes}м`;
		}
		if (minutes === 0) {
			return `${hours}ч `;
		} else {return `${hours}ч ${minutes}м`;}
	}

	const handleSaveMovie = (m) => {
		api
			.saveMovie(card)
			.then((likedMovie) => {
				props.setSavedMovies([...props.savedMovies, likedMovie.data]);
				card._id = likedMovie.data._id;
			})
			.catch((err) => console.log(`Ошибка: ${err}`))
	}

	const handleDeleteMovie = () => {
		api
			.deleteMovie(card)
			.then(( res ) => {
				const savedMovies = props.savedMovies.filter(
					({ _id }) => _id !== res.data
				);
				props.setSavedMovies(savedMovies);
			})
			.catch((err) => console.log(`Ошибка: ${err}`))
	};

	useEffect(()=> {
		if (props.savedMovies.length > 0) {
		let isLiked = false;
		props.savedMovies.forEach((savedFilm) => {
			if (card.id === savedFilm.movieId) {
				card._id = savedFilm._id;
				isLiked = true;
			} 
		})
		setIsLikeActive(isLiked);
	} else {setIsLikeActive(false)}
	}, [props.savedMovies])
	
	const likeToggle = () => {
		if (!isLikeActive) {
			handleSaveMovie();
			setIsLikeActive(true)
		} else { 
			handleDeleteMovie();
			setIsLikeActive(false) }
	}

	return (
		<li className="card-movie" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<a className="card-movie__trailer-link" href={card.trailerLink} target="_blank" rel='noreferrer'>
				<img className="card-movie__photo" src={location.pathname === '/movies' ? card.image.url : card.image } alt="Постер фильма"></img>
			</a>
			<div className="card-movie__container">
				<h6 className="card-movie__name">{card.nameRU}</h6>
				{location.pathname === '/movies' ? <button className={`card-movie__like-button ${isLikeActive ? 'card-movie__like-button_active' : ''}`} onClick={likeToggle}></button> :
					<button className={isActiveRemoveClass} onClick={handleDeleteMovie}></button>}
			</div>
			<p className="card-movie__duration">{toHoursAndMinutes(card.duration)}</p>
		</li>
	)
}

export default MoviesCard;
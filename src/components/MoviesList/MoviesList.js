import React, { useEffect } from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import useMoviesListSize from "../../hooks/useMoviesListSize";
import { api } from '../../utils/API';


function MoviesList(props) {
	const location = useLocation();
	const { cardsColumns, cardsRows, setCardsRows, MoviesList } = useMoviesListSize();
	const properMoviesAmount = cardsRows * cardsColumns;
	const buttonMoreIsActive = (location.pathname === '/movies') && props.filteredMovies && (props.filteredMovies.length > properMoviesAmount);

	const filteredMovies = props.filteredMovies;

	useEffect(() => {
		function handleResize() {
			setTimeout(MoviesList, 300);
		}
		window.addEventListener("resize", handleResize);
		return function cleanup() {
			window.removeEventListener("resize", handleResize);
		}
	});

	useEffect(() => {
		api.getLikeMovies()
			.then((res) => {
				props.setSavedMovies(res.data);
			})
			.catch((err) => console.log(`Ошибка: ${err}`))
	}, [])


	function handleButtonMore() {
		if (cardsColumns === 1) {
			setCardsRows(cardsRows + 2);
		} else { setCardsRows(cardsRows + 1); }
	}


	return (
		<section className="movies">
			{location.pathname === '/movies' ? (
			<ul className="movies__list">
				{filteredMovies ?
					filteredMovies.map((card, i) => {
						if (i < properMoviesAmount) {
							return < MoviesCard
								card={card}
								key={card.id}
								savedMovies={props.savedMovies}
								setSavedMovies={props.setSavedMovies}
							/>
						}
					}) : null
				}
			</ul>
			)  : (<ul className="movies__list">
				{props.filteredOwnMovies ?
					props.filteredOwnMovies.map((card, i) => {
						if (i < properMoviesAmount) {
							return < MoviesCard
								card={card}
								key={card._id}
								savedMovies={props.savedMovies}
								setSavedMovies={props.setSavedMovies}
							/>
						}
					}) : null
				}
			</ul>)}

			{buttonMoreIsActive ? <button className="movies__button-more button" onClick={handleButtonMore}>Ещё</button> : null}
		</section>
	)
}

export default MoviesList;
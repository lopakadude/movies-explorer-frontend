import React from "react";
import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const defaultMovies = JSON.parse(localStorage.getItem("filteredMovies"));
		if (defaultMovies) {
			if (defaultMovies.length !== 0) {
				props.setFilteredMovies(
					props.isShortFilm ? props.filterShortMovies(defaultMovies) : defaultMovies
				);
			} else {
				props.setTextSearch("Ничего не найдено");
			}
		} else { props.setFilteredMovies([]) }
		setIsLoading(false);
	}, [isLoading, props.isShortFilm]);

	return (
		<main className="main">
			<Search
				onSubmit={props.findMovies}
				isLoading={props.isLoading}
				isShortFilm={props.isShortFilm}
				onChange={props.handleCheckBox} />
			{props.isLoading && <Preloader />}
			<MoviesList
				filteredMovies={props.filteredMovies}
				savedMovies={props.savedMovies}
				setSavedMovies={props.setSavedMovies} />
			{ props.filteredMovies.length === 0 && <p className="movies__message">
				{props.textSearch ? props.textSearch : 'Введите ключевое слово'}</p>}
		</main>
	)
}

export default Movies;
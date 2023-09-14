import React from "react";
import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
	const checkIsShortFilms =
	JSON.parse(localStorage.getItem("isShortFilm")) ?? false;
const [isShortFilm, setIsShortFilm] = useState(checkIsShortFilms);
const [textError, setTextError] = useState(false);

const handleCheckBox = () => {
	setIsShortFilm(!isShortFilm);
	localStorage.setItem("isShortFilm", JSON.stringify(!isShortFilm));
};

	useEffect(() => {
		props.setIsLoading(true);
		const defaultMovies = JSON.parse(localStorage.getItem("filteredMovies"));
		if (defaultMovies) {
			if (defaultMovies.length !== 0) {
				props.setFilteredMovies(
					isShortFilm ? props.filterShortMovies(defaultMovies) : defaultMovies
				);
			} else {
				setTextError("Ничего не найдено");
			}
		} else { props.setFilteredMovies([]) }
		props.setIsLoading(false);
	}, [ isShortFilm, props.filteredMovies]);


	console.log("movies");
	return (
		<main className="main">
			<Search
				onSubmit={props.findMovies}
				isLoading={props.isLoading}
				isShortFilm={isShortFilm}
				onChange={handleCheckBox} />
			{props.isLoading ? <Preloader /> : null} 
			<MoviesList
				filteredMovies={props.filteredMovies}
				savedMovies={props.savedMovies}
				setSavedMovies={props.setSavedMovies}
				isLoading={props.isLoading}
				setIsLoading={props.setIsLoading} />
			{ props.filteredMovies.length === 0 && <p className="movies__message">
				{textError ? textError : ''}</p>}
		</main>
	)
}

export default Movies;
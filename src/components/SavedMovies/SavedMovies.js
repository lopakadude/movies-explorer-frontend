import React, { useState, useEffect } from "react";
import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
	const [filteredOwnMovies, setFilteredOwnMovies] = useState([]);
const [isShortFilm, setIsShortFilm] = useState(false);
	const savedMovies = props.savedMovies;

	const handleCheckBox = () => {
		setIsShortFilm(!isShortFilm);
	};

	const handleSearchMovies = (textSearch) => {
		if (savedMovies) {
			props.setTextSearch("");
			setFilteredOwnMovies(isShortFilm ? props.filterShortMovies(props.filterMovies(savedMovies, textSearch)) : props.filterMovies(savedMovies, textSearch));
		};
		props.setTextSearch(textSearch);
	}

	useEffect(() => {
		if (savedMovies) {
			const filteredOwnMovies = props.filterMovies(props.savedMovies, props.textSearch);
			setFilteredOwnMovies(isShortFilm ? props.filterShortMovies(filteredOwnMovies) : filteredOwnMovies);
			return;
		}
	}, [ savedMovies, isShortFilm]);

	return (
		<main className="main">
			<Search
				onSubmit={handleSearchMovies}
				isLoading={props.isLoading}
				isShortFilm={props.isShortFilm}
				onChange={handleCheckBox} />
			{props.isLoading && <Preloader />}
			<MoviesList
				filteredOwnMovies={filteredOwnMovies}
				savedMovies={savedMovies}
				setSavedMovies={props.setSavedMovies}
				isLoading={props.isLoading}
				setIsLoading={props.setIsLoading}
			/>
			
		</main>
	)
}

export default SavedMovies;
import React, { useState, useEffect } from "react";
import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
	const [filteredOwnMovies, setFilteredOwnMovies] = useState([]);
	const [textNotification, setTextNotification] = useState('');
	const savedMovies = props.savedMovies;
	const isShortFilm = props.isShortFilm

	const handleSearchMovies = (textSearch) => {
		if (savedMovies) {
			props.setTextSearch("");
			setFilteredOwnMovies(props.filterMovies(savedMovies, textSearch));
			if (props.filterMovies(savedMovies, textSearch).length === 0 ) {
				setTextNotification("Ничего не найдено");
			}
		};
		props.setTextSearch(textSearch);
	}

	useEffect(() => {
		if (savedMovies) {
			const filteredOwnMovies = props.filterMovies(props.savedMovies, props.textSearch);
			if (savedMovies.length === 0 ) {
				setTextNotification("Нет сохраненных фильмов");
			}
			if (filteredOwnMovies.length !== 0 && savedMovies.length !== 0) {
				setTextNotification("");
			}
			setFilteredOwnMovies(isShortFilm ? props.filterShortMovies(savedMovies) : savedMovies);
			return;
		}
	}, [savedMovies, isShortFilm]);

	return (
		<main className="main">
			<Search
				onSubmit={handleSearchMovies}
				isLoading={props.isLoading}
				isShortFilm={props.isShortFilm}
				onChange={props.handleCheckBox} />
			{props.isLoading && <Preloader />}
			<MoviesList
				filteredOwnMovies={filteredOwnMovies}
				savedMovies={savedMovies}
				setSavedMovies={props.setSavedMovies}
			/>
			{textNotification  && <p className="movies__message">{textNotification ? textNotification : null}</p>}
			
		</main>
	)
}

export default SavedMovies;
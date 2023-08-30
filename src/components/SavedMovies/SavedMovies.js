import React from "react";
import SearchForm from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';

function SavedMovies() {
    return (
        <main className="main">
            <SearchForm />
            <MoviesList />
        </main>
    )
}

export default SavedMovies;
import React from "react";
import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';

function Movies() {
    return (
        <main className="main">
            <Search/>
            <MoviesList />
        </main>
    )
}

export default Movies;
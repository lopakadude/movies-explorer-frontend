import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

function MoviesList() {
	const location = useLocation();

	const moviesList = [
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		},
		{
			nameRU: 'Мстители: Война бесконечности',
			image: 'http://images-s.kinorium.com/movie/poster/1442353/w1500_51624379.jpg',
			trailerLink: 'https://www.youtube.com/watch?v=tDCH7-lteAc',
			duration: 149
		}
	];

	return (
		<section className="movies">
			<ul className="movies__list">
				{moviesList.map((card, i) => { return < MoviesCard card={card} key={i} /> })}
			</ul>

			{location.pathname === '/movies' ? <button className="movies__button-more button">Ещё</button> : null}
		</section>
	)
}

export default MoviesList;
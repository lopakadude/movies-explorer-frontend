import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/Auth';
import { api } from '../../utils/API';
import { beatFilmApi } from "../../utils/MoviesApi";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [errorSubmit, setErrorSubmit] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [savedMovies, setSavedMovies] = useState([]);
	const [textSearch, setTextSearch] = useState("");
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [isSuccess, setIsSuccess] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const allMovies = JSON.parse(localStorage.getItem("allMovies")) ?? [];


	useEffect(() => {
		if (localStorage.getItem('jwt')) {
			const jwt = localStorage.getItem('jwt');
			auth
				.checkToken(jwt)
				.then((res) => {
					setIsLoggedIn(true);
					setCurrentUser(res.data);
					navigate(location.pathname, { replace: true });
					localStorage.getItem('jwt');
					localStorage.getItem('allMovies');
					localStorage.getItem('filteredMovies');
					localStorage.getItem('request');
					localStorage.getItem('isShortFilm');
				})
				.catch(console.error)
		}
	}, []);

	function getUserInfo() {
		api
			.getUserInfo()
			.then((res) => {
				setCurrentUser(res.data);
			})
			.catch(console.error)
	}

	function handleRegistrationSubmit({ name, email, password }) {
		setIsLoading(true);
		auth
			.registration({ name, email, password })
			.then((res) => {
				handleLoginSubmit({ email, password })
			})
			.catch((error) => {
				setErrorSubmit(error.message);
			})
			.finally(() => setIsLoading(false));
	}

	function handleLoginSubmit({ email, password }) {
		setIsLoading(true);
		auth
			.login({ email, password })
			.then(() => {
				setIsLoggedIn(true);
				getUserInfo();
				navigate('/movies', { replace: true });
			})
			.catch((error) => {
				setErrorSubmit(error.message);
			})
			.finally(() => setIsLoading(false));
	}

	function handleSignOut() {
		localStorage.clear();
		setIsLoggedIn(false);
		setIsLoading(false);
		navigate('/', { replace: true });
	}

	function clearError() {
		setErrorSubmit('')
	}

	function handleEditProfile({ name, email }) {
		setIsLoading(true);
		api
			.setUserInfo({ name: name, email: email })
			.then((res) => {
				setCurrentUser(res.data);
				setIsSuccess('Данные изменены');
			})
			.catch((error) => {
				setErrorSubmit(error.message);
			})
			.finally(() => setIsLoading(false));
	}

	const findMovies = (req) => {
		setTextSearch("");
		if (!allMovies.length) {
			setIsLoading(true);
			beatFilmApi
				.getMovies()
				.then((movies) => {
					localStorage.setItem("allMovies", JSON.stringify(movies));
					handleFilterMovies(movies, req);
				})
				.catch((err) => {
					console.log(`Ошибка: ${err}`);
					setTextSearch("Во время запроса на сервере произошла ошибка. Попробуйте позже.")
				})
				.finally(() => setIsLoading(false));

		} else {
			handleFilterMovies(allMovies, req);
		}

		if (location.pathname === '/movies') {
		localStorage.setItem("request", req);
		}
	};


	const filterMovies = (movies, text) => {
		const lowercaseText = text.toLowerCase();
		const filteredMovies = movies.filter((movie) => {
			const { nameRU, nameEN } = movie;
			if (
				nameRU.toLowerCase().includes(lowercaseText) ||
				nameEN.toLowerCase().includes(lowercaseText)
			) {
				return movie
			}
		}
		)
		return filteredMovies;
	};

	const filterShortMovies = (movies) => {
		const filteredMovies = [];
		for (const movie of movies) {
			if (movie.duration <= 40) {
				filteredMovies.push(movie);
			}
		}
		return filteredMovies;
	};

	const handleFilterMovies = (movies, request, isShort) => {
		const filteredFilms = filterMovies(movies, request);
		localStorage.setItem("filteredMovies", JSON.stringify(filteredFilms));
		if (!filteredFilms.length) {
			setTextSearch("Ничего не найдено");
		}
		setFilteredMovies(
			isShort ? filterShortMovies(filteredFilms) : filteredFilms
		);
	};


	return (
		<CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
			<div className="root">
				<Routes>
					<Route path='/' element={
						<>
							<Header
								isLoggedIn={isLoggedIn} />
							<Main />
							<Footer />
						</>
					} />
					<Route path='/movies' element={(
						<ProtectedRoute
							isLoggedIn={isLoggedIn}>
							<>
								<Header
									isLoggedIn={isLoggedIn} />
								<Movies
									findMovies={findMovies}
									filteredMovies={filteredMovies}
									savedMovies={savedMovies}
									setSavedMovies={setSavedMovies}
									setFilteredMovies={setFilteredMovies}
									textSearch={textSearch}
									setTextSearch={setTextSearch}
									filterShortMovies={filterShortMovies}
									isLoading={isLoading}
									setIsLoading={setIsLoading} />
								<Footer />
							</>
						</ProtectedRoute>
					)} />
					<Route path='/saved-movies' element={(
						<ProtectedRoute
							isLoggedIn={isLoggedIn}>
							<>
								<Header
									isLoggedIn={isLoggedIn} />
								<SavedMovies
									filterMovies={filterMovies}
									filterShortMovies={filterShortMovies}
									textSearch={textSearch}
									setTextSearch={setTextSearch}
									savedMovies={savedMovies}
									setSavedMovies={setSavedMovies}
									isLoading={isLoading}
									setIsLoading={setIsLoading}
								/>
								<Footer />
							</>
						</ProtectedRoute>
					)} />
					<Route path='/profile' element={(
						<ProtectedRoute
							isLoggedIn={isLoggedIn}>
							<>
								<Header
									isLoggedIn={isLoggedIn} />
								<Profile
									logout={handleSignOut}
									onChangeInfo={handleEditProfile}
									errorSubmit={errorSubmit}
									isLoading={isLoading}
									setIsLoading={setIsLoading}
									isSuccess={isSuccess}
									setIsSuccess={setIsSuccess}/>
							</>
						</ProtectedRoute>
					)} />
					<Route path='/sign-up' element={
						<Register
							onRegister={handleRegistrationSubmit}
							errorSubmit={errorSubmit}
							isLoading={isLoading}
							clearError={clearError} 
							isLoggedIn={isLoggedIn}/>
							
					} />
					<Route path='/sign-in' element={
						<Login
							onLogin={handleLoginSubmit}
							errorSubmit={errorSubmit}
							isLoading={isLoading}
							clearError={clearError} 
							isLoggedIn={isLoggedIn}/>
					} />
					<Route path='*' element={
						<NotFound />
					} />
				</Routes >
			</div >
		</CurrentUserContext.Provider>
	);
}

export default App;

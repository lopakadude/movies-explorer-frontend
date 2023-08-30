import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
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

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();
	function login(evt) {
		evt.preventDefault();
		setIsLoggedIn(true);
		navigate('/');
		console.log('LOGIN SUCCESS');
	}
	function logout() {
		setIsLoggedIn(false);
		navigate('/');
		console.log('LOGOUT SUCCESS');
	}
	return (
		<div className="root">
			<Routes>
				<Route path='/' element={
					<>
						<Header />
						<Main />
						<Footer />
					</>
				} />
				<Route path='/movies' element={
					<>
						<Header />
						<Movies />
						<Footer />
					</>
				} />
				<Route path='/saved-movies' element={
					<>
						<Header />
						<SavedMovies />
						<Footer />
					</>
				} />
				<Route path='/profile' element={
					<>
						<Header />
						<Profile
							logout={logout} />
					</>
				} />
				<Route path='/sign-up' element={
					<Register />
				} />
				<Route path='/sign-in' element={
					<Login
						login={login} />
				} />
				<Route path='/not-found' element={
					<NotFound />
				} />
			</Routes >
		</div >
	);
}

export default App;

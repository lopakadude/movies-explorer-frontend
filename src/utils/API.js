import changeUrl from "./getPropperMoviesList";

class Api {
	constructor(settings) {
		this.baseUrl = settings.baseUrl;
		this.headers = settings.headers;
	}

	_checkResponse(res) {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(`Ошибка: ${res.status}`);
	}

	_request(endpoint, options) {
		return fetch(`${this.baseUrl}/${endpoint}`, options)
			.then(this._checkResponse);
	};

	getUserInfo() {
		this.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
		return this._request(`users/me`, {
			method: 'GET',
			headers: this.headers,
		})
	}

	setUserInfo(data) {
		return this._request(`users/me`, {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify({
				name: data.name,
				email: data.email
			})
		})
	}

	getLikeMovies() {
		return this._request(`movies`, {
			method: 'GET',
			headers: this.headers
		})
	}

	saveMovie(data) {
		const newData = changeUrl(data);
		return this._request(`movies`, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify({
				country: newData.country,
				director: newData.director,
				duration: newData.duration,
				year: newData.year,
				description: newData.description,
				image: newData.image.url,
				trailerLink: newData.trailerLink,
				nameRU: newData.nameRU,
				nameEN: newData.nameEN,
				thumbnail: newData.image.formats.thumbnail.url,
				movieId: newData.id,
			})
		})
	}

	deleteMovie(card) {
		return this._request(`movies/${card._id}`, {
			method: 'DELETE',
			headers: this.headers
		})
	}

}

export const api = new Api({
	baseUrl: 'https://api.lopakadude.bitfilms.nomoreparties.co',
	headers: {
		authorization: `Bearer ${localStorage.getItem('jwt')}`,
		'Content-Type': 'application/json'
	}
});

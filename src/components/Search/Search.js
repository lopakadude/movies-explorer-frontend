import React from "react";
import Checkbox from '../Checkbox/Checkbox';

function SearchForm() {
	return (
		<section className="search">
			<div className="search__container">
				<form className="search__form">
					<label className="search__field">
						<input className="search__input" required placeholder="Фильм"></input>
					</label>
					<button type="submit" className="search__submit button"></button>
				</form>
				<Checkbox />
				<div className="search__line"></div>
			</div>
		</section>
	)
}

export default SearchForm;
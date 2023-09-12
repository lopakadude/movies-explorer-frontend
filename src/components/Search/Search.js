import React, { useEffect, useState } from "react";
import Checkbox from '../Checkbox/Checkbox';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {
	const [values, setValues] = useState({});
	const location = useLocation();

	const handleChange = (evt) => {
		const { value, name } = evt.target;
		setValues({ ...values, [name]: value });
	};

	function handleSubmit(evt) {
		evt.preventDefault();
		props.onSubmit(
			values.textSearch
		);
	}

	useEffect(() => {
		if (location.pathname === '/movies') {
			const search = localStorage.getItem("request");
			if (search) {
				setValues({ textSearch: search });
			}
		}
	}, [setValues]);


	return (
		<section className="search">
			<div className="search__container">
				<form className="search__form" onSubmit={handleSubmit}>
					<label className="search__field">
						<input
							className="search__input"
							required
							placeholder="Фильм"
							type="text"
							name="textSearch"
							onChange={handleChange}
							value={values.textSearch ? values.textSearch : ''}></input>
					</label>
					<button
						type="submit"
						className="search__submit button"
					></button>
				</form>
				<Checkbox
					onChange={props.onChange}
					value={props.isShortFilm} />
				<div className="search__line"></div>
			</div>
		</section>
	)
}

export default SearchForm;
import React, { useEffect, useState } from "react";
import Checkbox from '../Checkbox/Checkbox';
import { useLocation } from 'react-router-dom';
import useFormWithValidation from "../../hooks/useForm";

function SearchForm(props) {
	const { values, errors, isValid, handleChange, setValues } =
		useFormWithValidation();
	const location = useLocation();

	function handleSubmit(evt) {
		evt.preventDefault();
		props.onSubmit(
			values.textSearch,
			props.isShortFilm
		);
	}

	useEffect(() => {
		if (location.pathname === '/movies') {
			const search = localStorage.getItem("request");
			if (search) {
				setValues({ textSearch: search });
			}
			if (values.textSearch) {
				errors.textSearch = false;
			}
		}
	}, [setValues, location.pathname, props.isShortFilm]);


	return (
		<section className="search">
			<div className="search__container">
				<form className="search__form" onSubmit={handleSubmit} noValidate>
					<label className="search__field">
						<input
							className="search__input"
							required
							placeholder="Фильм"
							type="text"
							name="textSearch"
							onChange={handleChange}
							value={values.textSearch ? values.textSearch : ''}></input>
						<span className="search__message">{errors.textSearch ? 'Введите ключевое слово' : ''}</span>
					</label>
					<button
						type="submit"
						className="search__submit button"
						disabled={isValid ? false : true}
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
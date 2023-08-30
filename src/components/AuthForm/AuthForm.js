import React from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm(props) {
	const location = useLocation();

	return (
		<section className="auth">
			<div className="auth__container">
				<Link to="/" className="link auth__link-logo"><img src={logo} alt="Логотип проекта" className="auth__logo" /></Link>
				<h1 className="auth__title">{props.title}</h1>
				<form className="auth__form" onSubmit={props.onSubmit}>
					<div className="auth__form-container">
						{location.pathname === '/sign-up' ?
							<div className="auth__field">
								<label className="auth__label">Имя</label>
								<input className="auth__input" type="text" minLength="2" maxLength="30" placeholder="Имя" required></input>
								<span className="auth__input-error"></span>
							</div> : null}
						<div className="auth__field">
							<label className="auth__label">E-mail</label>
							<input className="auth__input" type="email" required placeholder="E-mail"></input>
							<span className="auth__input-error"></span>
						</div>
						<div className="auth__field">
							<label className="auth__label">Пароль</label>
							<input className="auth__input" type="password" required placeholder="Пароль"></input>
							<span className="auth__input-error"></span>
						</div>
					</div>
					<div className="auth__form-container">
						<button className="auth__button button" type="submit">{props.buttonText}</button>
						<div className="auth__container-link">
							<p className="auth__link-text">{props.linkDescription}</p>
							<Link to={props.linkUrl} replace className="auth__link link">{props.linkText}</Link>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default AuthForm;
import React from "react";
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import useFormWithValidation from "../../hooks/useForm";

function Register(props) {
	const { values, errors, isValid, handleChange } =
		useFormWithValidation();

	function handleSubmit(evt) {
		evt.preventDefault();
		props.onRegister({
			name: values.name,
			email: values.email,
			password: values.password
		})
	}

	return (
		<section className="auth">
			<div className="auth__container">
				<Link to="/" className="auth__logo-link link"><img src={logo} alt="Логотип проекта" className="auth__logo" /></Link>
				<h1 className="auth__title">Добро пожаловать!</h1>
				<form className="auth__form" onSubmit={handleSubmit}>
					<div className="auth__form-container">
						<div className="auth__field">
							<label className="auth__label">Имя</label>
							<input
								className="auth__input"
								type="text"
								minLength="2"
								maxLength="30"
								name="name"
								pattern="[A-Za-zА-Яа-яЁё\s\-]+"
								placeholder="Имя"
								required
								onChange={handleChange}
								value={values.name ? values.name : ''}
								id='auth__input-name'
							></input>
							<span
								className="auth__input-error"
								id='error-auth-name'>
								{errors.name}</span>
						</div>
						<div className="auth__field">
							<label className="auth__label">E-mail</label>
							<input
								className="auth__input"
								type="email"
								required
								name="email"
								placeholder="E-mail"
								onChange={handleChange}
								value={values.email ? values.email : ''}
								id='auth__input-email'
							></input>
							<span
								className="auth__input-error"
								id='error-auth-email'>
								{errors.email}
							</span>
						</div>
						<div className="auth__field">
							<label className="auth__label">Пароль</label>
							<input
								className="auth__input"
								type="password"
								required
								name="password"
								minLength="5"
								maxLength="16"
								placeholder="Пароль"
								onChange={handleChange}
								value={values.password ? values.password : ''}
								id='auth__input-password'
							></input>
							<span
								className="auth__input-error"
								id='error-auth-email'
							>{errors.password}</span>
						</div>
					</div>
					<div className="auth__form-container">
						<span 
						className={`${!props.errorSubmit ? 'auth__submit-error_disabled' : ''} auth__submit-error`}
						id='error-auth-submit'>{props.errorSubmit}</span>
						<button
							disabled={( !isValid || props.isLoading ) ? true : false}
							className={`${( !isValid || props.isLoading ) ? 'auth__submit_disabled' : ''} auth__submit button`}
							type="submit"
							name="submit"
							id='auth__submit'
						>{props.isLoading ? "Регистрация..." : "Зарегистрироваться"}</button>
						<div className="auth__container-link">
							<p className="auth__text-link">Уже зарегистрированы?</p>
							<Link to='/sign-in' replace className="auth__link link" onClick={props.clearError}>Войти</Link>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Register;
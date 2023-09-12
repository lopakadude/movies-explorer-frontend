import React from "react";
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import useFormWithValidation from "../../hooks/useForm";


function Login(props) {
	const { values, errors, isValid, handleChange } =
		useFormWithValidation();

	function handleSubmit(evt) {
		evt.preventDefault();
		props.onLogin({
			email: values.email,
			password: values.password
		});
	}


	return (
		<section className="auth">
			<div className="auth__container">
				<Link to="/" className="auth__logo-link link"><img src={logo} alt="Логотип проекта" className="auth__logo" /></Link>
				<h1 className="auth__title">Рады видеть!</h1>
				<form className="auth__form" onSubmit={handleSubmit}>
					<div className="auth__form-container">
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
						className="auth__submit-error"
						id='error-auth-submit'>{props.errorSubmit}</span>
						<button
							disabled={( !isValid || props.isLoading ) ? true : false}
							className={`${( !isValid || props.isLoading ) ? 'auth__submit_disabled' : ''} auth__submit button`}
							type="submit"
						>{props.isLoading ? "Вход..." : "Войти"}</button>
						<div className="auth__container-link">
							<p className="auth__text-link">Ещё не зарегистрированы?</p>
							<Link to='/sign-up' replace className="auth__link link" onClick={props.clearError}>Регистрация</Link>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Login;
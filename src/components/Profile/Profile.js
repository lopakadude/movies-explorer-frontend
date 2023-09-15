import React from 'react';
import { useState, useEffect, useContext } from 'react';
import useFormWithValidation from "../../hooks/useForm";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile(props) {
	const { currentUser } = useContext(CurrentUserContext);
	const [isActive, setIsActive] = useState(false);

	const { values, errors, isValid, handleChange, setValues } =
		useFormWithValidation();

	const isButtonAble =
		isValid &&
		(values.name !== currentUser.name || values.email !== currentUser.email);



	function handleSubmit(evt) {
		evt.preventDefault();
		props.onChangeInfo({
			name: values.name,
			email: values.email,
		});
		handleActiveOff();
		props.setIsSuccess(false);
	}

	useEffect(() => {
		setValues({
			name: currentUser.name,
			email: currentUser.email,
		});
		props.clearError();
	}, [setValues, currentUser.name, currentUser.email]);

	useEffect(() => {
		props.setIsSuccess(false);
	}, []);

	function handleActiveOn() {
		setIsActive(true);
	}

	function handleActiveOff() {
		setIsActive(false);
	}

	return (
		<section className="profile">
			<form className='profile__form' onSubmit={handleSubmit}>
				<div className="profile__container">
					<h2 className="profile__title">Привет, {currentUser.name}</h2>
					<div className="profile__field">
						<label className="profile__label">Имя</label>
						<input
							className="profile__input"
							required
							type='text'
							id='profile__input-name'
							placeholder={isActive ? `${currentUser.name}` : ""}
							readOnly={!isActive}
							value={values.name ? values.name : ''}
							name='name'
							pattern="[A-Za-zА-Яа-яЁё\s\-]+"
							minLength="2"
							maxLength="30"
							onChange={handleChange}
						></input>
						<span
							className="profile__input-error"
							id='error-profile-name'
						>
							{errors.name}
						</span>
					</div>
					<div className="profile__field">
						<label className="profile__label">E-mail</label>
						<input
							className="profile__input"
							required
							id='profile__input-email'
							placeholder={isActive ? "E-mail" : ""}
							readOnly={!isActive}
							type='email'
							value={values.email ? values.email : ''}
							name='email'
							onChange={handleChange}
							pattern="^[a-zA-Z0-9+_.\-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$"
						></input>
						<span
							className="profile__input-error"
							id='error-profile-email'
						>{errors.email}</span>
					</div>
					<div className="profile__container-options">
					<span
								className={`${props.isSuccess ? 'profile__submit_success' : ''} profile__submit-error`}
								id='error-profile-submit'>{props.isSuccess ? props.isSuccess : props.errorSubmit}</span>
						{isActive ? <div className='profile__container-submit'>
							<button
								type="submit"
								className={`${(!isButtonAble) ? 'profile__button-submit_disabled' : ''} profile__button-submit button`}
								disabled={(!isButtonAble) ? true : false}>
								Сохранить
							</button>
						</div> : !props.isLoading ?
							<>
								<button type="button" className="profile__button-edit button" onClick={handleActiveOn}>Редактировать</button>
								<button type="button" className="profile__button-exit button" onClick={props.logout}>Выйти из аккаунта</button>
							</> : null}
					</div>
				</div>
			</form>
		</section>
	)
};

export default Profile;
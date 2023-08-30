import React from 'react';
import { useState } from 'react';

function Profile(props) {

	const [isActive, setIsActive] = useState(false);

	function handleActiveOn() {
		setIsActive(true);
	}

	function handleActiveOff() {
		setIsActive(false);
	}

	function submit(evt) {
		if (isActive) {
			evt.preventDefault();
			console.log('Изменения в профиль внесены')
		}
	}
	return (
		<section className="profile">
			<form className='profile__form' onSubmit={submit}>
				<div className="profile__container">
					<h2 className="profile__title">Привет, Дмитрий</h2>
					<div className="profile__field">
						<label className="profile__label">Имя</label>
						<input className="profile__input" required placeholder={isActive ? "Имя" : ""} readOnly={!isActive} value="Дмитрий"></input>
						<span className="profile__input-error"></span>
					</div>
					<div className="profile__field">
						<label className="profile__label">E-mail</label>
						<input className="profile__input" required placeholder={isActive ? "E-mail" : ""} readOnly={!isActive} type='email' value="test@test.com"></input>
						<span className="profile__input-error"></span>
					</div>
					<div className="profile__container-options">
						{isActive ? <button type="submit" className="profile__button-submit button" onClick={handleActiveOff} disabled>Сохранить</button> : <>
							<button type="button" className="profile__button-edit button" onClick={handleActiveOn}>Редактировать</button>
							<button type="button" className="profile__button-exit button" onClick={props.logout}>Выйти из аккаунта</button>
						</>}
					</div>
				</div>
			</form>
		</section>
	)
};

export default Profile;
import React from "react";
import headerLogo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
	const location = useLocation();
	return (
		<header className={`${location.pathname === '/' ? 'header_color_blue' : ''} header`}>
			<div className="header__container">
				<Link to="/" className="link header__link-logo"><img src={headerLogo} alt="Лого проекта" className="header__logo" /></Link>
				{location.pathname !== '/' ? <Navigation /> :
					<div className="header__authorization">
						<Link to="sign-up" replace className="header__link header__link-register link">Регистрация</Link>
						<Link to="sign-in" replace className="header__link header__link-login button">Войти</Link>
					</div>}
			</div>
		</header>
	)
}

export default Header;
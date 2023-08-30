import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login(props) {
    return (
        <AuthForm title='Рады видеть!' buttonText='Войти' linkDescription='Ещё не зарегистрированы?' linkText='Регистрация' linkUrl='/sign-up' onSubmit={props.login}/>
    )
}

export default Login;
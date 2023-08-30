import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register() {
    return (
        <AuthForm title='Добро пожаловать!' buttonText='Зарегистрироваться' linkDescription='Уже зарегистрированы?' linkText='Войти' linkUrl='/sign-in' />
    )
}

export default Register;
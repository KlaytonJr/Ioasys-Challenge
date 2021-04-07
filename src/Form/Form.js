import React from 'react';
import Button from './Button';
import Input from './Input';
import Logo from '../assets/img/Logo.svg';

const Form = () => {
    return (
        <div className="form">
            <div className="logo-div">
                <img src={Logo} alt="logo" className="logo"></img>
                <p className="font-title">Books</p>
            </div>
            <p className="input-container">
                <label htmlFor="email">Email</label>
                <Input type="email"/>
            </p>
            <p className="input-container">
                <label htmlFor="senha">Senha</label>
                <Input type="password"/>
            </p>
            <Button />
        </div>
    )
}

export default Form

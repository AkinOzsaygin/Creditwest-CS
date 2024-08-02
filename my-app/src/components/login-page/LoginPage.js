import React, { useState, useEffect } from "react";
import '../../css/login-page.css';
import Logoimage from '../../images/cwlogo.png';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks.js/useAuth"

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const {setAuth} = useAuth();
    
    useEffect(() => {
        // Password validation
        if (password && password.length < 8) {
            setPasswordError('Şifreniz en az 8 karakter olmalıdır.');
        } else {
            setPasswordError('');
        }

        // Username validation
        const usernameRegex = /^[a-zA-Z0-9]+$/; // Only alphanumeric characters
        if (username && !usernameRegex.test(username)) {
            setUsernameError('Kullanıcı adı sadece harf ve rakamlardan oluşmalıdır.');
        } else {
            setUsernameError('');
        }
    }, [username, password]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'Admin' && password.length >= 8 && !usernameError) {
            setAuth({user: username, roles:[5150]})
            localStorage.setItem('auth', JSON.stringify({user: username, roles: [5150]}));
            navigate("/layout");
        } else if (username === 'Manager' && password.length >= 8 && !usernameError){
            setAuth({user: username, roles:[1984]});
            localStorage.setItem('auth', JSON.stringify({user: username, roles:[1984]}));
            navigate("/layout");
        } else if(username === 'Personel' && password.length >= 8 && !usernameError){
            setAuth({user: username, roles: [2001]});
            localStorage.setItem('auth', JSON.stringify({user: username, roles:[2001]}));
            navigate("/layout");
        } else (
            alert("Geçersiz kullanıcı adı veya şifre")
        )
    };

    return (
        <main className="login-page">
            <div className="login-container">
                <div className="login-image-container">
                    <img className="login-image" src={Logoimage} alt="CreditWest Software Genius Check Scanner"></img>
                    <p className="logo-text">CREDİT<span>W</span>EST SOFTWARE GENIUS</p>
                    <p className="check-scanner-text">CHECK SCANNER</p>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <h3 className="login-title">Giriş</h3>
                    <p>Lütfen giriş yapmak için kullanıcı adınızı ve şifrenizi giriniz. Eğer kullanıcı adınızı veya şifrenizi bilmiyorsanız lütfen admin ile iletişime geçiniz.</p>
                    <div className="user-info">
                        <label htmlFor="username">Kullanıcı adı</label>
                        <input type="text" id="username" name="username" placeholder="Kullanıcı adı" maxLength="20" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        {usernameError && <p className="error-message">{usernameError}</p>}
                        <label htmlFor="password">Şifre</label>
                        <input type="password" id="password" name="password" placeholder="Şifre" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        {passwordError && <p className="error-message">{passwordError}</p>}
                    </div>
                    <button type="submit" className="login-button">OTURUM AÇ</button>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;

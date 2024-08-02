import React from 'react'
import logo from '../../images/cwlogo.png'
import useAuth from '../../hooks.js/useAuth';
import useLogout from '../../hooks.js/useLogout';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {

  console.log("Header Created");

  const { auth } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  }
  return (
    <header className='header'>
      <div className='header-flex-group'>
        <img src={logo} width={70}></img>
        <h1>{title}</h1>
      </div>

      {
        auth.user &&
        <div className='header-flex-group'>
          <span className='username-text'>{auth.user} | <span onClick={handleLogout}>Çıkış Yap</span></span>
        </div>
      }

    </header>
  );
}




export default Header

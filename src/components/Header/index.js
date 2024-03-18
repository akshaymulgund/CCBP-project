import {useState, useContext} from 'react'
import ThemeChanger from '../ThemeChanger'
import './index.css'
import Cookies from 'js-cookie'
import {useNavigate, Link} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

const Header = () => {
  const {isDarkTheme, toggleTheme} = useContext(ThemeChanger)
  const bgColor = isDarkTheme ? 'black' : 'white'
  const txtColor = isDarkTheme ? 'white' : 'black'
  const navigate = useNavigate()

  const onLogout = () => {
    Cookies.remove('jwt-token')
    navigate('/login')
  }

  const onThemeChange = () => {
    toggleTheme()
  }
  return (
    <nav className="nav-header" style={{backgroundColor: bgColor}}>
      <div className="HeaderLeft">
        <Link to="/" className="nxt">
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            className="mainlogo"
            alt="website-logo"
          />
        </Link>
      </div>
      <div className="header-Right">
        <button className="theme-toggle" onClick={onThemeChange}>
          {isDarkTheme ? <BsBrightnessHigh size={24} /> : <BsMoon size={24} />}
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
          className="profile"
        />

        <button className="logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default Header

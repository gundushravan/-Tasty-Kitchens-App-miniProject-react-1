import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-bar-large-container">
        <div className="icon-container">
          <Link to="/" className="nav-link">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dkobk5oao/image/upload/v1633608363/Frame_274_mqin4h.png"
              alt="website logo"
            />
            <h1 className="icon-heading">Tasty Kitchen</h1>
          </Link>
        </div>
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li className="nav-menu-item">Home</li>
          </Link>

          <Link to="/cart" className="nav-link">
            <li className="nav-menu-item">Cart</li>
          </Link>
          <li>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
        <Popup
          trigger={
            <button type="button" className="hamburger-btn">
              <GiHamburgerMenu size={25} className="hamburger" />
            </button>
          }
        >
          {close => (
            <div className="modal-container">
              <div className="nav-link-container">
                <Link to="/" className="nav-link">
                  <p className="nav-menu-item">Home</p>
                </Link>
                <Link to="/cart" className="nav-link">
                  <p className="nav-menu-item">Cart</p>
                </Link>
                <button
                  type="button"
                  className="logout-desktop-btn"
                  onClick={onClickLogout}
                >
                  Logout
                </button>
              </div>
              <button type="button" className="close-btn">
                <AiOutlineCloseCircle size={18} onClick={() => close()} />
              </button>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  )
}

export default Header

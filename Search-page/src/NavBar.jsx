import { Link } from 'react-router-dom';
import './components/navbar.css';

import {
 DiscordIcon,
 GithubIcon,
 RedditIcon
} from "./assets/images"

function NavBar() {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Seker</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="navbar-social">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src= {DiscordIcon} alt="Discord" className="social-icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="Github" className="social-icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={RedditIcon} alt="Reddit" className="social-icon" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
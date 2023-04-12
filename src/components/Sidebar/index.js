import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoD from '../../assets/images/logo-d.png'
import LogoSubtitle from '../../assets/images/logo_sub1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoD} alt='logo' />
      <img className='sub-logo' src={LogoSubtitle} alt='David' />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color='#594F40'/>
      </NavLink >
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color='#594F40'/>
      </NavLink >
      <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color='#594F40'/>
      </NavLink >
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='#594F40'/>
      </NavLink >
    </nav>
    <ul>
      <li>
        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/david-okolie/'>
          <FontAwesomeIcon icon={faLinkedin} color='#594F40'/>
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://github.com/David-Inkheart'>
          <FontAwesomeIcon icon={faGithub} color='#594F40'/>
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://twitter.com/David_Inkheart'>
          <FontAwesomeIcon icon={faTwitter} color='#594F40'/>
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://medium.com/@David-Inkheart'>
          <FontAwesomeIcon icon={faMedium} color='#594F40'/>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-d.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 'v', 'i', 'd'];

  //This is a longer method to create an array of characters from a string
  //const jobArray = ['A',' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', ' ', 'a', 'n', 'd', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  const jobArray = 'A fullstack software engineer.'.split('');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 5500)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer"  />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
          </h1>
          <h2>Frontend Development 
            / Backend Development 
            / System Engineering 
            & DevOps</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home
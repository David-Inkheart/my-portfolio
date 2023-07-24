import './index.scss'
import '../Layout/index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

    return (
        <>
          <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={"About me".split("")}
                  idx={15}
                />
              </h1>
              <p>
                I am a driven full-stack software developer with a strong focus on the backend, who is actively seeking a junior position. I am interested in becoming part of an amazing team, where I will have the opportunity to work with the latest technologies on challenging and diverse projects.
              </p>
              <p>
                I am a naturally confident, adaptable, and curious problem-solver, with a background in Architecture and Construction, who loves learning and taking on new challenges.
              </p>
              <p>
                If I am to define myself in one sentence, it would be: A loving husband, a passionate father of a beautiful daughter, a bibliophile, an otaku, and a dreamy-eyed techie.
              </p>
            </div>

            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faReact} color='#61DBFB' />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color='#e34c26' />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color='#264de4' />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faJsSquare} color='#F0DB4F' />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faPython} color='#FFD43B' />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color='#F1502F' />
                </div>
              </div>
            </div>
          </div>
          <Loader type="pacman" />
        </>
    )
}


export default About
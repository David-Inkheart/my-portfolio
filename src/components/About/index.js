import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {

    return (
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                strArray={"About me".split("")}
                idx={15}
              />
            </h1>
            <p>
              I am a very driven and ambitious fullstack software engineer looking for a role in an established IT company, where I'd have the opportunity to work with the latest technologies on challenging and diverse projects
            </p>
            <p>
              I am a naturally confident, adaptable, and curious problem-solver, with a background in Architecture and Construction, who loves learning and taking on new challenges.
            </p>
            <p>
              If I am to define myself in one sentence, it would be: A loving husband, a passionate father of a beautiful daughter, a bibliophile, an otaku, and a dreamy-eyed techie.
            </p>
          </div>
        </div>
    )
}


export default About
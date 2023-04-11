import './index.scss'
import '../Layout/index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_3tcrce4',
        'template_7kr0kqh',
        refForm.current,
        'vzwxHV0V-QejsMzja'
        )
        .then(
          () => {
            alert('Message sent successfully!')
            window.location.reload(false)
          },
          () => {
            alert('Message failed to send, please try again.')
          }
        )
    }


  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={"Contact me".split("")}
            idx={15}
            />
          </h1>
          <p>
            I am interested in projects across in-demand tech disciplines involving backend development, frontend development and devops, that enable a global career as a Full-Stack Developer. However, if you have a request or question, don't hesitate to get in touch using the form below.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required/>
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required/>
                </li>
                <li>
                  <input placeholder='Subject' type="text" name="subject" required/>
                </li>
                <li>
                  <textarea placeholder='Message' name="message" required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          David Okolie,
          <br />
          Nigeria,
          <br />
          20 Odunlade Street, <br />
          Somolu, Lagos <br />
          <span>okoliedave1@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[6.535348698832125, 3.375861213131358]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[6.535348698832125, 3.375861213131358]}>
              <Popup>David lives here, come over for a chat :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman'/>
    </>
  )
}

export default Contact
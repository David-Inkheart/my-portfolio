import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import LogoD from '../../../assets/images/logo-d.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 0.6,
        delay: 5,
        duration: 5,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoD}
        alt="Developer D"
      />
    </div>
  )
}

export default Logo
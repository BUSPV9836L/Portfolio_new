import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Bipin Vishwakarma,</span> frontend developer based in India.</h1>
      <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href='https://drive.google.com/file/d/1qnH9lw48_XU9BWF7OeddQ2chMzn6lGCi/view?usp=drive_link' target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"white"}}>My resume</a></div>
      </div>
    </div>
  )
}

export default Hero

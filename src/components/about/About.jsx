import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>At our Agency , we are passionate about helping you find the perfect place to call home. Since our founding, we've dedicated ourselves to providing exceptional real estate services, combining industry expertise with a client-first approach. From first-time buyers to seasoned investors, we strive to make every real estate transaction smooth and successful, ensuring our clients’ needs are always our top priority.</p>
            <p>Our team is committed to transparency, trust, and delivering personalized solutions that match your unique goals. We believe in building lasting relationships and creating a positive impact on the communities we serve. With our extensive knowledge of the local market and unwavering dedication to excellence, we’re here to guide you through every step of your real estate journey.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About

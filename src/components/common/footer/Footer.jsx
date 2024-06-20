import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>You can connect with us via your email and very soon we connect to you</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>EDURET</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Our online education platform offers a transformative learning experience designed to fit your lifestyle.</p>

           <a href="https://www.facebook.com/profile.php?id=100074156084588&mibextid=ZbWKwL"> <i className='fab fa-facebook-f icon'></i></a>
            <i className='fab fa-twitter icon'></i>
           <a href="https://www.instagram.com/nandini___2508?igsh=ZXJzd3I5YjI4Ymd4" > <i className='fab fa-instagram icon'></i></a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li><a href="/about" style={{color:"#1eb2a6"}}>About Us</a></li>
              <li><a href="/team" style={{color:"#1eb2a6"}}>Team</a></li>
              <li><a href="/courses" style={{color:"#1eb2a6"}}>Courses</a></li>
              <li><a href="/pricing" style={{color:"#1eb2a6"}}>Pricing</a></li>
              <li><a href="/contact" style={{color:"#1eb2a6"}}>Contact Us</a></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
            <li><a href="/contact" style={{color:"#1eb2a6"}}>Contact Us</a></li>
            <li><a href="/pricing" style={{color:"#1eb2a6"}}>Pricing</a></li>
            <li><a href="/journal" style={{color:"#1eb2a6"}}>Blogs</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100074156084588&mibextid=ZbWKwL" style={{color:"#1eb2a6"}}>Facebook</a></li>
            <li><a href="https://www.instagram.com/nandini___2508?igsh=ZXJzd3I5YjI4Ymd4" style={{color:"#1eb2a6"}}>Instagram</a></li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Axeno Consulting (Plot 111, Riana Towers, Sector 136, Noida, UP 201305)
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
              +91 93063 51287
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                tomarshine70@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | Made with 💗 by <strong>Nandini</strong>
        </p>
      </div>
    </>
  )
}

export default Footer

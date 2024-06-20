import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import { useState } from "react"
import axios from "axios"

const Contact = () => {
  const users_data = {
    name: "",
    email : "",
    password : "",
    textarea : ""
  }
const [insertData, setinsertData] = useState(users_data);
const handleInputText = (e)=>{
setinsertData({...insertData, [e.target.name] :  e.target.value})
}
const handlebutton = ()=>{
  axios.post("http://127.0.0.1:8000/signup",insertData).then((response)=>{
        // console.log(response);
        alert("sent successfully")
      })
}
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Axeno Consulting (Plot 111, Riana Towers, Sector 136, Noida, UP 201305)</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> tomarshine70@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 93063 51287</p>
              </div>
            </div>

            <form action='' onSubmit={(e)=>e.preventDefault()}>
              <div className='flexSB'>
                <input  onChange={handleInputText} value={insertData.name} type='text' placeholder='Name' name='name' />
                <input  onChange={handleInputText} value={insertData.email} type='email' placeholder='Email' name='email' />
              </div>
              <input  onChange={handleInputText} value={insertData.password} type='password' placeholder='Enter your Password' name='password'/>
              <textarea onChange={handleInputText} value={insertData.textarea} cols='30' rows='10' placeholder="Create a message here..." name='textarea'></textarea>
              <button onClick={handlebutton} className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK INSTAGRAM TWITTER</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

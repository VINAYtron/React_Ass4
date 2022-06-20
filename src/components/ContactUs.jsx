import React from 'react'

const ContactUs = () => {
  let name="Vinay Patil"
  return (
    <>
      <h1>Contact Us</h1>
      <div className="cont">
        <br />
        <br />
        <div>
          Phone Number: <a href="tel:+91-8299098719">+91 6360688133</a>
          <br />
          <br />
          E-Mail: <a href="mailto : vinaypatil">vinaypatil@gmail.com</a>
          <br />
          <br />
        </div>
      </div>
      <br /> <h3>{name}</h3>
    </>
  );
}

export default ContactUs

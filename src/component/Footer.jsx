import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='bg-primary p-4 d-flex justify-content-center align-items-center text-light flex-column'>
        <h4 className='mt-4 mb-3'>Contact Us</h4>
        <h6><span className='mx-2'><MdOutlineMail /></span>resumebuilder@gmail.com</h6>
        <h6><span className='mx-2'><FaPhoneSquareAlt /></span>9876543210</h6>
        <h4 className='mt-5 mb-3'>Connect with Us</h4>
        <div className='fs-4'><span className='mx-2'><FaWhatsapp /></span><span className='mx-2'><FaInstagram /></span><span className='mx-2'><FaLinkedinIn /></span></div>
        <em className='mt-4'>Designed & built with ❤️ using React</em>
      </div>
    </>
  )
}

export default Footer
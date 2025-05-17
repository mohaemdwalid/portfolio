import React from 'react'
import { socialImgs } from '../Constants'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className='icon' target='_blank' href={img.url} key={img.url}><img src={img.imgPath} alt={img.name} /></a>
          ))}
        </div>


       <div className="flex flex-col justify-center">
          <p className='text-center'>© {new Date().getFullYear()} Moahmed | Walid. All rights reserved</p>
       </div>

      </div>
      </footer>      
  )
}

export default Footer

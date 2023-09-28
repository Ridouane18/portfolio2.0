import Link from 'next/link'
import React from 'react'
import style from './Footer.module.css'

const Footer = () => {

  return (
    <div className={style.footer_container} >
      <div className={style.footer_buttons_container}>
        <Link href="/contact" className={style.contact_button} >
          <span className={style.contact_button_span}>contact</span>
        </Link>
        <a href='assets/Ridouane_Tansouft.pdf' download="Ridouane Tansouft Resume" className={style.download_button} >
          Download my resume
        </a>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Footer
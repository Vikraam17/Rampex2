import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
            ©{new Date().getFullYear()} All right reserved.
            </p>
          </div>
          {/* <div className="sb_footer-below-links">
            <a href="/"><div>
              <p>Terms & Conditions</p>
              </div></a>
              <a href="/"><div>
              <p>Privacy</p>
              </div></a>
              <a href="/"><div>
              <p>Security</p>
              </div></a>
              <a href="/"><div>
              <p>Cookies Declaration</p>
              </div></a>
          </div> */}
        </div>
      </div>

    </div>
  )
}

export default Footer
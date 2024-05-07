import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram"; import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"
const Footer= () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icon">
          <div className='icons'> < FacebookOutlinedIcon /></div>
          <div className='icons'> < InstagramIcon /></div>
          <div className='icons'><YouTubeIcon /></div>
         
         
          
        </div>
        <div className="footer_li">
          <div className="footer_data">
            <ul className='footer-data-one'>

              <div className='footer-one'>
              <li>Audio Descrption</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
              </div>
            </ul>
          </div>
          <div className='footer-one'>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cooie preferences</li>
            </ul>
          </div>
          <div className='footer-one'>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate information</li>
            </ul>
          </div>
          <div className='footer-one'>
            <ul>
              <li>Media</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="Service_Code">
          <p>Service Code</p>
        </div>
        <div className="copy_write">&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
}

export default Footer
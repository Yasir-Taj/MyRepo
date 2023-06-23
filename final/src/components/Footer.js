import React from 'react'
import logo2 from '../assets/images/logo2.png';
import image from '../assets/images/image.png';
import wLoc from '../assets/images/wLoc.png';
import wMsg from '../assets/images/wMsg.png';
import wPhone from '../assets/images/wPhone.png';
import line2 from '../assets/images/line2.png';
import fb from '../assets/images/fb.png';
import insta from '../assets/images/insta.png';
import twitter from '../assets/images/twitter.png';


function Footer() {
  return (
    <div>
        <div className='footer-main'>
          <div className='row py-3 g-0 p-3'>
            <div className='col-1'></div>
            <div className='footerOne col-xl-3 col-lg-6 col-md-12'>
                <img  src={logo2} />
                <p className='text-light my-2'>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio Leo dui fermentum tristique urna tellus eget amet aliquam.</p>
                <div>
                    <img src={image} />
                    <img src={image} />
                    <img src={image} /><br />
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                </div>
            </div>
            <div className='col-1'></div>
            <div className='footerTwo col-xl col-lg-5 col-md-12 footer-list'>
                <h6 className='text-white mt-4 '><b>Quick Links</b></h6>
                <li className=''>Home</li>
                <li className=''>S.I.R.E</li>
                <li className=''>SIRE Features</li>
                <li className=''>Why SIRE?</li>
                <li className=''>SIRE Product</li>
                <li className=''>How it Works?</li>

            </div>
            <div className='footerThree col-xl col-lg-5 col-md-12 footer-list'>
            <h6 className='text-white mt-4 '><b>Useful Links</b></h6>
                <li className=''>Help Center</li>
                <li className=''>Privacy Policy</li>
                <li className=''>Terms & Condition</li>
                <li className=''>FAQ</li>
                <li className=''><b>Documents</b></li>
                <li className=''>Lindked Here</li>
            </div>
            <div className='footerFour col-xl col-lg-6 col-md-12 footer-list'>
            <h6 className='text-white mt-4 '><b>Contact Us</b></h6>
            <div className='row'>
                <div className='col-2'><img  src={wLoc} /></div>
                <div className='col-10 text-light'><p>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p></div>
                </div>
                <div className='row'>
                <div className='col-2'><img  src={wMsg} /></div>
                <div className='col-10 text-light'><p>email@email.com</p><p>support@email.com</p></div>
                </div>
                <div className='row'>
                <div className='col-2'><img  src={wPhone} /></div>
                <div className='col-10 text-light'><p>+29 98595 8998</p></div>
                </div>
              </div>
            <div className='col-1'></div>
              
        </div> 
        <div className='text-center'>
            <hr className='container text-light' />
            </div>
            <div className='container'>
                    <div className='d-flex justify-content-between'>
                    <p className='text-light'>All Rights Reserved</p>
                    <div className=''>
                    <img className='mx-2' src={fb} />
                    <img className='mx-2' src={insta} />
                    <img className='mx-2' src={twitter} />
                    </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer;
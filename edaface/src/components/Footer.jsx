import React from 'react'
import './CSS/Footer.css'
import logofoot from "./img/logo.png";

function Footer() {
  return (
     <section>
        <div className="container-fluid">
            <div className="row my-5">
                <div className="col-lg-2 col-md-2 col-sm-12 my-1">
                    <h5 className='foot-head mx-5' style={{color:'#2D699B'}}>Company</h5>
                    <ul className='company-foot mx-5'>
                        <li>Vision</li>
                        <li>Mission</li>
                        <li>Core Value</li>
                        <li>Contact us</li>
                        <li>Branding</li>
                        <li>Team</li>
                        <li>Carrers</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 my-1">
                 <h5 className='foot-head mx-5' style={{color:'#2D699B'}}>Products</h5>
                    <ul className='company-foot mx-5'>
                        <li>Eda Token</li>
                        <li>Digital Clinic</li>
                        <li>School of Cryptos</li>
                        <li>Contact us</li>
                        <li>LitePaper</li>
                        <li>WhitePaper</li>
                        <li>Welfare Donations</li>
                        <li>How to use Edaface</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-8 col-12 my-2">
                    <img src={logofoot} className='mx-5 my-4' alt="" style={{width:'40%'}} />
                    <h5 className='mx-5' style={{color:'#2D699B'}}>Subscribe Our Newletters</h5>
                    <div class="input-group mx-5    ">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control foot-control" placeholder='Enter email id' />
                        </div>
                        <button type="button" className="btn btn-subscribe">Subscribe</button>
                        </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 my-2">
                   <h5 className='foot-head mx-3' style={{color:'#2D699B'}}>Legal</h5>
                    <ul className='company-foot mx-3'>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Disclaimers</li>
                        <li>Listing T&C</li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                <h5 className='foot-head mx-3' style={{color:'#2D699B'}}>Communities</h5>
                    <ul className='company-foot mx-3'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Telegram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Footer
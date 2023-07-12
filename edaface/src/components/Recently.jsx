import React from 'react'
import bannergirl from "./img/bannerheade.png";
import message from "./img/message.jpg";
import live from "./img/liveauctions.png";
import { FaHeart, FaStar } from "react-icons/fa";
import "./CSS/Recently.css";


function Recently() {
  return (
    <section id='recently-bg'>
      <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="recently-head mt-5">
              <h1 className='text-center' style={{color:'#2D699B'}}><strong>Recently Added NFTs</strong></h1>
              </div>
            </div>
        </div>

        {/* card */}

        <div className="row mt-4">
        <div className="col-lg-3 col-md-6 col-12">
             <div class="card card-recently mt-2" >
               <img src={message} class="img-fluid" alt="..." className='recently-card-banner' />
              <div class="card-body">
                <h6 class="card-title"><span className='card-recently-head'>Women NFT #325</span>
                <span className='card-star-icons'>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar/>
                  </span></h6><br />
                <p class="card-text"><span className='highrecently'>Hight Bid</span> <span className='amtrecently'>15,000 BUSD</span></p>
              </div>
              
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img1 mx-2" style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img2 " style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                    <div className="recently-body">
                      <h6>@ robert03</h6>
                      <p><span>by lorem ipsum</span> 
                      <span className='recently-body-icons'><FaHeart/><i className='mx-1'>246</i></span></p>
                    </div>
                </div>
              
               </div>
             </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
             <div class="card card-recently mt-2" >
               <img src={message} class="img-fluid" alt="..." className='recently-card-banner' />
              <div class="card-body">
                <h6 class="card-title"><span className='card-recently-head'>Women NFT #325</span>
                <span className='card-star-icons'>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar/>
                  <FaStar/>
                  </span></h6><br />
                <p class="card-text"><span className='highrecently'>Hight Bid</span> <span className='amtrecently'>15,000 BUSD</span></p>
              </div>
              
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img1 mx-2" style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img2 " style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                    <div className="recently-body">
                      <h6>@ robert03</h6>
                      <p><span>by lorem ipsum</span> 
                      <span className='recently-body-icons'><FaHeart/><i className='mx-1'>246</i></span></p>
                    </div>
                </div>
              
               </div>
             </div>
            </div>


            <div className="col-lg-3 col-md-6 col-12">
             <div class="card card-recently mt-2" >
               <img src={message} class="img-fluid" alt="..." className='recently-card-banner' />
              <div class="card-body">
                <h6 class="card-title"><span className='card-recently-head'>Women NFT #325</span>
                <span className='card-star-icons'>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar/>
                  <FaStar/>
                  </span></h6><br />
                <p class="card-text"><span className='highrecently'>Hight Bid</span> <span className='amtrecently'>15,000 BUSD</span></p>
              </div>
              
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img1 mx-2" style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img2 " style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                    <div className="recently-body">
                      <h6>@ robert03</h6>
                      <p><span>by lorem ipsum</span> 
                      <span className='recently-body-icons'><FaHeart/><i className='mx-1'>246</i></span></p>
                    </div>
                </div>
              
               </div>
             </div>
            </div>


            <div className="col-lg-3 col-md-6 col-12">
             <div class="card card-recently mt-2" >
               <img src={message} class="img-fluid" alt="..." className='recently-card-banner' />
              <div class="card-body">
                <h6 class="card-title"><span className='card-recently-head'>Women NFT #325</span>
                <span className='card-star-icons'>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar/>
                  <FaStar/>
                  </span></h6><br />
                <p class="card-text"><span className='highrecently'>Hight Bid</span> <span className='amtrecently'>15,000 BUSD</span></p>
              </div>
              
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img1 mx-2" style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img2 " style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                    <div className="recently-body">
                      <h6>@ robert03</h6>
                      <p><span>by lorem ipsum</span> 
                      <span className='recently-body-icons'><FaHeart/><i className='mx-1'>246</i></span></p>
                    </div>
                </div>
              
               </div>
             </div>
            </div>

            {/* 2card */}


            <div className="col-lg-3 col-md-6 col-12">
             <div class="card card-recently mt-2" >
               <img src={bannergirl} class="img-fluid" alt="..." className='recently-card-banner' />
              <div class="card-body">
                <h6 class="card-title"><span className='card-recently-head'>Women NFT #325</span>
                <span className='card-star-icons'>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar/>
                  </span></h6><br />
                <p class="card-text"><span className='highrecently'>Hight Bid</span> <span className='amtrecently'>15,000 BUSD</span></p>
              </div>
              
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img1 mx-2" style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img2 " style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                    <div className="recently-body">
                      <h6>@ robert03</h6>
                      <p><span>by lorem ipsum</span> 
                      <span className='recently-body-icons'><FaHeart/><i className='mx-1'>246</i></span></p>
                    </div>
                </div>
              
               </div>
             </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
             <div class="card card-recently mt-2" >
               <img src={bannergirl} class="img-fluid" alt="..." className='recently-card-banner' />
              <div class="card-body">
                <h6 class="card-title"><span className='card-recently-head'>Women NFT #325</span>
                <span className='card-star-icons'>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  </span></h6><br />
                <p class="card-text"><span className='highrecently'>Hight Bid</span> <span className='amtrecently'>15,000 BUSD</span></p>
              </div>
              
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img1 mx-2" style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img2 " style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                    <div className="recently-body">
                      <h6>@ robert03</h6>
                      <p><span>by lorem ipsum</span> 
                      <span className='recently-body-icons'><FaHeart/><i className='mx-1'>246</i></span></p>
                    </div>
                </div>
              
               </div>
             </div>
            </div>


            <div className="col-lg-3 col-md-6 col-12">
             <div class="card card-recently mt-2" >
               <img src={bannergirl} class="img-fluid" alt="..." className='recently-card-banner' />
              <div class="card-body">
                <h6 class="card-title"><span className='card-recently-head'>Women NFT #325</span>
                <span className='card-star-icons'>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar/>
                  </span></h6><br />
                <p class="card-text"><span className='highrecently'>Hight Bid</span> <span className='amtrecently'>15,000 BUSD</span></p>
              </div>
              
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img1 mx-2" style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img2 " style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                    <div className="recently-body">
                      <h6>@ robert03</h6>
                      <p><span>by lorem ipsum</span> 
                      <span className='recently-body-icons'><FaHeart/><i className='mx-1'>246</i></span></p>
                    </div>
                </div>
              
               </div>
             </div>
            </div>


            <div className="col-lg-3 col-md-6 col-12">
             <div class="card card-recently mt-2" >
               <img src={bannergirl} class="img-fluid" alt="..." className='recently-card-banner' />
              <div class="card-body">
                <h6 class="card-title"><span className='card-recently-head'>Women NFT #325</span>
                <span className='card-star-icons'>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar style={{color:'#FDC206'}}/>
                  <FaStar/>
                  </span></h6><br />
                <p class="card-text"><span className='highrecently'>Hight Bid</span> <span className='amtrecently'>15,000 BUSD</span></p>
              </div>
              
              <div className="row">
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img1 mx-2" style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-1 col-md-1 col-1">
                  <img src={live}  className="rounded-circle recently-round-img2 " style={{width:'25px'}} alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-9">
                    <div className="recently-body">
                      <h6>@ robert03</h6>
                      <p><span>by lorem ipsum</span> 
                      <span className='recently-body-icons'><FaHeart/><i className='mx-1'>246</i></span></p>
                    </div>
                </div>
              
               </div>
             </div>
            </div>

        </div>
          
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
               <div className='text-center'>
                 <button className='btn btn-more'>Load More</button>
               </div>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Recently
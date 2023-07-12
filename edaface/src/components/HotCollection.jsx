import React from 'react'
import bannergirl from "./img/bannerheade.png";
import cat from "./img/hotcollectionthree.png";
import live from "./img/liveauctions.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




function HotCollection() {

    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <>
      <section id='hot-collection'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="text-center">
                        <h1 className='hot-title my-4' style={{color:'#2D699B'}}><strong>Hot Collection</strong></h1>
                    </div>
                </div>
            </div>


        
          <div className="row my-3">
            <div className="col-lg-12 md-12 col-12">
            <Carousel responsive={responsive}>
              <div className="col-lg-3 col-md-3 col-12">
                   <div className='card' style={{width:'17rem'}}>
                       <div className="card-body text-center">
                          <img className='product--image center' src={cat} alt=""  style={{width:'180px'}}/>
                          <h6><strong>Sport sneker</strong></h6>
                        </div>
                   </div>
               </div>

               <div className="col-lg-3 col-md-3 col-12">
                   <div className='card card-hot' style={{width:'17rem'}}>
                       <div className="card-body text-center">
                          <img className='product--image center' src={cat} alt=""  style={{width:'180px'}}/>
                          <h6><strong>Sport sneker</strong></h6>
                        </div>
                   </div>
               </div>

               <div className="col-lg-3 col-md-3 col-12">
                   <div className='card card-hot' style={{width:'17rem'}}>
                       <div className="card-body text-center">
                          <img className='product--image center' src={cat} alt=""  style={{width:'180px'}}/>
                          <h6><strong>Sport sneker</strong></h6>
                        </div>
                   </div>
               </div>

               <div className="col-lg-3 col-md-3 col-12">
                   <div className='card card-hot' style={{width:'17rem'}}>
                       <div className="card-body text-center">
                          <img className='product--image center' src={cat} alt=""  style={{width:'180px'}}/>
                          <h6><strong>Sport sneker</strong></h6>
                        </div>
                   </div>
               </div>

               <div className="col-lg-3 col-md-3 col-12">
                   <div className='card card-hot' style={{width:'17rem'}}>
                       <div className="card-body text-center">
                          <img className='product--image center' src={cat} alt=""  style={{width:'180px'}}/>
                          <h6><strong>Sport sneker</strong></h6>
                        </div>
                   </div>
               </div>

               <div className="col-lg-3 col-md-3 col-12">
                   <div className='card card-hot' style={{width:'17rem'}}>
                       <div className="card-body text-center">
                          <img className='product--image center' src={cat} alt=""  style={{width:'180px'}}/>
                          <h6><strong>Sport sneker</strong></h6>
                        </div>
                   </div>
               </div>
            </Carousel>
            </div>
          </div>
          

 


               
        </div>
      </section>
      
    </>
  )
}

export default HotCollection

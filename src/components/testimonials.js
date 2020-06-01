import React from "react"

import Carousel from 'nuka-carousel'
import Travis from "../images/travis.jpg"
import Matt from "../images/matt.jpg"
import Tekashi from "../images/6ix9ine.jpg"
import Future from "../images/future.jpg"
import Cardi from "../images/cardi.jpg"

const settings = {
  speed: 2000,
  autoplay: true,
  wrapAround: true,
  transitionMode: 'fade',
  autoplayInterval: 5000,
  enableKeyboardControls: true,
  renderCenterLeftControls: null,
  renderCenterRightControls: null,
}

const Testimonials  = () => (
  <div>
    <h3>See what your favorite artists are saying about SoundCloudFlare</h3>
    <Carousel {...settings} style={{ maxWidth: `60%` }}>
      <div className="each-fade" style={{ textAlign: `center`, paddingBottom: `3rem` }}>
        <div className="image-container">
          <img src={Travis} style={{ borderRadius: `3rem`, maxHeight: `460px` }} alt="Travis Scott: It's lit!"/>
          <h3 style={{ color: `#f50` }}>Travis Scott - It's lit!</h3>
        </div>
      </div>
      <div className="each-fade" style={{ textAlign: `center`, paddingBottom: `3rem` }}>
        <div className="image-container">
          <img src={Matt} style={{ borderRadius: `3rem`, maxHeight: `460px` }} alt="Matt Ox: I mean, yeaaah!"/>
          <h3 style={{ color: `#f50` }}>Matt Ox - I mean, yeaaah!</h3>
        </div>
      </div>
      <div className="each-fade" style={{ textAlign: `center`, paddingBottom: `3rem` }}>
        <div className="image-container">
          <img src={Tekashi} style={{ borderRadius: `3rem`, maxHeight: `460px` }} alt="Tekashi 6ix9ine: It's trash, but it's HOT trash"/>
          <h3 style={{ color: `#f50` }}>Tekashi 6ix9ine - It's trash, but it's HOT trash</h3>
        </div>
      </div>
      <div className="each-fade" style={{ textAlign: `center`, paddingBottom: `3rem` }}>
        <div className="image-container">
          <img src={Future} style={{ borderRadius: `3rem`, maxHeight: `460px` }} alt="Future - I'm in the loop with the voo"/>
          <h3 style={{ color: `#f50` }}>Future - I'm in the loop with the voo</h3>
        </div>
      </div>
      <div className="each-fade" style={{ textAlign: `center`, paddingBottom: `3rem` }}>
        <div className="image-container">
          <img src={Cardi} style={{ borderRadius: `3rem`, maxHeight: `460px` }} alt="Cardi B: Look at me, Cardi B, 1, 2, 3, heeheehee"/>
          <h3 style={{ color: `#f50` }}>Cardi B - Look at me, Cardi B, 1, 2, 3, heeheehee</h3>
        </div>
      </div>
    </Carousel>
  </div>
)

export default Testimonials

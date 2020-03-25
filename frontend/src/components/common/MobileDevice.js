import React from 'react'
import ProfOak from './../../assets/Professor_Oak.png'
const MobileDevice = () => (
  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="centerIt">
        <p className="title is-3 has-text-centered">For best results, please view this application on a larger screen</p>
        <figure style={{ display: 'flex', justifyContent: 'center'}}>
        <img alt="Professor Oak" src={ProfOak}/>
        </figure>
      </div>
    </div>
  </section>
)
export default MobileDevice
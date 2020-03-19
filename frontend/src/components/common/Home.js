import React from 'react'
import logo from './../../assets/Pokemon-Logo.png'
const Home = () => (
  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body frontPage centerIt2" id="animate-area">
      <div className="">
        <img src={logo} />
        <p className="title is-1 has-text-centered mainHeader">Unlimited</p>
      </div>
    </div>
  </section>
)
export default Home
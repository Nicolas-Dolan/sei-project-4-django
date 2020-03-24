import React from 'react'
import Wobbuffet from './../../assets/wobbuffet.png'
const ErrorPage = () => (
  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <p className="title is-1 has-text-centered">Oops something went wrong. Please try again.</p>
        <img alt="wobuffet" src={Wobbuffet}/>
      </div>
    </div>
  </section>
)
export default ErrorPage
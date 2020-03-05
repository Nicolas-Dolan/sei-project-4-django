import React from 'react'
import { Link } from 'react-router-dom'
// const PokemonCard = ({ stats: { name, id, sprites, height, stats, types }, species: { shape, flavor_text_entries } }) => (
  const PokemonCard = ({id, name, frontImg, backImg, hp, attack, defence, spAt, spDf, speed, type1, type2, height, shape, description}) => (
  <div key={id} className="column is-one-third-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/pokemons/${id}`}>
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{name}</h4>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={frontImg} alt={name} />
        </figure>
      </div>
      {/* <div className="card-content">
        <h4 className="title is-5">Stats</h4>
        <h5 className="title is-6">HP: {hp}</h5>
        <h5 className="title is-6">Attack: {attack}</h5>
        <h5 className="title is-6">Defence: {defence}</h5>
        <h5 className="title is-6">Sp. Attack: {spAt}</h5>
        <h5 className="title is-6">Sp. Defence: {spDf}</h5>
        <h5 className="title is-6">Speed: {speed}</h5>
      </div>
      <div className="card-content">
        <h4 className="title is-5">Type</h4>
        {type2 === 'none' ?
          <div>
            <h5 className="title is-6">Type 1: {type1}</h5>
            <h5 className="title is-6">Type 2: {type2}</h5>
          </div>
          :
          <h5 className="title is-6">Type: {type1}</h5>
        }
      </div>
      <div className="card-content">
        <h4 className="title is-5">Build</h4>
        <h5 className="title is-6">Height: {height}</h5>
        <h5 className="title is-6">Shape: {shape}</h5>
      </div> */}
      <div className="card-content">
        <h4 className="title is-5">Description</h4>
        <p>{description}</p>
      </div>
    </div>
    </Link>
  </div>
)
export default PokemonCard
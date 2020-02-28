import React from 'react'
// import { Link } from 'react-router-dom'
const PokemonCard = ({ stats: { name, id, sprites, height, stats, types }, species: { shape, flavor_text_entries } }) => (
  <div key={id} className="column is-one-third-desktop is-one-third-tablet is-half-mobile">
    {/* <Link to={`/pokemons/${_id}`}> */}
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{name}</h4>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={sprites.front_default} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <h4 className="title is-5">Stats</h4>
        <h5 className="title is-6">HP: {stats[5].base_stat}</h5>
        <h5 className="title is-6">Attack: {stats[4].base_stat}</h5>
        <h5 className="title is-6">Defence: {stats[3].base_stat}</h5>
        <h5 className="title is-6">Sp. Attack: {stats[2].base_stat}</h5>
        <h5 className="title is-6">Sp. Defence: {stats[1].base_stat}</h5>
        <h5 className="title is-6">Speed: {stats[0].base_stat}</h5>
      </div>
      <div className="card-content">
        <h4 className="title is-5">Type</h4>
        {types[1] ?
          <div>
            <h5 className="title is-6">Type 1: {types[1].type.name}</h5>
            <h5 className="title is-6">Type 2: {types[0].type.name}</h5>
          </div>
          :
          <h5 className="title is-6">Type: {types[0].type.name}</h5>
        }
      </div>
      <div className="card-content">
        <h4 className="title is-5">Build</h4>
        <h5 className="title is-6">Height: {height}</h5>
        <h5 className="title is-6">Shape: {shape.name}</h5>
      </div>
      <div className="card-content">
        <h4 className="title is-5">Description</h4>
        <p>{flavor_text_entries.map((entry, i) => {
          if (entry.language.name === 'en' && i < 4) {
            return entry.flavor_text 
          } 
        }
        )}</p>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={`http://www.pokestadium.com/sprites/xy/${name}.gif`} alt={name} style={{
            height: shape.name === 'squiggle' ? `${(height * 0.666) * 5}px` : `${height * 5}px`,
            objectFit: 'contain'
          }} />
        </figure>
      </div>

      <div className="card-image">
        <figure className="image">
          <img src={`http://www.pokestadium.com/sprites/black-white/animated/${name}.gif`} alt={name} style={{
            height: shape.name === 'squiggle' ? `${(height * 0.666) * 5}px` : `${height * 5}px`,
            objectFit: 'contain'
          }} />
        </figure>
      </div>
    </div>
    {/* </Link> */}
  </div>
)
export default PokemonCard
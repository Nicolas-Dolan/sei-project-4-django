import React from 'react'
// import { Link } from 'react-router-dom'
// const ViewCard = ({ stats: { name, id, sprites, height, stats, types }, species: { shape, flavor_text_entries } }) => (
  const ViewCard = ({id, name, frontImg}) => (
  <div key={id} className="viewCard">
      <div>
        <h4>{name}</h4>
      </div>
      <div>
        <figure>
          <img className="viewImage" src={frontImg} alt={name} />
        </figure>
      </div>
  </div>
)
export default ViewCard
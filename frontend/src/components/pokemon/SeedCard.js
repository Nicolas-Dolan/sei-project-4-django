import React from 'react'
// import { Link } from 'react-router-dom'
const SeedCard = ({ stats: { name, id, height, stats, types }, species: { shape, flavor_text_entries, egg_groups, generation, is_baby } }) => (

  <div key={id}>
    <p>

      {`{
        "model": "pokemons.pokemon",
        "pk": ${id},
        "fields": {
        "name": "${name}",
        "dexNum": ${id},
        "frontImg": "http://www.pokestadium.com/sprites/black-white/animated/${name}.gif",
        "backImg": "http://www.pokestadium.com/sprites/black-white/animated/back/${name}.gif",
        "hp": ${stats[5].base_stat},
        "attack": ${stats[4].base_stat},
        "defence": ${stats[3].base_stat},
        "spAt": ${stats[2].base_stat},
        "spDf": ${stats[1].base_stat},
        "speed": ${stats[0].base_stat},
        "type1": "${types[0].type.name}",
        "type2": "${types[1] ? types[1].type.name : null }",
        "shape": "${shape.name}",
        "height": ${height},
        "eggGroup": "${egg_groups[0].name}",
        "isBaby": ${is_baby},
        "generation": "${generation.name}",
        "owner": 1,
        "description": "${flavor_text_entries.reduce((acc, entry, i) => {
    if (entry.language.name === 'en' && i < 4) {
      acc = entry.flavor_text
    }
    return acc
  }
  )}"
}
      },`}
    </p>
  </div>
)
export default SeedCard


// sprites: {
//   frontxy: 'http://www.pokestadium.com/sprites/xy/${name}.gif',
//   backxy: 'http://www.pokestadium.com/sprites/xy/back/${name}.gif',
//   frontbw: 'http://www.pokestadium.com/sprites/black-white/${name}.gif',
//   backbw: 'http://www.pokestadium.com/sprites/black-white/back/${name}.gif',
//   frontbwAni: 'http://www.pokestadium.com/sprites/black-white/animated/${name}.gif',
//   backbwAni: 'http://www.pokestadium.com/sprites/black-white/animated/back/${name}.gif'
// }
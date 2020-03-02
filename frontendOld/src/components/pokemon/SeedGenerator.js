import React from 'react'
import axios from 'axios'
import SeedCard from './SeedCard'
class SeedGenerator extends React.Component {
  state = {
    pokemons: []
  }
  async componentDidMount() {
    let i = 1
    for (i = 150; i <= 150; i++) {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
        this.setState({ pokemons: [...this.state.pokemons, { stats: res.data, species: res2.data } ] })
      } catch (err) {
        console.log(err)
      }
    }
  }

  render() {
    console.log(this.state.pokemons)
    // const stats = this.state.pokemons[0]
    const seed = [{ name: 'charmander', id: '4', frontImg: './../assets/3/front4.gif', backImg: './../assets/3/back/4.gif', hp: 39, attack: 52, defence: 43, spAt: 60, spDf: 50, speed: 65, type1: 'fire', type2: 'null', shape: 'upright', height: 6, eggGroup: 'dragon', isBaby: false, generation: 'generation-i', description: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.' },

      { name: 'charmeleon', id: '5', frontImg: './../assets/3/front5.gif', backImg: './../assets/3/back/5.gif', hp: 58, attack: 64, defence: 58, spAt: 80, spDf: 65, speed: 80, type1: 'fire', type2: 'null', shape: 'upright', height: 11, eggGroup: 'dragon', isBaby: false, generation: 'generation-i', description: 'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.' },
    
      { name: 'charizard', id: '6', frontImg: './../assets/3/front6.gif', backImg: './../assets/3/back/6.gif', hp: 78, attack: 84, defence: 78, spAt: 109, spDf: 85, speed: 100, type1: 'flying', type2: 'fire', shape: 'upright', height: 17, eggGroup: 'dragon', isBaby: false, generation: 'generation-i', description: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.' }]
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.pokemons.map(pokemon => (
              <SeedCard key={pokemon.stats.id} {...pokemon} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}
export default SeedGenerator
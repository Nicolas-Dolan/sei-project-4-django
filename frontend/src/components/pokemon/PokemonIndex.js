import React from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'
class PokemonIndex extends React.Component {
  state = {
    pokemons: []
  }
  async componentDidMount() {
    // let i = 1
    // for (i = 150; i <= 150; i++) {
    //   try {
    //     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    //     const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
    //     // console.log('res=', res.data)
    //     // const r = res.data
    //     // const r2 = res2.data
    //     // const pokemon = {
    //     //   id: r.id,
    //     //   name: r.name,
    //     //   sprites: r.sprites,
    //     //   height: r.height,
    //     //   shape: r2.shape

    //     // }
    //     this.setState({ pokemons: [...this.state.pokemons, { stats: res.data, species: res2.data } ] })
    //   } catch (err) {
    //     console.log(err)
    //   }
    try {
      const res = await axios.get('api/pokemons/')
      console.log('res =', res.data)
      this.setState({ pokemons: res.data })
    } catch (err) {
      console.log(err)
    }
    
  }

  render() {
    console.log(this.state.pokemons)
    // const stats = this.state.pokemons[0]
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.pokemons.sort(function(a, b) {
    return a.dexNum - b.dexNum;
}).map(pokemon => (
              <PokemonCard key={pokemon.id} {...pokemon} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}
export default PokemonIndex
import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import PokemonCard from './../pokemon/PokemonCard'
class Profile extends React.Component {
  state = {
    createdPokemons: [],
    username: ''
  }

  async componentDidMount() {
    try {
      // const res = await axios.get('/api/profile')
      const userId = Auth.getPayload().sub
      const res = await axios.get('api/pokemons/')
      console.log('userId =', userId)
      console.log('res =', res.data)
      const createdPokemons = res.data.filter((pokemon) => pokemon.owner.id === userId)
      console.log('createdPokemons', createdPokemons)

      this.setState({ createdPokemons })
      // this.setState({ username: res.data.username })
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    console.log('Profile returned!')
    const { createdPokemons } = this.state
    return (
      <section className="section">
        {/* <h1>Profile of {this.state.username}</h1> */}
        <div className="container">
          <h1 className="title">Your Created Pokémon</h1>
          <div className="columns is-mobile is-multiline">
            {createdPokemons.length >= 1 ? this.state.createdPokemons.map(pokemon => (
              <PokemonCard key={pokemon._id} {...pokemon} />
            )) : <p style={{ margin: '0 14px'}}>You have not created any pokemon yet</p>}
            {/* {this.state.createdPokemons.map(pokemon => (
              <PokemonCard key={pokemon._id} {...pokemon} />
            ))} */}
          </div>
        </div>
      </section>
    )
  }
}
export default Profile
import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import PokemonForm from './PokemonForm'
class PokemonsEdit extends React.Component {
  state = {
    formData: {
      name: '',
      dexNum: '',
    frontImg: '',
    backImg: '',
    hp: '',
    attack: '',
    defence: '',
    spAt: '',
    spDf: '',
    speed: '',
    type1: '',
    type2: '',
    shape: '',
    height: '',
    eggGroup: '',
    isBaby: '',
    generation: '',
    description: ''
    }
  }
  async componentDidMount() {
    const pokemonId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/pokemons/${pokemonId}/`)
      this.setState({ formData: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  handleChange = ({ target: { name, value } }) => {
    const formData = { ...this.state.formData, [name]: value }
    this.setState({ formData })
  }
  handleSubmit = async e => {
    e.preventDefault()
    const pokemonId = this.props.match.params.id
    console.log('pokemonid =', pokemonId)
    try {
      const { formData } = await axios.put(`/api/pokemons/${pokemonId}/`, this.state.formData, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/pokemons/${pokemonId}`)
    } catch (err) {
      console.log(err.response.data.errors)
    }
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <PokemonForm
            formData={this.state.formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}
export default PokemonsEdit
import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import PokemonForm from './PokemonForm'
class PokemonNew extends React.Component {
  state = {
    data: {
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
  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }
  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/pokemons', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` } // * we include our users token in the request header to authenticate them
      })
      this.props.history.push(`/pokemons/${res.data._id}`) // * we re-direct our user to their newly created pokemon show page, we get the id of that new pokemon from the succesful POST request response
    } catch (err) {
      console.log(err.response)
    }
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <PokemonForm 
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}
export default PokemonNew
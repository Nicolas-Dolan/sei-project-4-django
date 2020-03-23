import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import PokemonForm from './PokemonForm'
class PokemonNew extends React.Component {
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
    isBaby: false,
    generation: '',
    description: ''
    }
  }
  // types = [
  //   { value: 'normal', label: 'Normal' },
  //   { value: 'water', label: 'Water' },
  //   { value: 'electric', label: 'Electric' },
  //   { value: 'grass', label: 'Grass' },
  //   { value: 'ice', label: 'Ice' },
  //   { value: 'fighting', label: 'Fighting' },
  //   { value: 'poison', label: 'Poison' },
  //   { value: 'ground', label: 'Ground' },
  //   { value: 'flying', label: 'Flying' },
  //   { value: 'psychic', label: 'Psychic' },
  //   { value: 'bug', label: 'Bug' },
  //   { value: 'rock', label: 'Rock' },
  //   { value: 'ghost', label: 'Ghost' },
  //   { value: 'dragon', label: 'Dragon' },
  //   { value: 'dark', label: 'Dark' },
  //   { value: 'steel', label: 'Steel' },
  //   { value: 'fairy', label: 'Fairy' },
  //   { value: 'null', label: 'None' }
  // ]



  // handleChange = ({ target: { name, value } }) => {
  //   const data = { ...this.state.data, [name]: value }
  //   this.setState({ data })
  // }

  handleChange = ({ target: { name, value, checked, type } }) => {
    const newValue = type === 'checkbox' ? checked : value
    const formData = { ...this.state.formData, [name]: newValue }
    this.setState({ formData })
  }
  // handleMultiChange = (selected) => {
  //   const breakfastOrder = selected ?  selected.map(item => item.value) : []
  //   const formData = { ...this.state.formData, breakfastOrder }
  //   this.setState({ formData })
  // } 

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/pokemons/', this.state.formData, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` } // * we include our users token in the request header to authenticate them
      })
      this.props.history.push(`/pokemons/${res.data.id}`)
    } catch (err) {
      console.log(err.response)
    }
  }
  render() {
    console.log(this.state.formData)
    return (
      <section className="section">
        <div className="container">
          <PokemonForm 
            formData={this.state.formData}
            handleChange={this.handleChange}
            handleMultiChange={this.handleMultiChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}
export default PokemonNew
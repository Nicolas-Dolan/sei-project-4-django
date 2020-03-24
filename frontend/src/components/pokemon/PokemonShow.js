import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
// import CommentForm from '../pokemons/CommentForm'
class PokemonShow extends React.Component {
  state = {
    pokemon: null
    // newComment: {
    //   text: ''
    // },
    // likesCount: ''
    // comments: []
  }
  async componentDidMount() {
    const pokemonId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/pokemons/${pokemonId}/`)
      this.setState({ pokemon: res.data })
    } catch (err) {
      console.log(err)
      this.props.history.push('/notfound')
    }
  }
  handleDelete = async () => {
    const pokemonId = this.props.match.params.id
    try {
      await axios.delete(`/api/pokemons/${pokemonId}/`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/pokemons')
    } catch (err) {
      console.log(err.response)
    }
  }
  isOwner = () => Auth.getPayload().sub === this.state.pokemon.owner.id

  // isOwnerC = (user) => Auth.getPayload().sub === user



  // handleChangeC = e => {
  //   const newComment = { ...this.state.newComment, text: e.target.value }
  //   this.setState({ newComment })
  //   // console.log('new comment =', this.state.newComment)
  // }
  // handleSubmitC = async e => {
  //   e.preventDefault()
  //   try {
  //     const res = await axios.post(`/api/pokemons/${this.state.pokemon.id}/comments`, this.state.newComment, {

  //       headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //     })
  //     this.componentDidMount()
  //     // this.state.history.push(`/api/pokemon/${res.data.id}`)
  //   } catch (err) {
  //     // console.log(err.response)
  //   }
  // }

  // handleDeleteC = async e => {
  //   const pokemonId = this.props.match.params.id
  //   console.log('target =', e.target.id)
  //   try {
  //     await axios.delete(`/api/pokemons/${pokemonId}/comments/${e.target.id}`, {
  //       headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //     })
  //     this.componentDidMount()

  //     // this.props.history.push(`/pokemons/${pokemonId}`)

  //   } catch (err) {
  //     console.log(err.response)
  //   }
  // }
  // handleSubmitL = async e => {
  //   // e.preventDefault()
  //   try {
  //     const res = await axios.get(`/api/pokemons/${this.state.pokemon.id}/like`, {

  //       headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //     })
  //     console.log('liked!', this.state.likesCount, this.state.pokemon.likes.length)
  //     this.componentDidMount()
  //   } catch (err) {
  //     // console.log(err.response)
  //   }
  // }

  render() {
    const { pokemon } = this.state
    if (!pokemon) return null
    console.log('pokemon=', pokemon)
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{pokemon.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={pokemon.frontImg} alt={pokemon.name} />
              </figure>
              <p>Created by: {pokemon.owner.username}</p>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">PokeDex Number</h4>
              <p>{pokemon.dexNum}</p>
              <hr />
              {/* <div className="card-content"> */}
        <h4 className="title is-5">Stats</h4>
        <h5 className="title is-6">HP: {pokemon.hp}</h5>
        <h5 className="title is-6">Attack: {pokemon.attack}</h5>
        <h5 className="title is-6">Defence: {pokemon.defence}</h5>
        <h5 className="title is-6">Sp. Attack: {pokemon.spAt}</h5>
        <h5 className="title is-6">Sp. Defence: {pokemon.spDf}</h5>
        <h5 className="title is-6">Speed: {pokemon.speed}</h5>
      {/* </div> */}
      <hr />
              <h4 className="title is-4">Description</h4>
              <hr />
              <p>{pokemon.description}</p>
              <hr />
              {/* <h4 className="title is-4">Comments</h4>
              <hr />
              {pokemon.comments.map(comment => <p key={comment.id} className="padding flex"><span><span className="bold">{comment.user.username}:</span> {comment.text}</span>{this.isOwnerC(comment.user.id) && <button className="button is-danger is-small" onClick={this.handleDeleteC} id={comment.id}>Delete Comment</button>}</p>)} */}
              {/* <hr /> */}
              {/* <div className="spacer"></div><div className="spacer"></div> */}
              {/* <div className="flex"></div> */}
              {/* <form onSubmit={this.handleSubmitC} className="flex">
                <input
                  className="input"
                  placeholder="Write Comments Here"
                  name="comment"
                  onChange={this.handleChangeC}
                  value={this.newComment}
                />
                <div className="spacer"></div>
                <button type="submit" className="button is-info">Submit Comment</button>
              </form>
              <hr /> */}
              
              {/* <div className="flex"><button onClick={this.handleSubmitL} className="button is-success">Like 👍</button><p><span className="bold">Like Count:</span> {pokemon.likes.length}</p></div> */}
              <hr />
              {this.isOwner() &&
                <>
                  <div className="flex">
                    <Link to={`/pokemons/${pokemon.id}/edit`} className="button is-warning">Edit Pokemon</Link>
                    {/* <hr /> */}
                    <button onClick={this.handleDelete} className="button is-danger">Delete Pokemon ☠️</button>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default PokemonShow
import React from 'react'
import ImageUpload from './../common/ImageUpload'
import Ball from './../../assets/shapes/ball.png'
import Legs from './../../assets/shapes/legs.png'
import Fish from './../../assets/shapes/fish.png'
import Armor from './../../assets/shapes/armor.png'
import Quadruped from './../../assets/shapes/quadruped.png'
import BugWings from './../../assets/shapes/bug-wings.png'
import Heads from './../../assets/shapes/heads.png'
import Tentacles from './../../assets/shapes/tentacles.png'
import Blob from './../../assets/shapes/blob.png'
import Humanoid from './../../assets/shapes/humanoid.png'
import Upright from './../../assets/shapes/upright.png'
import Wings from './../../assets/shapes/wings.png'
import Squiggle from './../../assets/shapes/squiggle.png'
import Arms from './../../assets/shapes/arms.png'
// import Select from 'react-select'
const PokemonForm = ({  formData, handleChange, handleSubmit, handleMultiChange, types }) => {
  console.log(formData)
  return (
    <div className="columns">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">
        <h2 className="title">Create a Pokémon</h2>
        <div className="field">
          <label className="label">Pokémon Name</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Pokédex Number</label>
          <div className="control">
            <input 
              className="input"
              name="dexNum"
              type="number"
              onChange={handleChange}
              value={formData.dexNum}
            />
          </div>
        </div>

        <div className="field">
              <label className="label">Front Portrait of Pokémon</label>
              <div className="control">
                <ImageUpload 
                  labelText="Front Image"
                  handleChange={handleChange}
                  fieldName="frontImg"
                  labelClassName="my-label-class"
                  inputClassName="my-input-class"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Back Portrait of Pokémon</label>
              <div className="control">
                <ImageUpload 
                  labelText="Back Image"
                  handleChange={handleChange}
                  fieldName="backImg"
                  labelClassName="my-label-class"
                  inputClassName="my-input-class"
                />
              </div>
            </div>

            <div className="field">
          <label className="label">HP</label>
          <div className="control">
            <input 
              className="input"
              name="hp"
              type="number"
              onChange={handleChange}
              value={formData.hp}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Attack</label>
          <div className="control">
            <input 
              className="input"
              name="attack"
              type="number"
              onChange={handleChange}
              value={formData.attack}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Defence</label>
          <div className="control">
            <input 
              className="input"
              name="defence"
              type="number"
              onChange={handleChange}
              value={formData.defence}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Special Attack</label>
          <div className="control">
            <input 
              className="input"
              name="spAt"
              type="number"
              onChange={handleChange}
              value={formData.spAt}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Special Defence</label>
          <div className="control">
            <input 
              className="input"
              name="spDf"
              type="number"
              onChange={handleChange}
              value={formData.spDf}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Speed</label>
          <div className="control">
            <input 
              className="input"
              name="speed"
              type="number"
              onChange={handleChange}
              value={formData.speed}
            />
          </div>
        </div>

        <div className="field">
              <label className="label">Type 1</label>
              <div className="select"  >
                <select name="type1" onChange={handleChange} value={formData.type1}>
                  <option selected="true" disabled="disabled" value="">Pick Type 1</option>
                  <option value="normal">Normal</option>
                  <option value="water">Water</option>
                  <option value="electric">Electric</option>
                  <option value="grass">Grass</option>
                  <option value="ice">Ice</option>
                  <option value="fighting">Fighting</option>
                  <option value="poison">Poison</option>
                  <option value="ground">Ground</option>
                  <option value="flying">Flying</option>
                  <option value="psychic">Psychic</option>
                  <option value="bug">Bug</option>
                  <option value="rock">Rock</option>
                  <option value="ghost">Ghost</option>
                  <option value="dragon">Dragon</option>
                  <option value="dark">Dark</option>
                  <option value="steel">Steel</option>
                  <option value="fairy">Fairy</option>
                  <option value="null">None</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label className="label">Type 2</label>
              <div className="select"  >
                <select name="type2" onChange={handleChange} value={formData.type2}>
                  <option selected="true" disabled="disabled" value="">Pick Type 2</option>
                  <option value="null">None</option>
                  <option value="normal">Normal</option>
                  <option value="water">Water</option>
                  <option value="electric">Electric</option>
                  <option value="grass">Grass</option>
                  <option value="ice">Ice</option>
                  <option value="fighting">Fighting</option>
                  <option value="poison">Poison</option>
                  <option value="ground">Ground</option>
                  <option value="flying">Flying</option>
                  <option value="psychic">Psychic</option>
                  <option value="bug">Bug</option>
                  <option value="rock">Rock</option>
                  <option value="ghost">Ghost</option>
                  <option value="dragon">Dragon</option>
                  <option value="dark">Dark</option>
                  <option value="steel">Steel</option>
                  <option value="fairy">Fairy</option>
                </select>
              </div>
            </div>

            {/* <div className="field">
              <label className="label">Shape</label>
              <div className="select"  >
                <select name="shape" id="shape" onChange={handleChange} value={formData.shape}>
                  <option disabled value="">Pick a Shape</option>
                  <option value="ball" style={{ backgroundColor: 'red' }}>Ball</option>
                  <option value="squiggle">Squiggle/Serpentine</option>
                  <option value="fish">Fish</option>
                  <option value="arms">Arms</option>
                  <option value="blob">Blob</option>
                  <option value="upright">Upright</option>
                  <option value="legs">Legs</option>
                  <option value="quadruped">Quadruped</option>
                  <option value="wings">Wings</option>
                  <option value="tentacles">Tentacles</option>
                  <option value="heads">Heads</option>
                  <option value="humanoid">Humanoid</option>
                  <option value="bug-wings">Bug Wings</option>
                  <option value="armor">Armour</option>
                </select>
              </div>
            </div> */}

            <div className="field">
              <label className="label">Shape</label>
              <div className="control">
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="ball"
                    onChange={handleChange}
                    checked={formData.shape === 'ball'}
                  /><img src={Ball}/>
                </label>
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="legs"
                    onChange={handleChange}
                    checked={formData.shape === 'legs'}
                  /><img src={Legs}/>
                </label>
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="fish"
                    onChange={handleChange}
                    checked={formData.shape === 'fish'}
                  /><img src={Fish}/>
                </label>
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="armor"
                    onChange={handleChange}
                    checked={formData.shape === 'armor'}
                  /><img src={Armor}/>
                </label>
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="quadruped"
                    onChange={handleChange}
                    checked={formData.shape === 'quadruped'}
                  /><img src={Quadruped}/>
                </label>
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="bug-wings"
                    onChange={handleChange}
                    checked={formData.shape === 'bug-wings'}
                  /><img src={BugWings}/>
                  </label>
                  <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="heads"
                    onChange={handleChange}
                    checked={formData.shape === 'heads'}
                  /><img src={Heads}/>
                  </label>
                  <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="tentacles"
                    onChange={handleChange}
                    checked={formData.shape === 'tentacles'}
                  /><img src={Tentacles}/>
                </label>
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="blob"
                    onChange={handleChange}
                    checked={formData.shape === 'blob'}
                  /><img src={Blob}/>
                </label>
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="humanoid"
                    onChange={handleChange}
                    checked={formData.shape === 'humanoid'}
                  /><img src={Humanoid}/>
                </label>
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="upright"
                    onChange={handleChange}
                    checked={formData.shape === 'upright'}
                  /><img src={Upright}/>
                  <label className="radio">
                  </label>
                  <input
                    name="shape" 
                    type="radio" 
                    value="wings"
                    onChange={handleChange}
                    checked={formData.shape === 'wings'}
                  /><img src={Wings}/>
                </label>
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="squiggle"
                    onChange={handleChange}
                    checked={formData.shape === 'squiggle'}
                  /><img src={Squiggle}/>
                </label>
                <label className="radio">
                  <input
                    name="shape" 
                    type="radio" 
                    value="arms"
                    onChange={handleChange}
                    checked={formData.shape === 'arms'}
                  /><img src={Arms}/>
                </label>
              </div>
            </div>

            <div className="field">
          <label className="label">Height</label>
          <div className="control">
            <input 
              className="input"
              name="height"
              type="number"
              onChange={handleChange}
              value={formData.height}
            />
          </div>
        </div>

            <div className="field">
              <label className="label">Egg Group 1</label>
              <div className="select"  >
                <select name="eggGroup" onChange={handleChange} value={formData.eggGroup}>
                  <option selected="true" disabled="disabled" value="">Pick Egg Group 1</option>
                  <option value="monster">Monster</option>
                  <option value="water1">Water 1 (Amphibious)</option>
                  <option value="water2">Water 2 (Fish-like)</option>
                  <option value="water3">Water 3 (Aquatic Invertebrates)</option>
                  <option value="bug">Bug</option>
                  <option value="flying">Flying</option>
                  <option value="ground">Field/Ground</option>
                  <option value="fairy">Fairy</option>
                  <option value="plant">Plant/Grass</option>
                  <option value="humanshape">Human-like</option>
                  <option value="mineral">Mineral</option>
                  <option value="indeterminate">Amorphous/Indeterminate</option>
                  <option value="dragon">Dragon</option>
                  <option value="ditto">Ditto</option>
                  <option value="no-eggs">Undiscovered/No Eggs</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label className="checkbox label">
                Is Baby?
                <input 
                  name="isBaby"
                  type="checkbox"
                  onChange={handleChange}
                  checked={formData.isBaby}
                />  
              </label>
            </div>

            <div className="field">
              <label className="label">Generation</label>
              <div className="select"  >
                <select name="generation" onChange={handleChange} value={formData.generation}>
                  <option selected="true" disabled="disabled" value="">Pick a Generation</option>
                  <option value="null">None</option>
                  <option value="generation-i">Gen 1</option>
                  <option value="generation-ii">Gen 2</option>
                  <option value="generation-ii">Gen 3</option>
                  <option value="generation-iv">Gen 4</option>
                  <option value="generation-v">Gen 5</option>
                  <option value="generation-vi">Gen 6</option>
                  <option value="generation-vii">Gen 7</option>
                  <option value="generation-viii">Gen 8</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label className="label">Pokédex Description</label>
              <div className="control">
                <textarea 
                  className="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>


        {/* <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Image URL"
              name="image"
              onChange={handleChange}
              value={formData.image}
            />
          </div>
        </div> */}
       
        <div className="field">
          <button type="submit" className="button is-fullwidth is-warning">Create Pokémon</button>
        </div>
      </form>
    </div>
  )
}
export default PokemonForm
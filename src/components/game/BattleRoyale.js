import React from 'react'
class BattleRoyale extends React.Component {
  state = {
    count: 0,
    game: 'test',
    gridBuilt: false,
    gameActive: false,
    width: 30,
    squareHeight: 14.4,
    grid: [],
    playerIndex: 53,
    staged: [{ name: 'bulbasaur', id: '1', frontImg: './../assets/1/front.gif', backImg: './../assets/1/back.gif', hp: 45, attack: 49, defence: 49, spAt: 65, spDf: 65, speed: 45, type1: 'poison', type2: 'grass', shape: 'quadruped', height: 7, eggGroup: 'plant', isBaby: false, generation: 'generation-i', description: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.' },

      { name: 'ivysaur', id: '2', frontImg: './../assets/2/front.gif', backImg: './../assets/2/back.gif', hp: 60, attack: 62, defence: 63, spAt: 80, spDf: 80, speed: 60, type1: 'poison', type2: 'grass', shape: 'quadruped', height: 10, eggGroup: 'plant', isBaby: false, generation: 'generation-i', description: 'There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.' },
    
      { name: 'venusaur', id: '3', frontImg: './../assets/3/front.gif', backImg: './../assets/3/back.gif', hp: 80, attack: 82, defence: 83, spAt: 100, spDf: 100, speed: 80, type1: 'poison', type2: 'grass', shape: 'quadruped', height: 20, eggGroup: 'plant', isBaby: false, generation: 'generation-i', description: 'There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.' },
    
      { name: 'charmander', id: '4', frontImg: './../assets/4/front.gif', backImg: './../assets/4/back.gif', hp: 39, attack: 52, defence: 43, spAt: 60, spDf: 50, speed: 65, type1: 'fire', type2: 'null', shape: 'upright', height: 6, eggGroup: 'dragon', isBaby: false, generation: 'generation-i', description: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.' },
    
      { name: 'charmeleon', id: '5', frontImg: './../assets/5/front.gif', backImg: './../assets/5/back.gif', hp: 58, attack: 64, defence: 58, spAt: 80, spDf: 65, speed: 80, type1: 'fire', type2: 'null', shape: 'upright', height: 11, eggGroup: 'dragon', isBaby: false, generation: 'generation-i', description: 'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.' },
    
      { name: 'charizard', id: '6', frontImg: './../assets/6/front.gif', backImg: './../assets/6/back.gif', hp: 78, attack: 84, defence: 78, spAt: 109, spDf: 85, speed: 100, type1: 'flying', type2: 'fire', shape: 'upright', height: 17, eggGroup: 'dragon', isBaby: false, generation: 'generation-i', description: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.' },
    
      { name: 'squirtle', id: '7', frontImg: './../assets/7/front.gif', backImg: './../assets/7/back.gif', hp: 44, attack: 48, defence: 65, spAt: 50, spDf: 64, speed: 43, type1: 'water', type2: 'null', shape: 'upright', height: 5, eggGroup: 'water1', isBaby: false, generation: 'generation-i', description: 'Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.' },
    
      { name: 'wartortle', id: '8', frontImg: './../assets/8/front.gif', backImg: './../assets/8/back.gif', hp: 59, attack: 63, defence: 80, spAt: 65, spDf: 80, speed: 58, type1: 'water', type2: 'null', shape: 'upright', height: 10, eggGroup: 'water1', isBaby: false, generation: 'generation-i', description: 'Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler.' },
    
      { name: 'blastoise', id: '9', frontImg: './../assets/9/front.gif', backImg: './../assets/9/back.gif', hp: 79, attack: 83, defence: 100, spAt: 85, spDf: 105, speed: 78, type1: 'water', type2: 'null', shape: 'upright', height: 16, eggGroup: 'water1', isBaby: false, generation: 'generation-i', description: 'Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.' }],
    deployed: {},
    testmon: { name: 'venusaur', _id: '111', id: '3', frontImg: './../assets/4/front.gif', backImg: './../assets/4/back.gif', hp: 80, attack: 82, defence: 83, spAt: 100, spDf: 100, speed: 80, type1: 'poison', type2: 'grass', shape: 'quadruped', height: 6, description: ',There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,' }

    // gameActive: false
  }
  async componentDidMount() {
    console.log('component did mount')
  } catch(err) {
    console.log(err)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
    const { deployed } = this.state

    Object.keys(deployed).map(_id => {
      const pokemon = deployed[_id]
      const { pokeTimerId } = pokemon
      clearInterval(pokeTimerId)
      this.pokeTimer = clearInterval(() => {
        this.setState({
          pokeTimerId
        })
      }) 

    })
    console.log('component will unmount')
  }


  buildGame = () => {
    const { grid, width, deployed, staged } = this.state
    let i = 0
    for (i = 0; i < (width * width); i++) {
      // grid.push(['grid-item'])
      grid.push([])
    }
    this.deployPokemon(grid, deployed, staged)
    console.log('deployed in buildgame =', deployed)
    // this.movePokemon(grid, deployed)
    this.setState({
      grid,
      deployed,
      staged,
      gridBuilt: true
    })
  }

  deployPokemon(grid, deployed, staged) {
    this.placePlayer(grid)
    this.portPokemon(staged, deployed)
    this.placePokemon(grid, deployed)
    staged = []
  }

  placePlayer(grid) {
    const { playerIndex, width } = this.state
    const { height, _id } = this.state.testmon
    const playerHeight = this.pokeHeight(height)
    const farIndex = playerIndex + ((playerHeight - 1) + ((playerHeight - 1) * width))
    grid[playerIndex].push('player')
    this.paintBlock(playerIndex, farIndex, 'pokemon', grid)
    this.paintBlock(playerIndex, farIndex, _id, grid)
  }

  portPokemon(staged, deployed){
    staged.map(item => {
      const _id = 'id_' + Math.floor(Math.random() * 100000000)
      deployed[_id] = item
      deployed[_id]._id = _id
      deployed[_id].pokeHeight = this.pokeHeight(deployed[_id].height)
      deployed[_id].pokeSpeed = this.pokeSpeed(deployed[_id].speed)
    })
  }

  placePokemon(grid, deployed){
    Object.keys(deployed).map(pokemon => {
      const { width } = this.state
      const pokeHeight = deployed[pokemon].pokeHeight
      let success = false
      let i = 0
      while (i < 10 && success === false) {
        i++
        const possibleIndex = Math.floor(Math.random() * (grid.length - 1))
        const farIndex = possibleIndex + ((pokeHeight - 1) + ((pokeHeight - 1) * width))
        const self = []
        this.pushBlock(possibleIndex, farIndex, self)

        if ((possibleIndex) % width < width - pokeHeight - 1) {
          // console.log('here 1')
          if ((possibleIndex + 1) + (width * (pokeHeight + 1)) < width * width){
            // console.log('here 2')
            // console.log(possibleIndex, pokeHeight, 'here')
            // if (safeZone.some(ok)) {
            if (this.checkMove(grid, self, 'pokemon', deployed[pokemon]._id)){
              grid[possibleIndex].push('pokeIndex')
              this.paintBlock(possibleIndex, farIndex, 'pokemon', grid)
              this.paintBlock(possibleIndex, farIndex, deployed[pokemon]._id, grid)
              deployed[pokemon].pokeIndex = possibleIndex
              deployed[pokemon].timerIdArray = []
              success = true
            }
          }
        } 
      }

      // the function will try up to ten times to place the pokemon
      // if it cannot place the pokemon after that it will put the pokemon in the benched object for later deployment
      // benched pokemon will attempt to deploy after a pokemon faints/is removed from the grid
      // might need to account for pokemon being deployed too close to bottom or right edge
    })
    // it might be worth porting the pokemon to a deployed object rather than an array, with each _id being the key for the sub object
    // this will place the pokemon from the deployed array, one by one mapping through to make sure there is enough room to deploy
    // it will need to push their pokeIndex, pokemon, and unique _id to the grid
    // it will also need to determine the correct size of the pokemon
  }

  activatePokemon = () => {
    const { gridBuilt, grid, deployed } = this.state
    this.setState({
      gameActive: true
    })
    
    Object.keys(deployed).map(_id => {
      const pokemon = deployed[_id]
      const { pokeTimerId } = pokemon
      // console.log(pokemon.name, 'is active')
      this.chooseDirection(grid, pokemon)
      //! below is the timer array function, I will move all of the above functions under setInterval once I'm confident they all work
      // if (gridBuilt) {
      //   this.pokeTimer = setInterval(() => {
      //     console.log(pokemon.name, 'is active')
      //     this.setState({
      //       pokeTimerId
      //     })
      //   }, 3000)  
      // }
    })
    ///////////////////////////


    // const counter = 0
    // this.chooseDirection(grid, pokeObject)
    // const timerId = setInterval(this.timer(pokeObject, counter), 1000)
      
    // const timerId = setInterval(this.chooseDirection(grid, pokeObject), pokemon.pokeSpeed)

    // deployed[pokemon].timerIdArray.push(timerId)
    // })

    //! below is the counter function: it's really just a proof of concept
    // if (gridBuilt) {
    //   this.myInterval = setInterval(() => {
    //     console.log(this.state.count)
    //     this.setState({
    //       count: this.state.count + 1
    //     })
    //   }, 1000)  
    // }
  }

  chooseDirection(grid, pokemon) {
    // console.log(pokemon.name, 'chose direction')
    this.chooseTarget(grid, pokemon)
  }

  chooseTarget(grid, pokemon){
    this.findTargets(grid, pokemon)
  }

  findTargets(grid, pokemon){
    const { pokeIndex, pokeHeight, _id, name } = pokemon
    const { width } = this.state
    // console.log('before grid limits')
    const limitsArray = this.findGridLimits(grid, pokeIndex, pokeHeight)
    // console.log('after grid limits')
    // console.log('limitsarray', pokemon.name, limitsArray)
    const farIndex = pokeIndex + ((pokeHeight - 1) + ((pokeHeight - 1) * width))

    const closeProximity = []
    let idArray = []
    // console.log('before proximityFinder')
    this.proximityFinder(2, limitsArray, pokeIndex, farIndex, width, closeProximity)
    // console.log('after proximityFinder')
    // console.log(pokemon.name, closeProximity)

    if (!this.checkMove(grid, closeProximity, 'pokemon', _id)){

      console.log(name, 'has other pokemon near')

      idArray = closeProximity.map((item) => {
        if (grid[item].includes('pokemon') && !grid[item].includes(_id)) {
          return grid[item].reduce((acc2, string) => {
            if (string.startsWith('id_')){
              acc2 = string
            }
            return acc2
          })
        } return 'none'
      })
      idArray = idArray.filter(item => item.startsWith('id_'))
    }
    console.log('after idArray function', idArray)
  }
  
  

  //! produces an array of the pokemon's proxmity, taking into account the edge of the grid
  proximityFinder(viewDistance, limits, pokeIndex, farIndex, width, proximity){
    const viewArray = this.pokeVision(viewDistance, limits)
    this.pushBlock(pokeIndex - viewArray[2] - (width * viewArray[0]), farIndex + viewArray[3] + (width * viewArray[1]), proximity)
  }

  //! this compares the view distance with the distance to the edge of the grid and returns whichever is shortest
  pokeVision(viewDistance, limits){
    const viewArray = limits.map(limit => {
      if (viewDistance < limit){
        return viewDistance
      } else return limit
    })
    return viewArray
  }

  //! this returns an array [top, bottom, left, right] of number of squares to the edge of the grid
  findGridLimits(grid, index, pokeHeight){
    const { width } = this.state
    const row = Math.ceil((index + 1) / width)
    const column = width - (((width * width) - (index + 1)) % width)
    // console.log('row', row, 'column', column)
    const leftCount = column - 1
    const rightCount = width - column - (pokeHeight - 1)
    const upCount = row - 1
    const downCount = width - row - (pokeHeight - 1)
    // let indexMove = index
    
    // while (indexMove % width < width - 1) {
    //   indexMove--
    //   leftCount++
    // }
    // indexMove = index
    // while (indexMove % width > 0) {
    //   indexMove++
    //   rightCount++
    // }
    // indexMove = index
    // while (grid[indexMove]) {
    //   indexMove -= width
    //   upCount++
    // } 
    // indexMove = index
    // while (grid[indexMove]) {
    //   indexMove += width
    //   downCount++
    // }
    // indexMove = index
  
    return [upCount, downCount, leftCount, rightCount]
  }
  
  

  pokeSpeed(speed){
    if (speed < 40) {
      return 500
    } else if (speed < 50) {
      return 480
    } else if (speed < 60) {
      return 460
    } else if (speed < 70) {
      return 440
    } else if (speed < 80) {
      return 420
    } else if (speed < 90) {
      return 400
    } else if (speed < 100) {
      return 380
    } else if (speed < 110) {
      return 360
    } else if (speed < 120) {
      return 340
    } else return 320
  }

  pokeHeight(height){
    if (height < 10) {
      return 3
    } else if (height < 15) {
      return 4
    } else if (height < 20) {
      return 5
    } else if (height < 25) {
      return 6
    } else if (height < 30) {
      return 7
    } else return 8
  }

  findImage(item){
    return this.findPokeProp(item, 'frontImg')

    // this will be used by the ternary operator in the render to identify the string beginning with 'id_' in the array 
    // and then use that to find the correct object staged in state and pull its image
    // the object will also be used to to determine the height of the image, which will be styled in the render directly
    // minimum size of pokeGrid will be 3x3
    // eventually it will also need to alternate the image depending on the pokemon's direction
    // I might need to push another className down alongside the index to indicate direction
  }

  // findImageHeight(item) {
  //   let id = ''
  //   if (item[0]) {
  //     id = item.reduce((acc, string) => {
  //       if (string.startsWith('id_')){
  //         acc = string
  //       }
  //       return acc
  //     })
  //   }
  //   return this.state.deployed[id].pokeHeight * 14.4
  // }

  //! this maps through a particular grid square, checks if it contains an id, 
  //! looks up that pokemon by its id in state, and then returns the specified property of that pokemon
  findPokeProp(item, prop) {
    let id = ''
    if (item[0]) {
      id = item.reduce((acc, string) => {
        if (string.startsWith('id_')){
          acc = string
        }
        return acc
      })
    }
    return this.state.deployed[id][prop]
  }

  pushRow(min, max, canvass) {
    let i = min
    for (i = min; i <= max; i++) {
      canvass.push(i)
    }
    return canvass
  }

  pushBlock(min, max, canvass) {
    const { width } = this.state
    const n = Math.ceil((max + 1) / width) - Math.ceil((min + 1) / width) + 1
    let i = 0
    for (i = 0; i < n; i++) {
      this.pushRow(min + width * (i), max - width * (n - (i + 1)), canvass)
    }
    return canvass
  }

  paintRow(min, max, classN, canvass) {
    let i = min
    for (i = min; i <= max; i++) {
      canvass[i].push(classN)
    }
    return canvass
  }

  paintBlock(min, max, classN, canvass) {
    const { width } = this.state
    const n = Math.ceil((max + 1) / width) - Math.ceil((min + 1) / width) + 1
    let i = 0
    for (i = 0; i < n; i++) {
      this.paintRow(min + width * (i), max - width * (n - (i + 1)), classN, canvass)
    }
    return canvass
  }

  eraseRow(min, max, classN, canvass) {
    let i = min
    for (i = min; i <= max; i++) {
      if (canvass[i].includes(classN)) {
        canvass[i].splice(canvass[i].indexOf(classN), 1)
      }
    }
    return canvass
  }

  eraseBlock(min, max, classN, canvass) {
    const { width } = this.state
    const n = Math.ceil((max + 1) / width) - Math.ceil((min + 1) / width) + 1
    let i = 0
    for (i = 0; i < n; i++) {
      this.eraseRow(min + width * (i), max - width * (n - (i + 1)), classN, canvass)
    }
    return canvass
  }

  findSelf(pokeIndex, pokeHeight, ownArray, left = [], right = [], top = [], bottom = []) {
    const { width } = this.state
    const farIndex = pokeIndex + ((pokeHeight - 1) + ((pokeHeight - 1) * width))
    this.pushBlock(pokeIndex, farIndex, ownArray)
    this.pushBlock(pokeIndex - 1, pokeIndex - 1 + (width * (pokeHeight - 1)), left)
    this.pushBlock(pokeIndex + pokeHeight, pokeIndex + pokeHeight + (width * (pokeHeight - 1)), right)
    this.pushBlock(pokeIndex - width, pokeIndex - width + pokeHeight - 1, top)
    this.pushBlock(pokeIndex + (width * pokeHeight), farIndex + width, bottom)
  }
  //! Note: this function has been altered without being tested, see version in pokemon unlimited if need to revert
  checkMove(grid, direction, classN, _id) {
    const arr = direction.map((item) => {
      return !grid[item].includes(classN) || grid[item].includes(_id)
    })
    const go = arr.reduce((acc, item) => {
      if (item === false) {
        acc = item
      }
      return acc
    }, true)
    // console.log(go)
    return go
  }

  handleKeyDown = (e) => {
    const { width, grid } = this.state
    const { height, _id } = this.state.testmon
    const playerHeight = this.pokeHeight(height)
    let { playerIndex } = this.state
    const oldIndex = playerIndex
    let farIndex = playerIndex + ((playerHeight - 1) + ((playerHeight - 1) * width))
    const oldFarIndex = farIndex
    const playerArray = []
    const leftArray = []
    const rightArray = []
    const topArray = []
    const bottomArray = []
    this.findSelf(playerIndex, playerHeight, playerArray, leftArray, rightArray, topArray, bottomArray)

    switch (e.keyCode) {
      case 39:
        if ((playerIndex + playerHeight - 1) % width < width - 1
          && this.checkMove(grid, rightArray, 'wall', _id)
          && this.checkMove(grid, rightArray, 'pokemon', _id)
        ) {
          playerIndex++
          farIndex++
        }
        break
      case 37:
        if (playerIndex % width > 0
          && this.checkMove(grid, leftArray, 'wall', _id)
          && this.checkMove(grid, leftArray, 'pokemon', _id)) {
          playerIndex--
          farIndex--
        }
        break
      case 40:
        if ((playerIndex + (width * (playerHeight - 1))) + width < width * width
          && this.checkMove(grid, bottomArray, 'wall', _id)
          && this.checkMove(grid, bottomArray, 'pokemon', _id)) {
          playerIndex += width
          farIndex += width
        }
        break
      case 38:
        if (playerIndex - width >= 0
          && this.checkMove(grid, topArray, 'wall', _id)
          && this.checkMove(grid, topArray, 'pokemon', _id)) {
          playerIndex -= width
          farIndex -= width
        }
        break
      default:
        console.log('player shouldnt move')
    }
    grid.map(square => {
      if (square.includes('player')) {
        square.splice(square.indexOf('player'), 1)
      }
    })
    this.eraseBlock(oldIndex, oldFarIndex, 'pokemon', grid)
    this.eraseBlock(oldIndex, oldFarIndex, _id, grid)
    grid[playerIndex].push('player')
    this.paintBlock(playerIndex, farIndex, 'pokemon', grid)
    this.paintBlock(playerIndex, farIndex, _id, grid)
    this.setState({
      grid,
      playerIndex
    })
    // console.log('Key code: ', e.keyCode)
    // console.log('const =', grid)
  }




  // movePlayerRight = () => {
  //   const { grid, playerIndex } = this.state
  //   const gridUpdate = [...grid]
  //   gridUpdate.map((item, index) => {
  //     if (index === (playerIndex + 1)) {
  //       return item.push('player')
  //     }
  //     if (index === playerIndex) {
  //       item.splice(item.indexOf('player'), 1)
  //     }
  //   })
  //   const playerIndexUpdate = playerIndex + 1
  //   console.log('const =', playerIndexUpdate, gridUpdate)
  //   this.setState({
  //     grid: [...gridUpdate],
  //     playerIndex: playerIndexUpdate
  //   })
  // }

  effectiveness = {
    fire: {
      fire: 0.5,
      grass: 2,
      water: 0.5,
      electric: 1
    },
    grass: {
      fire: 0.5,
      grass: 0.5,
      water: 2,
      electric: 1
    },
    water: {
      fire: 2,
      grass: 0.5,
      water: 0.5,
      electric: 0.5
    },
    electric: {
      fire: 1,
      grass: 1,
      water: 2,
      electric: 0.5
    }
  }

  render() {
    const { grid, playerIndex, testmon, gameActive, gridBuilt, width, squareHeight, count } = this.state
    // if (!grid[0]) return null
    // console.log(grid)
    // console.log(e.keyCode)
    // console.log('deployed =', this.state.deployed)
    return (
      < >
        <input type="text" id="one" onKeyDown={this.handleKeyDown} />
        {gridBuilt ? '' : <button onClick={this.buildGame}>Build Game</button>}
        {(gameActive || !gridBuilt) ? '' : <button onClick={this.activatePokemon}>Start Game</button>}
    <h1>Current count {count}</h1>
        {/* <button onClick={this.movePlayerRight}>movePlayerRight</button> */}
        <div className="wrapper">
          {grid[0] ?
            <div className="grid" style={{ height: `${width * squareHeight}px`, width: `${width * squareHeight}px` }}>
              {/* {grid.map((item, i) => <div key={i.toString()} className={item.reduce((a, c) => a + ' ' + c)}>{i.toString()}</div>)} */}
              {grid.map((item, i) => <div key={i.toString()} style={{ width: `${squareHeight}px`, height: `${squareHeight}px`, border: '0.5px dashed black' }} className={item[0] ? item.reduce((a, c) => a + ' ' + c) : ''}>{item.includes('player') ? <img className="playerImage" src={testmon.frontImg} /> : ''}{item.includes('pokeIndex') ? <img className="pokeImage" src={this.findImage(item)} style={{ height: `${this.findPokeProp(item, 'pokeHeight') * squareHeight}px` }}/> : ''}</div>)}
            </div>
            : null
          }

        </div>
      </>

    )
  }
}
export default BattleRoyale
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
// import ReactDOM from 'react-dom'
// // import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './styles/main.scss'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import ErrorPage from './components/common/Error'
import SecureRoute from './components/common/SecureRoute'
// import FilmIndex from './components/films/FilmIndex'
// import FilmShow from './components/films/FilmShow'
// import FilmNew from './components/films/FilmNew'
// import FilmEdit from './components/films/FilmEdit'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import PokemonIndex from './components/pokemon/PokemonIndex'
import SeedGenerator from './components/pokemon/SeedGenerator'
import BattleRoyale from './components/game/BattleRoyale'
import PokemonShow from './components/pokemon/PokemonShow'
import PokemonNew from './components/pokemon/PokemonNew'

// const App = () => (
//   <BrowserRouter>
//     <main>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <SecureRoute path="/films/:id/edit" component={FilmEdit} />
//         <SecureRoute path="/films/new" component={FilmNew} />
//         <Route path="/films/:id" component={FilmShow} />
//         <Route path="/films" component={FilmIndex} />
//         <Route path="/battleroyale" component={BattleRoyale} />
//         <Route path="/pokemons" component={PokemonIndex} />
//         <Route path="/seeds" component={SeedGenerator} />
//         <Route path="/register" component={Register} />
//         <Route path="/login" component={Login} />
//         <Route path="/*" component={ErrorPage} /> 
//       </Switch>
//     </main>
//   </BrowserRouter>
// )
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <SecureRoute path="/films/:id/edit" component={FilmEdit} />
        <SecureRoute path="/films/new" component={FilmNew} />
        <Route path="/films/:id" component={FilmShow} />
        <Route path="/films" component={FilmIndex} /> */}
        <SecureRoute path="/pokemons/new" component={PokemonNew} />
        <Route path="/battleroyale" component={BattleRoyale} />
        <Route path="/pokemons/:id" component={PokemonShow} />
        <Route path="/pokemons" component={PokemonIndex} />
        <Route path="/seeds" component={SeedGenerator} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={ErrorPage} /> 
      </Switch>
    </main>
  </BrowserRouter>
)



export default App;
import { useState, useEffect } from 'react'
import SearchParams from './components/searchParams'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Details from './detail'
import './App.css'

function App() {
  const [animal, setAnimal] = useState('dog')

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

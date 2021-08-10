import './App.css'
import Details from './details'
import Header from './components/header'
import { useState, useEffect } from 'react'
import ThemeContext from './context/theme-context'
import SearchParams from './components/searchParams'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const themeHook = useState('darkblue')
  return (
    <ThemeContext.Provider value={themeHook}>
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
    </ThemeContext.Provider>
  )
}

export default App

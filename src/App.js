import { useState, useEffect } from 'react'
import SearchParams from './components/searchParams'
import Header from './components/header'
import './App.css'

function App() {
  const [animal, setAnimal] = useState('dog')

  return (
    <div>
      <Header />
      <SearchParams />
    </div>
  )
}

export default App

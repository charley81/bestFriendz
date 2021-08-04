import { useState, useEffect } from 'react'
import SearchParams from './components/search-params'
import Header from './components/header'
import './App.css'

// const client = new petfinder.Client({
//   apiKey: 'RFFq9XTQ5PCLFzT2jHmCkZPrFwaRU9DESTRwMglscACMMA1aR7',
//   secret: 'NEJltTpb6PDOBZA2yqIz6fOcSKC8aLENWAuLZoiu',
// })

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

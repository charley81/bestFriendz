import { useState, useEffect } from 'react'
import { Client } from '@petfinder/petfinder-js'

const client = new Client({
  apiKey: process.env.REACT_APP_PETFINDER_API_KEY,
  secret: process.env.REACT_APP_PETFINDER_SECRET,
})

const localCache = {}

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([])
  const [status, setStatus] = useState('unloaded')

  useEffect(() => {
    if (!animal) {
      setBreedList([])
    } else if (localCache[animal]) {
      setBreedList(localCache[animal])
    } else {
      requestBreedList()
    }

    async function requestBreedList() {
      setBreedList([])
      setStatus('loading')
      const response = await client.animalData
        .breeds(animal)
        .then(resp => {
          const breedNames = resp.data.breeds.map(breed => breed.name)
          localCache[animal] = breedNames || []
          setBreedList(localCache[animal])
          setStatus('loaded')
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }, [animal])

  return [breedList, status]
}

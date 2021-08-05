/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { Client } from '@petfinder/petfinder-js'
import useBreedList from './useBreedList'
import Results from './results'

const client = new Client({
  apiKey: process.env.REACT_APP_PETFINDER_API_KEY,
  secret: process.env.REACT_APP_PETFINDER_SECRET,
})

export default function SearchParams() {
  const [location, setLocation] = useState('Boston, MA')
  // type of animal i.e dog, cat, rabbit etc.
  const [animal, setAnimal] = useState('')
  // breed of animal i.e dog => poodle
  const [breed, setBreed] = useState('')
  // array of pets returned from api request
  const [pets, setPets] = useState([])
  // a list of animal types to loop over and display animal select options i.e dog, cat, rabbit etc.
  const [animalTypesList, setAnimalTypesList] = useState([])
  // custom hook used to request list of breeds of each animal from api
  const [breeds] = useBreedList(animal)

  // request list of animals anytime the animal state changes
  useEffect(() => {
    requestPets()
  }, [])

  // request the animal types only on initial render to display in the select options
  useEffect(() => {
    requestAnimalTypes()
  }, [])

  // function to request the animal types on initial render to update animalTypeList state
  async function requestAnimalTypes() {
    const animalTypesResponse = await client.animalData.types().then(resp => {
      let typesList = []
      resp.data.types.forEach(type => {
        typesList.push(type.name)
      })
      setAnimalTypesList(typesList)
    })
  }

  // function to request list of specific animals when animal state changes
  async function requestPets() {
    const animalsResponse = await client.animal
      .search({
        type: animal,
        location: location,
      })
      .then(function (response) {
        setPets(response.data.animals)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <section
      className="section"
      css={css`
        padding: 1rem;

        form {
          max-width: 600px;
          margin: auto;
        }
        input,
        select {
          display: block;
          padding: 0.5rem;
          margin: 0.5rem 0 1rem;
          width: 100%;
          font-family: var(--font-family);
          color: var(--color-mid);
        }
      `}
    >
      <form
        onSubmit={e => {
          e.preventDefault()
          requestPets()
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option />
            {animalTypesList.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
          >
            <option />
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button className="btn btn-primary">Search</button>
      </form>
      <Results pets={pets} />
    </section>
  )
}

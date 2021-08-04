/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { Client } from '@petfinder/petfinder-js'

const ANIMALS = ['dog', 'cat', 'bird', 'rabbit', 'reptile']

export default function SearchParams() {
  const [location, setLocation] = useState('Springfield, MA')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [pets, setPets] = useState([])
  const breeds = []

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
      <form>
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
            {ANIMALS.map(animal => (
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
    </section>
  )
}

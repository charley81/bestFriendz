/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Pet from './pet'

export default function Results({ pets }) {
  return (
    <div
      css={css`
        margin-top: 5vh;

        h2 {
          text-align: center;
        }
      `}
    >
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        pets.map(pet => {
          const { primary } = pet.breeds
          const {
            id,
            species,
            name,
            photos,
            contact: {
              address: { city, state },
            },
          } = pet

          return (
            <Pet
              key={id}
              animalType={species}
              name={name}
              breed={primary}
              id={id}
              images={photos}
              location={`${city}, ${state}`}
            />
          )
        })
      )}
    </div>
  )
}

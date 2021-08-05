/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Pet({ name, animalType, breed, id, images, location }) {
  let hero = 'https://source.unsplash.com/1600x900/?animal'
  const image = images.map(img => img.full)[0]

  if (images.length) {
    hero = image
  }

  return (
    <a
      href={`/details/${id}`}
      css={css`
        display: block;
        border: 1px solid var(--color-mid);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        padding: 1rem;
        margin: 1rem 0;

        .pet-image {
          height: 200px;
          overflow: hidden;
        }

        img {
          position: center;
        }
      `}
    >
      <div className="pet-image">
        <img src={hero} alt={name} />
      </div>

      <h3>{name}</h3>
    </a>
  )
}

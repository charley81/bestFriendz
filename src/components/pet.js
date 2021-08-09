/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import comingSoon from '../images/coming-soon.jpg'

export default function Pet({ name, animalType, breed, id, images, location }) {
  let hero = comingSoon

  const image = images.map(img => img.full)[0]

  if (images.length) {
    hero = image
  }

  return (
    <Link
      to={`/details/${id}`}
      css={css`
        color: var(--color-dark);
        display: flex;
        align-items: center;
        box-shadow: var(--box-shadow);
        padding: 1rem;
        border-radius: var(--border-radius);

        .image-container {
          height: 150px;
          width: 150px;
          overflow: hidden;
          margin-right: 1rem;

          img {
            height: 150px;
            border-radius: 50%;
          }
        }

        .animal {
          color: var(--color-mid);
        }
      `}
    >
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <p className="animal">{`${animalType} - ${breed}`}</p>
        <p>{location}</p>
      </div>
    </Link>
  )
}

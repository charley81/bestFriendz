/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css, jsx } from '@emotion/react'

export default function SearchParams() {
  const [location, setLocation] = useState('Springfield, MA')

  return (
    <section
      className="section"
      css={css`
        padding: 1rem;

        form {
          max-width: 600px;
          margin: auto;
        }
        input {
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
            value="Springfield, Ma"
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <button className="btn btn-primary">Search</button>
      </form>
    </section>
  )
}

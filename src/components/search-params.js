/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

export default function SearchParams() {
  return (
    <section
      className="section"
      css={css`
        margin-top: 8vh;
        padding: 1rem;

        label,
        input {
          display: block;
          width: 100%;
        }
      `}
    >
      <form>
        <label htmlFor="location">
          Location
          <input type="text" value="Springfield, Ma" placeholder="Location" />
        </label>
        <button className="btn btn-primary">Search</button>
      </form>
    </section>
  )
}

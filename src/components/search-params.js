/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

export default function SearchParams() {
  return (
    <div css={css``}>
      <form>
        <label htmlFor="location">
          Location
          <input type="text" value="Springfield, Ma" placeholder="Location" />
        </label>
        <button className="btn">Search</button>
      </form>
    </div>
  )
}

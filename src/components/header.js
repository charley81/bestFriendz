/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

export default function Header() {
  return (
    <header
      css={css`
        background: var(--color-dark);
        color: var(--color-primary);
        padding: 1rem;

        span {
          color: var(--color-light);
        }
      `}
    >
      <div className="section">
        <h3>
          best<span>Frienz</span>{' '}
        </h3>
      </div>
    </header>
  )
}

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

export default function Header() {
  return (
    <header
      css={css`
        background: var(--color-dark);
        color: var(--color-primary);
        padding: 1rem;

        .header-content {
          max-width: 900px;
          margin: auto;
        }

        span {
          color: var(--color-light);
        }
      `}
    >
      <div className="header-content">
        <h3>
          best<span>Frienz</span>{' '}
        </h3>
      </div>
    </header>
  )
}

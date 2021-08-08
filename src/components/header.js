/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header
      css={css`
        background: var(--color-dark);
        padding: 1rem;

        a {
          color: var(--color-primary);
        }

        span {
          color: var(--color-light);
        }
      `}
    >
      <div className="section">
        <Link to="/">
          best<span>Frienz</span>{' '}
        </Link>
      </div>
    </header>
  )
}

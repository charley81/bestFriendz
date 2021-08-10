/** @jsxImportSource @emotion/react */
import { Component } from 'react'
import { css } from '@emotion/react'
import { withRouter } from 'react-router'
import { Client } from '@petfinder/petfinder-js'
import Carousel from './components/carousel'

const client = new Client({
  apiKey: process.env.REACT_APP_PETFINDER_API_KEY,
  secret: process.env.REACT_APP_PETFINDER_SECRET,
})

class Details extends Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    const response = await client.animal
      .show(this.props.match.params.id)
      .then(resp => {
        this.setState(
          Object.assign(
            {
              loading: false,
            },
            resp.data.animal
          )
        )
      })
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }

    const { name, species, description, url, photos } = this.state
    const { primary } = this.state.breeds
    const contact = this.state.contact
    const { address } = contact
    const { city, state } = address

    return (
      <div
        css={css`
          background: var(--color-secondary);
          margin: 1rem;
          padding: 1rem;
          border-radius: var(--border-radius);
          text-align: center;
          max-width: var(--max-width);

          @media (min-width: 900px) {
            margin: 1rem auto;
          }

          .info {
            margin: 2rem 0;
          }

          p {
            margin: 1rem 0;
          }

          .btn {
            &:hover {
              border: 1px solid var(--color-dark);
            }

            a {
              color: var(--color-dark);
              margin: 2rem 0;
            }
          }
        `}
      >
        <Carousel photos={photos} />
        <div className="info">
          <h1>{name}</h1>
          <h3>
            {species} - {primary}
          </h3>
          <h3>
            {city},{state}
          </h3>
        </div>

        <a href={url} className="btn btn-primary">
          ADOPT {name}
        </a>

        <p>{description}</p>
      </div>
    )
  }
}

export default withRouter(Details)

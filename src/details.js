/** @jsxImportSource @emotion/react */
import { Component } from 'react'
import { css } from '@emotion/react'
import { withRouter } from 'react-router'
import { Client } from '@petfinder/petfinder-js'
import Carousel from './components/carousel'
import Modal from './components/modal'

const client = new Client({
  apiKey: process.env.REACT_APP_PETFINDER_API_KEY,
  secret: process.env.REACT_APP_PETFINDER_SECRET,
})

class Details extends Component {
  state = {
    loading: true,
    showModal: false,
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

  toggleModal = () => this.setState({ showModal: !this.state.showModal })
  adopt = () =>
    (window.location =
      'https://www.petfinder.com/search/dogs-for-adoption/?distance=100')
  // adopt = () => (window.location = 'https://google.com')

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }

    const { name, species, description, url, photos, showModal } = this.state
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

        <button className="btn btn-primary" onClick={this.toggleModal}>
          ADOPT {name}
        </button>

        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name}</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    )
  }
}

export default withRouter(Details)

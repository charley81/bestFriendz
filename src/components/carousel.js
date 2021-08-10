/** @jsxImportSource @emotion/react */
import { Component } from 'react'
import defaultImg from '../images/coming-soon.jpg'
import { css } from '@emotion/react'

class Carousel extends Component {
  state = {
    active: 0,
  }

  static defaultProps = {
    images: defaultImg,
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index,
    })
  }

  render() {
    const { active } = this.state
    const images = this.props.photos.map(photo => {
      const imageArr = []
      if (photo.full) {
        imageArr.push(photo.full)
      }
      return imageArr
    })

    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height 400px;

          img {
            height: 400px;
          }

          .carousel-small {
            margin-top: 1rem;

            img {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              display: inline-block;
              cursor: pointer;
              border: 2px solid var(--color-dark);
              margin-right: 0.25rem;
            }
          }

          @media (min-width: 600px) {
            flex-direction: row;
            justify-content: space-between;

            img {
              max-width: 50%;
            }
          }
        `}
      >
        <img src={images[active]} alt="animal" />
        {
          <div className="carousel-small">
            {images.map((photo, index) => (
              // eslint-disable-next-line
              <img
                key={photo}
                src={photo}
                data-index={index}
                alt="animal thumbnail"
                onClick={this.handleIndexClick}
                className={index === active ? 'active' : ''}
              />
            ))}
          </div>
        }
      </div>
    )
  }
}

export default Carousel

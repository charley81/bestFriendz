import { Component } from 'react'
import defaultImg from '../images/coming-soon.jpg'

class Carousel extends Component {
  state = {
    active: 0,
  }

  static defaultProps = {
    images: defaultImg,
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
      <div>
        <img src={images[active]} alt="animal" />
        {
          <div className="carousel-small">
            {images.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                alt="animal thumbnail"
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

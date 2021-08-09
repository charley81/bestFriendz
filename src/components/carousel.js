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
    const { images } = this.defaultProps

    return (
      <div>
        <img src={images[active]} alt="animal" />
      </div>
    )
  }
}

export default Carousel

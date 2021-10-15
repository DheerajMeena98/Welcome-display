import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  clickSubscribe = () => {
    this.setState(prevState => {
      if (prevState.text === 'Subscribe') {
        return {text: 'Subscribed'}
      }
      return {text: 'Subscribe'}
    })
  }

  render() {
    const {text} = this.state

    return (
      <div className="welcome-container">
        <h1 className="welcome-heading"> Welcome </h1>
        <p className="welcome-greetings"> Thank you! Happy learning</p>
        <button
          className="subscribe-button"
          type="button"
          onClick={this.clickSubscribe}
        >
          {' '}
          {text}{' '}
        </button>
      </div>
    )
  }
}

export default Welcome

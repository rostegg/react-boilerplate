import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  constructor(props){
    super(props)
    this.state = {
      text: props.text
    }
  }

  render() {
    const text = this.state.text;
    return (
        <>
            <p>{text}</p>
        </>
    );
  }

}

export default App
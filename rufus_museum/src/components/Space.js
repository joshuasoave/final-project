import React from 'react';
import axios from 'axios';

class Space extends React.Component {
  state = {
    artifacts: {}
  }

  componentDidMount = () => {
    axios.get('/artifacts').then(
      (response) => {
        this.setState({
          artifacts:response.data
        })
      }
    )
  }
  render() {
    return (
      <div>
        <p>This is the Space exhibit.</p>
      </div>
    )
  }
}

export default Space;

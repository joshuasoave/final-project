import React from 'react';
import axios from 'axios';

class Egypt extends React.Component {
  state = {
    artifacts: [],
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
        <p>This is the Egypt page.</p>
      </div>
    )
  }
}

export default Egypt;

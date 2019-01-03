import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet_id: '45114'
    }
  }

  render() {
    return <Reviews pet_id={this.state.pet_id} />
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
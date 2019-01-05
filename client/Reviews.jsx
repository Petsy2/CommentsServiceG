import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Review from './Review.jsx';
import './styles/styles.css';
const baseURL = (document.URL === 'http://localhost:3003/' ? document.URL : 'http://ec2-18-191-41-4.us-east-2.compute.amazonaws.com/');

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet_id: '45114',
      reviews: []
    }

    this.getPetReviews = this.getPetReviews.bind(this);
    this.changePetId = this.changePetId.bind(this);
  }

  componentDidMount() {
    this.getPetReviews();
    this.div.addEventListener("changePetId", this.changePetId);
  }

  componentWillUnmount() {
    this.div.removeEventListener("changePetId", this.changePetId);
  }

  changePetId(e) {
    const pet_id = e.detail.pet_id;
    this.setState({ pet_id }, () => this.getPetReviews());
  }

  getPetReviews() {
    axios.get(baseURL + 'reviews/' + this.state.pet_id)
      .then(res => {
        this.setState({
          reviews: res.data
        })
      });
  }

  render() {
    return (
      <div className="review-area petIdSubscriber" ref={elem => this.div = elem} >
        {this.state.reviews.map(review => <Review review={review} key={Math.random()} />)}
      </div>
    )
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));
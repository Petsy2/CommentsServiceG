import React from 'react';
import axios from 'axios';
import Review from './Review.jsx';
const baseURL = process.env.REVIEWHOST || 'http://localhost:3003';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }

    this.getPetReviews = this.getPetReviews.bind(this);
  }

  componentDidMount() {
    this.getPetReviews();
  }

  getPetReviews() {
    axios.get(baseURL + '/reviews/' + this.props.pet_id)
      .then(res => {
        this.setState({
          reviews: res.data
        })
      });
  }

  render() {
    return (
      <div className="review-area">
        {this.state.reviews.map(review => <Review review={review} key={Math.random()} />)}
      </div>
    )
  }
}

export default Reviews;
import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {}
    }
  }

  render() {
    return (
      <div className="review">
        {this.props.review.review}
      </div>
    )
  }
}

export default Review;
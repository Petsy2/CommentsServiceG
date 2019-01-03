import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {}
    }
  }

  render() {
    const { username, review, review_created } = this.props.review;

    return (
      <div className="review-box">
        <div className="review-user">{username}</div>
        <div className="review-text">{review}</div>
        <div className="review-date">{review_created.slice(0, 10)}</div>
      </div>
    )
  }
}

export default Review;
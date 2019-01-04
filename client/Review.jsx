import React from 'react';
// import axios from 'axios';
import moment from 'moment';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'http://nothingburger.com'
    }
  }

  // componentDidMount() {
  //   this.getRandomPic();
  // }

  // getRandomPic() {
  //   axios.get('https://www.diverseui.com/images?count=1')
  //     .then(res => {
  //       // console.log(res.data)
  //       this.setState({
  //         imageUrl: res.data[0].url
  //       })
  //     });
  // }

  getIndexBelowMaxForKey(str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash;
      hash = Math.abs(hash);
    }
    return hash % max;
  };

  render() {
    const { username, review, stars, review_created, user_id } = this.props.review;

    return (
      <div className="review-box">
        <div className="review-profile-pic"><img src={`profilepics/${user_id - 1}.jpg`} /></div>
        <div className="review-text-area">
          <div className="review-user">{username}</div>
          <div className="review-date">{moment(review_created).fromNow()}</div>
          <div className="review-stars">{'★'.repeat(stars) + '☆'.repeat(5 - stars)}</div>
          <div className="review-text">{review}</div>
        </div>
      </div>
    )
  }
}

export default Review;
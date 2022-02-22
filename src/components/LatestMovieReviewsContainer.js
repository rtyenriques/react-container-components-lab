import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'NicQVEtGpA9AGajH3Hfai1EAp31ELGw4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default class LatestMovieReviewsContainer extends Component {
    
    state = {
        reviews: []
    }

    componentDidMount(){
        fetch(URL)
        .then((response) => response.json())
        .then((reviewData) => this.setState({reviews: reviewData.results}))
        // .then((reviewData)=> console.log(reviewData.results))
    }

    
    render() {
        return (
         
            <div className = "latest-movie-reviews">
                   {/* {console.log(this.state)} */}
                   {this.state.reviews.map((review, id) => (
                <MovieReviews key={id} review={review.display_title} />
                ))}
            </div>
        )
    }
}


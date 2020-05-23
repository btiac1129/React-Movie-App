import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src="https://api.time.com/wp-content/uploads/2014/11/hunger-games.jpg?w=800&quality=85" />
        );
    }
}

export default Movie;
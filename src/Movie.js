import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({ title, poster }) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    );
}

//same but, dumb component - because don't have 'state', so stateless.
function MoviePoster({ poster }) {
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}


// how check prop types of the component?
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;
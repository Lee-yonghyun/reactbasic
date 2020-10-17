import React from 'react';
import PropTypes from 'prop-types'
import './MoviePost.css'

const MoviePost = (props) => {
    return (
        <img className="poster" src={props.img} alt="movie image"/>
    );
};

MoviePost.propTypes = {
    img:PropTypes.string.isRequired
}

export default MoviePost;

import React from 'react';
import MoviePost from "./MoviePost";
import PropTypes from 'prop-types'


//Componet는 무조건 대문자 시작!
const Movie = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <MoviePost img={props.poster} />
            <h1>{props.date}</h1>
        </div>
    );
};

Movie.propTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    date:PropTypes.number.isRequired
}
// const Movie = ({title,poster}) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <img src={poster}/>
//         </div>
//     );
// };

export default Movie;

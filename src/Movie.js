import React from 'react';

//Componet는 무조건 대문자 시작!
const Movie = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.poster}/>
            <h1>{props.date}</h1>
        </div>
    );
};

// const Movie = ({title,poster}) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <img src={poster}/>
//         </div>
//     );
// };

export default Movie;

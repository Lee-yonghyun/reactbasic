//rsc 입력(단축키)
import React from 'react';
import Movie from "./Movie";

const movies = [
    {
        title: "Matrix",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
    },
    {
        title: "Full Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
    },
    {
        title: "yonghyun challenge",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
    },
    {
        title: "Star Wars",
        poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
    }
]

const App = () => {
  return (
      <div>
          {movies.map(movie => {
              return (
                  <Movie poster={movie.poster} title={movie.title} date={movies.length}/> //componet 사용하기
                  // props:poster, props:title , props:date 원래 구조는 이렇게 된다.

              ) //리액트 jsx에서는 return() 를 꼭 써줘야한다. complier가 해석할때 return 다음 ()이 없으면 ; 으로 끝나버림.
              //리액트는 바벨(컴파일러)을 사용해서 jsx -> javascript로 변형한다. return 다음 자동 ;을 추가해버림.(asi 시스템, 자동세미콜론)
          })}
          {/*리액트(jsx)에서 자바스크립트를 열려면(객체) -> { 중괄호 }를 사용한다.*/}
      </div>
  );
};

export default App;

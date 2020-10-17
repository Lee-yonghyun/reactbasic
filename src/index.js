import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from "./App2";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>,
  document.getElementById('root') // html파일에 있던 body에 App.js를 보여준다.
    //html로 구조를 짜고, App.js를 보여준다.
    //리액트는 component(App.js)를 재배치 시켜준다.
    //single page application이라는 말은 html 파일이 1개이고, 그 위에 component가 재배치되기 때문.
);


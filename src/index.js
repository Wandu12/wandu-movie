import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //
import App from './App'; //App 컴포넌트를 import하여 사용한 것
import * as serviceWorker from './serviceWorker';
import Potato from "./Potato"; //

ReactDOM.render(<App />, document.getElementById('root'));
    //리액트는 <App /> 과 같은 표기를 컴포넌트로 인식하고, 해당 컴포넌트가 반환하는 값을 화면에 그려줌
    //리액트는 컴포넌트와 함께 동작하며, 리액트 앱은 모두 컴포넌트로 구성됨
    //리액트는 최종적으로 컴포넌트를 단 한 개만 그린다


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

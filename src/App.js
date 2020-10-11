import React from 'react';
import logo from './logo.svg';
import './App.css';
import Potato from "./Potato";

function App() { 
    // App()함수 정의 > 해당 함수가 <div><img/><h1>The Movie App by Wandu</h1></div>를 반환.
    // => App 컴포넌트. App()함수가 반환한 HTML이 리액트 앱 화면에 그려지는render 것
    
    // 리액트가 아래 <Potato />를 해석해서 <h3>Potato</h3>로 만들어줌 
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
            <h1>The Movie App by Wandu</h1>
            <Potato />
    </div>
  );
}

export default App;

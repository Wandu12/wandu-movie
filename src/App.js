import React from 'react';
import logo from './logo.svg';
import './App.css';

function Food(props) { //App.js 파일에 Potato 컴포넌트 포함시킴
    console.log(props);
    return <h1>Potato</h1>;
}

function App() { 
    // App()함수 정의 > 해당 함수가 <div><img/><h1>The Movie App by Wandu</h1></div>를 반환.
    // => App 컴포넌트. App()함수가 반환한 HTML이 리액트 앱 화면에 그려지는render 것
    
    // 리액트가 아래 <Potato />를 해석해서 <h3>Potato</h3>로 만들어줌
    // props를 이용해 컴포넌트에 데이터를 보낼 수 있음(문자열인 경우가 아니면 {중괄호}로 값을 감싸야 함)
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
            <h1>The Movie App by Wandu</h1>
            <Food fav="Fried Chicken" something={true} data={['hello', 1, 2, 3, 4, true]}/>
    </div>
  );
}

export default App;

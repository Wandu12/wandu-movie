import React from 'react';
import logo from './logo.svg';
import './App.css';

function Food({fav}) { //App.js 파일에 Potato 컴포넌트 포함시킴
    //console.log(props);
    return <h1>Food: {fav}</h1>; //객체에 있는 값을 사용하기 위해 .(점 연산자) 사용 =>구조 분해 할당으로 사용시 . 안써도 ok
}

/*
function Food(props) {
    //console.log(props);
    return <h1>{ props.fav }</h1>; //객체에 있는 값을 사용하기 위해 .(점 연산자) 사용
}
*/

function App() { 
    // App()함수 정의 > 해당 함수가 <div><img/><h1>The Movie App by Wandu</h1></div>를 반환.
    // => App 컴포넌트. App()함수가 반환한 HTML이 리액트 앱 화면에 그려지는render 것
    
    // 리액트가 아래 <Potato />를 해석해서 <h3>Potato</h3>로 만들어줌
    // props를 이용해 컴포넌트에 데이터를 보낼 수 있음(문자열인 경우가 아니면 {중괄호}로 값을 감싸야 함)
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
            <h1>The Movie App by Wandu</h1>
            <Food fav="fried Chicken"/>
            <Food fav="pizza"/>
            <Food fav="curry"/>
            <Food fav="ramen"/>
    </div>
  );
}

export default App;

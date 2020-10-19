import React from 'react';
import logo from './logo.svg';
import './App.css';

function Food({name, picture}) { //App.js 파일에 Potato 컴포넌트 포함시킴
    //console.log(props);
    return (
        <div>
            <h2>Food: {name}</h2>
            <img src={picture} />
        </div>
    ); //객체에 있는 값을 사용하기 위해 .(점 연산자) 사용 =>구조 분해 할당으로 사용시 . 안써도 ok
}

const foodILike = [ //서버에서 데이터가 넘어왔다고 우선 가정함
    {
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
    },
    {
        name: 'Fried Chicken',
        image: 'https://images.unsplash.com/photo-1594254916028-742dedb72062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
        name: 'Pasta',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
];

function renderFood(dish) {
    return <Food name={dish.name} picture={dish.image} />;
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

    console.log(foodILike.map(renderFood));
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
            <h1>Wandu</h1>
        {foodILike.map(renderFood)}
    </div>
  );
}

export default App;

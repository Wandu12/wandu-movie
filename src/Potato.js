//컴포넌트는 JSX 문법을 사용해 만듦. JSX=JavaScript를 확장한 문법. HTML+자바스크립트 조합.
import React from 'react'; // 해당 코드를 입력해야 리액트가 JSX를 이해 가능

function Potato() {
    return <h3>Potato</h3>; //Potato()는 JSX를 반환함
}

export default Potato; //다른 파일에서 Potato 컴포넌트 사용 가능해짐
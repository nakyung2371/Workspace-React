import React from 'react';
import { useState } from 'react';

function Lab7() {

    //useState Hook: 상태값이 변경될 때 자동으로 랜더링
        //useState에서 사용하는 변수: String, number, boolean, Object, 배열, 객체, ...
    const [inputValue, setInputValue] = useState("");

    //input 박스의 값이 수정되면 호출하는 함수
    const onchangeHandler = (e) => {
        console.log("함수 호출 성공")
        setInputValue(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            <h1>Lab7 - JSX에서 입력폼을 만들고, 사용자가 입력한 값을 콘솔에 출력, 폼 박스에 출력</h1>
        
            <input value={inputValue} onChange={onchangeHandler}/>
        </div>
    );
}

export default Lab7;
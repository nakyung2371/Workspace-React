import React from 'react';

function Lab5() {

    const fruitsName = ['사과', '바나나', '오렌지'];
    const fruits = fruitsName.map((fruit, index) => {
        return <li key = {index}> {fruit} </li>
    });

    return (
        <div>
            <h1>Lab5 - map()를 사용해서 출력: 고유한 키를 생성하면서 출력</h1>
            <ul>
                {fruits}
            </ul>
        </div>
    );
}

export default Lab5;
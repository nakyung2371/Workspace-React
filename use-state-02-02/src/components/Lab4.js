import React from 'react';

function Lab4() {

    const fruitsName = ['사과', '바나나', '오렌지'];

    const fruits = fruitsName.map((fruits) => {
        return <li>{fruits}</li>
    });


    return (
        <div>
            <h1>Lab4 - map() 메소드를 사용해서 처리</h1>
            <ul>
                {fruits}
            </ul>
        </div>
    );
}

export default Lab4;
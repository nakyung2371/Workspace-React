import React from 'react';

function Lab6() {

    const fruitsName = ['사과', '바나나', '오렌지'];

    return (
        <div>
            <h1>Lab6 - jsx 블락에서 바로 맵으로 처리해서 출력</h1>
            <ul>
                {
                    fruitsName.map( (fruit, index) => {
                        return <li key={index}>{fruit}</li>
                })
                }
            </ul>
        </div>
    );
}

export default Lab6;
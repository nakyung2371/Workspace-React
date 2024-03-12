import React from 'react';

function Viewer({count, name, age}) {
    //Controller 컴포넌트에서 버튼을 클릭 시 값을 출력하는 컴포넌트

    return (
        <div>
            <h1>현재 카운터: </h1>
            <h1>{count}</h1>
            <hr/>

            <h3>{name}</h3>
            <h3>{age}</h3>
        </div>
    );
}

export default Viewer;
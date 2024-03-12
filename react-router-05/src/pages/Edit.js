import React from 'react';
import { useParams } from 'react-router-dom';

//http://localhost:3010/edit/id         

//useParams: URL Path로 넘어오는 변수의 값을 받는 Hook, react-route-dom v6 이상
function Edit(props) {

    //http://localhost:3010/edit/id
    const {id} = useParams();

    return (
        <div>
            <h1>수정 페이지(Edit) </h1>
            <p>오신 것을 환영합니다</p>

            <p>useParams로 넘어오는 변수값을 출력: </p>
            <h1>{id}</h1>
        </div>
    );
}

export default Edit;
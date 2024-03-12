import React from 'react';
import { useSearchParams } from 'react-router-dom';

//html://localhost:3010/edit2?id=200&mode=abc
//2. Query String: URL ?뒤에 변수=값&변수=값&변수=값, ...: usesearchParams

function Edit2(props) {

    //useSearchParams: ? 뒤의 넘어오는 모든 변수의 값을 처리 Hook

    const [searchParams, setSearchParams] = useSearchParams();

    //searchParams에 저장된 값을 끄집어 내어서 새로운 변수에 할당
    const id = searchParams.get("id");
    const mode = searchParams.get("mode");

    return (
        <div>
            <h1>Edit2: Query String을 처리하는 컴포넌트</h1>
            <p> 오신 것을 환영합니다.</p>

            <h1>Query String으로 넘어오는 id: {id}</h1>
            <h1>Query String으로 넘어오는 mode: {mode}</h1>

            <h1>Query String으로 넘어오는 전체 출력: {searchParams}</h1>
        </div>
    );
}

export default Edit2;
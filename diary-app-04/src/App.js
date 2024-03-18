import './App.css';
import React, {useRef} from "react";

//Routing 처리 라이브러리 import <- 요청 (/company) -> 컴포넌트를 연결
//Routes, Route <- Controller 역할: 요청 -> View(컴포넌트) 연결
//Link, useNavigate: 요청을 보내는 역할
import {Routes, Route, Link} from 'react-router-dom';
import Header from './include/Header';
import Footer from './include/Footer';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import ButtonTest from './test/ButtonTest';
import ImgTest from "./test/ImgTest";
import {useReducer, useEffect} from "react";

//mockData 가짜 데이터,
const mockData = [
    {
        id: 0,
        date: new Date().getTime() - 1,
        content: "mock1",
        emotionId: 1
    },
    {
        id: 1,
        date: new Date().getTime() - 2,
        content: "mock2",
        emotionId: 2
    },
    {
        id: 2,
        date: new Date().getTime() - 3,
        content: "mock3",
        emotionId: 3
    }

];

/* 상태 관리: context, 리덱스, 몹엑스, ...
    - context는 별도의 라이브러리 설치 없이 사용
    - SPA에서 컴포넌트 사이에 상태(변수의 값)을 전송,
    - 부모 -> 자식 props를 사용해야만 전송

    1. const DiaryStateContext = React.createContext()를 사용해서 context 생성
    2. Provider를 사용해서 컴포넌트를 묶어 줘야 함, state를 내려 보내줄 수 있다, 이벤트를 받아올 수 있다.
    3. useContext: 상태값을 가져와서 사용함.
    4. useReducer를 사용해서 context의 상태값을 변경함.
*/

//1. Comtext 선언: 상태값 처리, 이벤트 처리
export const DiaryStateContext = React.createContext();     //상태값을 전송하는 context, 상태값 내려보냄
export const DiaryDispatchContext = React.createContext();     //이벤트를 처리하는 context, 상태값 변경

//상태값을 변경하는 reducer 함수 정의
function reducer(state, action) {
    switch (action.type) {
        case "INIT" :
            return action.data;
        case "CREATE" :
            return [action.data, ...state];
        case "DELETE" :
            //state.filter(it)을 돌려서 action.targetId !== it.id를 새로운 배열에 담아서 리턴
            //id.id 필드의 자료형(Number), action.targetId 필드의 자료형 (String)
            return state.filter( (it) => String(it.id) !== String(action.targetId)
            );
        case "UPDATE" :
            return state.map((it) => String(it.id) === String(action.data.id) ?
                {...action.data} : it);
    }
}

function App() {

    //상태를 처리하는 변수
    const [data, dispatch] = useReducer(reducer, []);   //state도 쓰고 reducer도 사용 가능

    //useRef Hook을 사용해서 고유한 값을 생성 id 필드에 적용
    const idRef = useRef(3);

    //useEffect 컴포넌트가 로드될 때 1번만 실행
    //컴포넌트가 처음 로드될 때 dispatch를 호출해서 data에 mockData의 값을 할당
    useEffect( () => {
        dispatch({
            type: "INIT",
            data: mockData,
            });
        }
        ,[]
    );

    //하위 컴포넌트에서 요청하는 이벤트 처리: onCreate, onUpdate, onDelete
    //date: yyyy-mm-dd  -> TimeStamp 형식의 날짜 형식으로 변환
    const onCreate = (date, content, emotionId) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                date: new Date(date).getTime(),
                content: content,
                emotionId: emotionId,
            }
        });

    }
    const onUpdate = (id, date, emotionId, content) => {
        console.log(`업데이트 날짜: ${date}`)
        console.log(`포맷 완료된 날짜: ${new Date(date).getTime()}`)

        dispatch({
            type: "UPDATE",
            data: {
                id: id,
                date: new Date(date).getTime(),  //yyyy-mm-dd 형식을 TimeStemp 형식으로 변환
                emotionId: emotionId,
                content: content,
            }
        });
    }

    const onDelete = (targetId) => {
        // console.log(`하위에서 삭제 id: ${targetId}`)
        dispatch({
            type: 'DELETE',
            // targetId: targetId,      <- 풀어서 사용
            targetId,                   //축약 표현
        } );

    }
    return (
        //2. context provider를 사용해서 상태를 처리할 하위 컴포넌트를 그룹핑
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>

                <div className="App">
                    <h1>💥다이어리 APP💥</h1>

                    <Header/>
                    <hr/>
                    <p/><p/><p/><p/><p/><p/><p/>

                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/new' element={<New/>}></Route>
                        <Route path='/diary/:id' element={<Diary/>}></Route>
                        <Route path='/edit/:id' element={<Edit/>}></Route>

                        <Route path='/btntest' element={<ButtonTest/>}></Route>
                        <Route path='/imgtest' element={<ImgTest/>}></Route>
                    </Routes>

                    <hr/>
                    <p/><p/><p/><p/><p/><p/><p/>

                    <Footer/>

                </div>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );
}

export default App;

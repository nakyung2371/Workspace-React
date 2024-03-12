import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState } from 'react';

function App() {

  //React에서 상태값 전송은 부모 컴포넌트에서 자식 컴포넌트로 Props를 사용해서 전송됨
    //props 컴포넌트 사이의 값을 전달해줌, 부모에서 자식으로만 값을 내려보내줄 수 있음
    //React에서 대규모 사이트 개발 시, 컴포넌트 -> 컴포넌트 -> 컴포넌트 -> 컴포넌트
    //- 컴포넌트 사이의 상태값을 효율적으로 전송하기 위한 솔루션
    //    - 리덕스, 몹앱스, ContextAPI를 사용해서 쉽게 전송할 수 있음

    //부모 컴포넌트: 변경된 값을 자식에게 props를 사용해서 전송시킬 수 있다

    //useState: App 컴포넌트에서 생성, 변경된 상태의 값은 props를 사용해서 부모 -> 자식으로
    const [count, setCount] = useState(0);

    const name = '홍길동';
    const age = 20;

    //props를 통해서 상태값, 이벤트를 컴포넌트 사이로 이동

    //상태 값: 부모 -> 자식   , props
    //이벤트: 자식 -> 부모    , props   <- Controller 발생

    //props를 통해 호출된 함수를 코딩
    //기존의 count에서 value로 인풋받는 값을 더해서 setCount에 수정
    const handleSetCount = (value) => {
      setCount(count + value);
    }

  return (
    <div className="App">
      <h1>나의 심플한 카운트 앱</h1>
      <hr/>

      <section>
        <Viewer count = {count}     //상태값: 부모(App) -> 자식(Viewer)
            name = {name}
            age = {age}
        />
      </section>
      
      <section>
        <Controller
            //자식 -> 부모: 이벤트를 처리하는 props
            handleSetCount = {handleSetCount}     //handleSetCount 자식 컴포넌트의 이벤트를 받는 props
        />
      </section>

    </div>
  );
}

export default App;

import './App.css';
import UseReducer from './components/UseReducer';
import UseState from './components/UseState';

function App() {
  return (
    <div className="App">
      <h1>useState vs useReducer</h1>
      <hr/>
      <h4>useState로 구문 출력</h4>
      <UseState/>

      <h4>useReducer로 구문 출력</h4>
      <UseReducer/>
    </div>
  );
}

export default App;

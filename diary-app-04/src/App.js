import './App.css';

//Routing 처리 라이브러리 import <- 요청 (/company) -> 컴포넌트를 연결
//Routes, Route <- Controller 역할: 요청 -> View(컴포넌트) 연결
//Link, useNavigate: 요청을 보내는 역할
import { Routes, Route, Link } from 'react-router-dom';
import Header from './include/Header';
import Footer from './include/Footer';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>다이어리 APP</h1>

      <Header />
      <hr />
      <p /><p /><p /><p /><p /><p /><p />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new' element={<New />}></Route>
        <Route path='/diary/:id' element={<Diary />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes>

      <hr />
      <p /><p /><p /><p /><p /><p /><p />

      <Footer />

    </div>
  );
}

export default App;

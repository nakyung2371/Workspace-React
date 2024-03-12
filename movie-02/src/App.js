import logo from './logo.svg';
import './App.css';
import { dummy } from './Dummy';
import Movie from './components/Movie';

//dummy.results       <- 배열
//dummy.results.map   <- 배열의 각 방의 값을 순환하면서 끄집어 온다.
//item                <- 배열에서 각 방에 끄집어 낸 값, {}

function App() {
  return (
    <div>
      <h1>JSON 파일에서 영화 정보를 불러와서 출력</h1>
      <hr/>

      <div className='app-container'>
        {
          dummy.results.map( (item) => {
            return <Movie
                  title = {item.title}
                  poster_path = {item.poster_path}
                  vote_average = {item.vote_average}

            />

          })
        }
      </div>
      
      
    </div>
  );
}

export default App;

export default function App02() {

    //JavaScript
    const name = '오렌지1';

    //JSX 내부에서는 if문을 사용할 수 없다.
    //  상향 연산자를 사용해서 처리함
    return (
        //주석 작동
        <div
            //주석 처리됨
        >
            {/* 주석 */}
            <hr/>
            {
            name === '오렌지' ? <h1>오렌지입니다.</h1> : <h1>오렌지가 아닙니다.</h1>
         
         }


        </div>
    );
}
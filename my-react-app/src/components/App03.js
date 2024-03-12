function App03 () {
    //JavaScript 블락

    const name = '바나나';
    //JSX 블락에서는 삼항 연사자, &&, ||
    return (
        <div>
                { name === '바나나' ? (<h1> 바나나입니다. </h1>) : null }
        </div>
    );

}
export default App03;
import React, {useContext, useState} from 'react';
import Button from '../components/Button';
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import {DiaryStateContext} from "../App";


function Home(props) {

    //Context provider에서 내려보내주는 상태값을 불러옴: useContext
    //data <- mockData      [{}, {}, {}]
    const data = useContext(DiaryStateContext);

    //현재 년월을 출력하는 useState
    const [pivotDate, setPivotDate] = useState(new Date());

    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }

    return (
        <div>
            <Header
                title= {headerTitle}     //getMonth: 0부터 시작돼서 + 1
                leftChild={<Button text={" < "} type={"positive"}
                                   onClick={onDecreaseMonth} />}
                rightChild={<Button text={" > "} type={"negative"}
                                    onClick={onIncreaseMonth} />}
            />
            <DiaryList data={data}/>
            
        </div>
    );
}

export default Home;
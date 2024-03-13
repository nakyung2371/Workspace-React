import React from 'react';
import Button from "../components/Button";
import Header from "../components/Header";

function Diary(props) {
    return (
        <div>
            <Header title={"2024년 03월 13일 글 상세 내용"}
                    leftChild={<Button text={"< 뒤로가기"}
                                       type={"positive"} onClick={() => {console.log("뒤로가기 클릭됨")}}/>}
                    rightChild={<Button text={"수정하기"}
                                        type={"negative"} onClick={() => {console.log("수정가기 클릭됨")}}/>}
            />
        </div>
    );
}

export default Diary;
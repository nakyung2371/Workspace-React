import emotion1 from './img/emotion1.png'
import emotion2 from './img/emotion2.png'
import emotion3 from './img/emotion3.png'
import emotion4 from './img/emotion4.png'
import emotion5 from './img/emotion5.png'

/* 컴포넌트가 아니고 자주 사용하는 함수 정의 - 소문자로 시작
    - 정의해 놓은 외부에서 사용하려면 export가 되어 있어야함
    - export는 하나의 js 파일에 여러 개의 함수에서 설정
        import {함수} from '컴포넌트 경로'

    - export default는 하나만 설정
        import 함수 from '컴포넌트'
*/

//Image id값을 받아서 해당 image를 리턴하는 함수를 생성
//리액트에서 이미지를 사용하려면 해당 image를 import하여 사용
export const getEmotionImgById = (emotionId) => {
    //emotionId가 Number, String 있으므로 String 변환해서 담아서 처리
    const targetEmotionID = String(emotionId);

    switch (targetEmotionID) {
        case "1" :
            return emotion1;
        case "2" :
            return emotion2;
        case "3" :
            return emotion3;
        case "4" :
            return emotion4;
        case "5" :
            return emotion5;
        default :
            return null;
    }

}

//배열을 외부에서 가져와서 사용할 수 있도록 export
export const emotionList = [
    {
        id: 1,
        name: "완전 좋음",
        img: getEmotionImgById(1),
    },
    {
        id: 2,
        name: "좋음",
        img: getEmotionImgById(2),
    },    
    {
        id: 3,
        name: "보통",
        img: getEmotionImgById(3),
    },    
    {
        id: 4,
        name: "나쁨",
        img: getEmotionImgById(4),
    },    
    {
        id: 5,
        name: "완전 나쁨",
        img: getEmotionImgById(5),
    },

]
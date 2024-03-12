import { Fragment } from "react";
//export default로 내보낸 컴포넌트는 {} 블락을 쓰지 않고 import 가능
//export로 내보낸 컴포넌트는 { Fragment } 블락 내부에서 import

//Fragment로 감싸면 내부 태그를 그대로 출력
function Header() {

    return(
        <Fragment>
            <h1>세 번째 헤더입니다</h1>
            <h2>Fragment로 감싸서 내보냈습니다</h2>
        </Fragment>
    );
}

export default Header;
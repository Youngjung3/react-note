// 1. 클래스형 컴포넌트
// 2. 함수형 컴포넌트
// 컴포넌트란 태그를 묶어서 하나로 정의하는 기술
// eslint 확장프로그램 (es6 자바스크립트 문법교정)
import React, { Component } from "react";

class ImportComp1 extends Component{
    render(){
        return(
            // 최상위요소는 한개
            <>
            <h2>[이것은 클래스형 컴포넌트]</h2>
            <hr/>
            <div>박스</div>
            </>
        )
    }
}

export default ImportComp1;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// 리액트에서 화면을 그릴 수 있는 DOM 요소를 생성
// 자바스크립트 indexedDB.html에 있는 #root
const root = ReactDOM.createRoot(document.getElementById('root'));
// 리액트로 변신한 root한테 App 컴포넌트를 그려라

root.render(
  // 엄격한 문법검사
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

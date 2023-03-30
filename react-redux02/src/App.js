// 컴포넌트와 store 의 데이터를 Provider를 통해 컴포넌트에게 전달
import './App.css';
// store 임포트
// Provider 임포트
import {Provider} from 'react-redux';
import store from "./redux/store";
import Products from "./components/Products";
import Display from "./components/Display";
import Carts from "./components/Carts";


function App() {
  return (
    <Provider store={store}>
      <Products />
      <Display />
      <Carts />
    </Provider>
  );
}

export default App;

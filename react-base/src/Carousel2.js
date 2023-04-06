import { Carousel } from 'antd';
import "./Carousel1.css"
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const contentStyle = {
  margin: 0,
  height: '300px',
  color: '#fff',
  width:'400px',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}
const Carousel2 = () => {
  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };
  return (
    <div>
    <Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} >
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
      <div>
        <h3 style={contentStyle}>5</h3>
      </div>
      <div>
        <h3 style={contentStyle}>6</h3>
      </div>
      <div>
        <h3 style={contentStyle}>7</h3>
      </div>

    </Carousel>
    </div>
  );
};
export default Carousel2;
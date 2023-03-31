import { useState, useCallback, useEffect } from "react";

function Box({ createBoxStyle }) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    console.log("박스커짐");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div className="box" style={style}></div>;
}

const Cb2 = () => {
  const [size, setSize] = useState(178);
  const [dark, setDark] = useState(false);
  const createBoxStyle = useCallback(()=>{
        return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  },[size])
  
  return (
    <div style={{ background: dark ? "black" : "beige" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        ✨
      </button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
};
export default Cb2;

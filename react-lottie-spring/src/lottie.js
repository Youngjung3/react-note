import React from 'react'
import lottie from 'lottie-web'
import lottieAni from "./loop.json";
// import lottieAni from "./check.json";
import a1 from "./a1.json";
import bu from "./bu.json";

import logo from "./logo.svg";


const Lottie =()=>{
    const check= React.useRef();
    const a1= React.useRef();
    const bu= React.useRef();
    React.useEffect(()=>{
        lottie.loadAnimation(
            {
                // container:document.querySelector("#ani"),
                container:check.current,
                animationData:lottieAni,
                loop:true,
                autoplay:true,
            }
        )
        // lottie.loadAnimation(
        //     {
        //         container:a1.current,
        //         animationData:a1,
        //         loop:true,
        //         autoplay:true,
        //     }
        // )
        // lottie.loadAnimation(
        //     {
        //         container:bu.current,
        //         animationData:bu,
        //         loop:true,
        //         autoplay:true,
        //     }
        // )
    },[])
    return(
        <div>
            <div ref={check} style={{width:100, position:"absolute"}}>
                <img src={logo} alt="" style={{width:100, position:"absolute"}}/>
                Lottie</div>
            {/* <div ref={a1} style={{width:200, position:"absolute"}}>Lottie</div> */}
            {/* <div ref={bu} style={{width:200, position:"absolute"}}>Lottie</div> */}
        </div>
    )
}
export default Lottie;
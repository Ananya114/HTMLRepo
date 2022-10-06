import React, {useState} from 'react';

function Hooks(){
    const [details, setDetails]=useState({counter:0,name:""});
    function increaseCounter(){
        setDetails((prev)=>({
            ...prev,
            counter:prev.counter+1
        }));
    }
    function decreaseCounter(){
        setDetails((prev)=>({
            ...prev,
            counter:prev.counter-1
        }));
    }
    // const [name, setName]=useState("");
    // const [counter, setcounter]=useState(0);
    // function increaseCounter(){
    //     setcounter(counter+1);
    // }
    // function decreaseCounter(){
    //     setcounter(counter-1);
    // }

    return(
        <>
        <h1>Counter: {details.counter}</h1>
        <h1>Clicked {details.counter} times</h1>
        <input type="button" value="Increase" onClick={increaseCounter}></input>
        <input type="button" value="Decrease" onClick={decreaseCounter}></input>

        {/* <input type="text" placeholder='Enter name' onChange={e=>setName(e.target.value)}></input>
        <h2>{name} has clicked {counter} times!</h2>
        <input type="button" value="Increase" onClick={increaseCounter}></input>
        <input type="button" value="Decrease" onClick={decreaseCounter}></input> */}
        </>
    )
}

export default Hooks;
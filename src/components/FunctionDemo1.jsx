import React from 'react'

export const FunctionDemo1 = () => {

    const test =()=>{
        alert("test function called.....")
    }
    const test2 =(x)=>{
        alert("value of x"+x)
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FunctionDemo</h1>
        <button onClick={test}>CLICK</button>
        {/* <button onClick={test2(2)}>CLICK</button> */}
        <button onClick={()=>{test2(100)}}>CLICK 2</button>

    </div>
  )
}

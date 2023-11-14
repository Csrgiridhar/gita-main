import React,{useState,useEffect} from 'react'

const Hookclass = () => {
  const [count,setCount]=useState(0);
  const [count1,setCount1]=useState(7);
  const [show,setShowText]=useState(true)
  
  // console.log("clicked count:"+count)

   useEffect(()=>console.log("clicked"))

  const increment=()=>{setCount(count+1) }

  const decrement=()=>{setCount1(count1-1)}
  const showTexts=()=>{setShowText(!show)}

  return (
    <div>
      <h1>after the click:{count}</h1>
      <h1>after the click:{count1}</h1>
      <h1>after the click:{show && <p>successful</p>}</h1>
    
      <button onClick={increment}>increment</button><br />
      <button onClick={decrement}>decrement</button><br />
      <button onClick={showTexts}>Text</button>

            


    </div>
  )
}

export default Hookclass


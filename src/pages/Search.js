import React,{ useState} from 'react'

const Search = () => {
    const [input,setInput]=useState("")
    const inputVariable=(event)=>{
        setInput(event.target.value)
    }
    console.log({input})

  return (
    <div>
      <input type='text' placeholder='search here...' value={input } onChange={inputVariable}/>
      <h1>typed value:{input}</h1>
      
    </div>
  )
}

export default Search

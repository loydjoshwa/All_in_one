import React, { useState } from 'react'

const Child = () => {
  const [color,setColor]=useState("")
 
  const handleChange = (e)=>{
     setColor(e.target.value)
    
  }

  return (
    <div>
    <>
     <input type="text" onChange={handleChange} />
     <br />
    <div style={{width:"200px",height:"200px" , backgroundColor:color , border:"2px solid black"}}>
      
    </div>
    </>
    </div>
  )
}

export default Child

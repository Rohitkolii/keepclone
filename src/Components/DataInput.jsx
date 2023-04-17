import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

const DataInput = ({GetDATA}) => {

  const [value, setvalue] = useState('')
  
  
  const AddNotes = (e) => {
    e.preventDefault();
    if(value !== ''){
      const State = {
        title:value,
      }
      setvalue('')
      GetDATA(State)
    }
  }

  return (
    <div className='DataInput'>
        <div className='DataInput-inner'>
            <textarea value={value} placeholder='Take a note..' onChange={(e)=> setvalue(e.target.value)} className='textbox'>

            </textarea>
            <button 
              onClick={(e)=> AddNotes(e)} 
              className='submitbtn'
              ><AiOutlinePlus /></button>
            
        </div>
    </div>
  )
}

export default DataInput
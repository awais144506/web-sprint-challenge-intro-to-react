import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [toggle,setToggle] = useState(false)

  const handleClick =()=>{
    setToggle(!toggle)
  }
  const { name ,homeworld} = props
  return (
    <div className='character-card' onClick={handleClick}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name' >{name}</h3>
      {
        toggle ? <p>Planet: <span className='character-planet'>{homeworld}</span></p>:""
      
      }
    </div>
  )
}

export default Character

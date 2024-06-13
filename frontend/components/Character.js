import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const { name ,homeworld} = props
  return (
    <div className='character-card'>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='chracter-name' >{name}</h3>
      <p>Planet: <span className='character-planet'>{homeworld}</span></p>
    </div>
  )
}

export default Character

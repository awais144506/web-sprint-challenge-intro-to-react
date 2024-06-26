import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])
  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
    axios.get(urlPeople)
      .then(res => {
        setPeople(res.data)
      }).catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get(urlPlanets)
      .then(res => {
        setPlanets(res.data)
      }).catch(err => console.log(err))
  }, [])

  const homeworld= (id)=>{
   
    const match = planets.find((item) => item.id === id);
    return match ? match.name : 'Not Found';
  }
 
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
     
        {/* ❗ Map over the data in state, rendering a Character at each iteration */
          people.map(p => {
           
            return <Character name={p.name} key={p.id} homeworld = {homeworld(p.homeworld)}/>
          })
        }
    

    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App

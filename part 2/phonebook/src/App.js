import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({filterFunction}) => {
  return (
    <p>
      filter shown with <input onChange={(event) => filterFunction(event)}/>
    </p>
  )
}

const PersonForm = ({handleNameChange, handlePhoneChange, handleClick}) => {

  return (
    <form>
      <div>
        name: <input type="text" id="name" onChange={(event)=>handleNameChange(event)}/>
      </div>
      <div>
        number: <input type="text" id="number" onChange={(event)=>handlePhoneChange(event)}/>
      </div>
      <div>
        <button type="submit" onClick={(event)=>handleClick(event)}>add</button>
      </div>
    </form>
  )
}

const Persons = ({persons, setPersons, filterName}) => {
  return persons.filter((person)=>person.name.toLowerCase().includes(filterName.toLowerCase())).map((person)=>{
    return (
      <p key={person.id}>
        {person.name} {person.number}
      </p>
    )
  })
}

const App = () => {
  const [persons, setPersons] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => setPersons(response.data))
  })

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setFilterName] =useState('')

  function handleClick(event) {
    event.preventDefault();

    const nameObject = {
      name: newName,
      phone: newPhone
    }

    if (persons.filter(person=>person.name===newName).length>0){
      window.alert(`${newName} is already added to phonebook`)
    }

    else{
      setNewName(persons.push(nameObject))
       setNewName("")
    }
  }

  function handleNameChange(event){
    setNewName(event.target.value)
  }

  function handlePhoneChange(event){
    setNewPhone(event.target.value)
  }

  function filterFunction(event){
    setFilterName(event.target.value)
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterFunction={filterFunction}/>
      <br></br>
      <h2>add a new</h2>
      <PersonForm handleClick={handleClick} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filterName={filterName}/>
    </div>
  )
}

export default App
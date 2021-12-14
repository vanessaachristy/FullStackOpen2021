import React, { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log("button clicked", event.target)
    const nameObject = {
      name: newName,
      phone: newPhone
    }
    
    if (persons.map(person=>JSON.stringify(nameObject)===JSON.stringify(person))){
      console.log(persons)
      window.alert(`${newName} is already added to phonebook`)
    }

    else{
      setNewName(persons.push(nameObject))
       setNewName("")
    }

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
          <div>name:<input placeholder="name" value={newName} onChange={handleNameChange}/></div>
          <div>number:<input placeholder="number" value={newPhone} onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{
      persons.map(person=>
        <li>
          {person.name} {person.phone}
        </li>
      )}
        </ul>
    </div>
  )
}

export default App
import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


    
    function filterFunction(e){
     setFilters({type: e.target.value});
    }

  const API_PETS = `http://localhost:3001/pets`;

  const API_PETS_SPECIFIC = `http://localhost:3001/pets?type=${filters.type}`

 
  const displaySelect = async () =>{
    if(filters.type === "all"){
    const response = await fetch(API_PETS)
    const data = await response.json()
    setPets(data)
    }
    else 
    {
    const response = await fetch(API_PETS_SPECIFIC)
    const data = await response.json()
    setPets(data)
    }
  }
    
  function onAdoptPet(id) {
    let adoptedPet = [...pets];
    adoptedPet.find((pet) => pet.id === id).isAdopted = true;
    setPets(adoptedPet)
  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onFindPetsClick={filterFunction} displaySelected={displaySelect} />
            
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

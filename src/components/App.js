import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState(null);
  const [filters, setFilters] = useState({ type: "all" });

  const API_PETS = `http://localhost:3001/pets`;

  useEffect(() => {
    const fetchPets = async()=>{
      const results =  await fetch(API_PETS);
      const data = await results.json()
      setPets(data)
    }; fetchPets()
  },[API_PETS])
 

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters />
          </div>
          <div className="twelve wide column">
          {
            pets &&
            <PetBrowser pets={pets}/>
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

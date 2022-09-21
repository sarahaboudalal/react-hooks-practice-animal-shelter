import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


  function filterFunction(e){
   setFilters({type: e.target.value});
  }
  const API_PETS = `http://localhost:3001/pets`;
  const API_PETS_SPECIFIC = API_PETS + `type=${filters.type}`

//  function displayPets(){
//   async () =>{
//   if (filters.type === "all"){
//   const results = await fetch(API_PETS);
//   const data = await results.json()
//   setPets(data)
// } 
//   else {
//       const results =  await fetch(API_PETS_SPECIFIC);
//       const data = await results.json()
//       setPets(data)
//   }
// }}
  // useEffect(() => {
  //   const fetchPets = async()=>{
  //     const results =  await fetch(API_PETS);
  //     const data = await results.json()
  //     setPets(data)
  //   }; fetchPets()
  // },[API_PETS])
 

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onFindPetsClick={filterFunction} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

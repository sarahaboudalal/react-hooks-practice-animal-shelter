import React from "react";

import Pet from "./Pet";

function PetBrowser(props) {
  return (
  <div>
    {props.pets.map((el) => (<Pet id={el.id} name={el.name} type={el.type} age={el.age} weight={el.weight} gender={el.gender} onAdoptPet={props.onAdoptPet}/>))}

 
</div>
)
}

export default PetBrowser;

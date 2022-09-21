import React from "react";

import Pet from "./Pet";

function PetBrowser(props) {
  return (
  <div>
    {props.pets.map((el) => (<Pet name={el.name} type={el.type} age={el.age} weight={el.weight}/>))}

 
</div>
)
}

export default PetBrowser;

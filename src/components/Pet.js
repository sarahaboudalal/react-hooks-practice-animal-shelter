import React from "react";


function Pet(props) {

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
       
        {props.name}
        <p>Gender : {props.gender === 'female' ? '♀' : '♂'}</p>
        </span>
        <div className="meta">
          <span className="date">PET TYPE: {props.type}</span>
        </div>
        <div className="description">
          <p>Age: {props.age}</p>
          <p>Weight: {props.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {props.isAdopted? 
        <button className="ui disabled button">Already adopted</button> : 
        <button className="ui primary button" onClick={() => props.onAdoptPet(props.id)}>Adopt pet</button>}
      </div>
    </div>
  );
}
export default Pet;

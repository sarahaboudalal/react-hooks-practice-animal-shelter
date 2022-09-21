import React from "react";

function Pet(props) {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {props.name}
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
        <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button">Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;

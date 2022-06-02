import React from 'react';

const Cereal = ({ cereals }) => {
  const renderCereals = cereals.map(cereal =>
    <p key={cereal.id}>{cereal.name}</p>
    )
    return (
      <div>
        {renderCereals}
      </div>
    )
}

export default Cereal;
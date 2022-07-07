import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsArray, setPlantsArray, searchResult, updatePrice, deletePlant}) {
  return (
    <ul className="cards">
      {searchResult.map((plant)=>{
        return(<PlantCard key={`${plant.id}_${plant.name}_${plant.price}`} plant={plant} updatePrice={updatePrice} deletePlant={deletePlant} />)
      })
      }</ul>
  );
}

export default PlantList;

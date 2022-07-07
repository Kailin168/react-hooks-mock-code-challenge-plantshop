import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantsArray, setPlantsArray, searchInput, setSearchInput, searchResult, newPlant, updatePrice, deletePlant}) {
  return (
    <main>
      <NewPlantForm newPlant={newPlant}/>
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <PlantList searchResult={searchResult} plantsArray={plantsArray} setPlantsArray={setPlantsArray} updatePrice={updatePrice} deletePlant={deletePlant}/>
    </main>
  );
}

export default PlantPage;

import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plantsArray, setPlantsArray] = useState([])
  const [searchInput, setSearchInput] = useState('')

  function newPlant(plant) {
    setPlantsArray([...plantsArray, plant])
  }

  function updatePrice(plantId, price) {
    plantsArray.forEach((plant) => {
      if (plant.id === plantId) {
        plant.price = price;
      }
    })
    setPlantsArray([...plantsArray]);
    fetch(`http://localhost:6001/plants/${plantId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        price: parseFloat(price)
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  function deletePlant(plantId) {
    setPlantsArray(plantsArray.filter((plant) => {
      return plant.id !== plantId
    }));
    fetch(`http://localhost:6001/plants/${plantId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  const searchResult = plantsArray.filter((plants) => {
    return (plants.name.toLowerCase().includes(searchInput.toLowerCase()))
  })

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(setPlantsArray)
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage
        updatePrice={updatePrice}
        deletePlant={deletePlant}
        searchResult={searchResult}
        plantsArray={plantsArray}
        setPlantsArray={setPlantsArray}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        newPlant={newPlant} />
    </div>
  );
}

export default App;

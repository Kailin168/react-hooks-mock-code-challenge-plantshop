import React, { useState } from "react";

function PlantCard({ plant, updatePrice, deletePlant }) {
  const [inStock, setInStock] = useState(true)
  const [price, setPrice] = useState(plant.price)

  function handleInStockButton(event) {
    if (inStock === true) {
      setInStock((inStock) => !inStock)
    }
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* <p>Price: {plant.price}</p> */}
      <p>Price: <input value={price} onChange={(e) => {
        setPrice(e.target.value)
      }} /><button className="primary" onClick={() => {
        updatePrice(plant.id, price);
      }}>
          Update
        </button></p>
      <button onClick={handleInStockButton} className={inStock ? "primary" : ""}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <div>
        <button className="secondary" onClick={() => {
          deletePlant(plant.id);
        }}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default PlantCard;

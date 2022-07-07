import React from "react";

function NewPlantForm({ newPlant }) {

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const aPlant = {
          name: event.target.name.value,
          image: event.target.image.value,
          price: event.target.price.value,
        };
        newPlant(aPlant)
        fetch('http://localhost:6001/plants', {
          method: 'POST',
          body: JSON.stringify(aPlant),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        event.target.reset()
      }}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

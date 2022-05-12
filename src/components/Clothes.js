import React from "react";

import ClothesData from "./ClothesDatabase.json";

const Clothes = () => {
  return (
    <div>
      {ClothesData.map((clothes) => {
        return (
          <div key={clothes.id}>
            <strong>This clothe :</strong>
            {clothes.name} <strong>use </strong>
            {clothes.impact} <strong>CO2 </strong>
            <button
              onClick={() => {
                setAllConsumption(
                  // Here, we create a new Object to replace the current one.
                  //Create an empty {}, merge the current object into it, then merge an Object that includes the key/value we want to change.
                  Object.assign({}, allConsumption, {
                    clothes: [clothes.name, 5, clothes.impact, -30],
                  })
                );
              }}
            >
              Select this clothe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Clothes;

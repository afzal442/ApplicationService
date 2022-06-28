import React from "react";
import "./rec-tile.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeTile({ recipe }) {
  // console.log(recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/));
  return (
    recipe["recipe"]["image"] != null && (
      <div
        className="recipeTile"
      >
        <img className="recipeTile__img" src={recipe["recipe"]["image"]} alt="foodies"/>
        <p className="recipeTile__name" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}

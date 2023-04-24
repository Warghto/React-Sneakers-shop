import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites({ onAddToFavorite }) {
  const state = React.useContext(AppContext);
  console.log(state);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My favorites</h1>
      </div>

      <div className="d-flex flex-wrap">
        {[].map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;

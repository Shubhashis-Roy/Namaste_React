import RestaurantCard from "./Restaurant";
import allResturent from "../utills/mockData";
import { useState } from "react";

const Body = () => {
  //  ### Array distructuring
  const [resList, setResList] = useState(allResturent);

  // const arr = useState(allResturent);
  // const [resList, setResList] = arr;
  // const resList = arr[0];
  // const setResList = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const f = resList.filter((r) => r.restaurant_details.ratings >= 4);
            console.log(resList);
            setResList(f);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((r) => (
          <RestaurantCard key={r.restaurant_details.id} resData={r} />
        ))}
      </div>
    </div>
  );
};

export default Body;

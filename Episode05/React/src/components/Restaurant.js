import { CDN_URL } from "../utills/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, ratings, sla } = resData?.restaurant_details;
  const { cuisine } = resData?.food_details;

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="food-img"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h4> {name} </h4>
      <h4> {cuisine} </h4>
      <h4> {ratings} </h4>
      <h4> {sla.slaString} </h4>
    </div>
  );
};

export default RestaurantCard;

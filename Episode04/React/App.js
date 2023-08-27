import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsaIPJk-DWfOshIVIwLMqXJu-phuQHlkMCYGrNwipyygMrxmbcVGq0eoPj_xMftgBhzNk&usqp=CAU"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, ratings, sla } = resData?.restaurant_details;
  const { cuisine } = resData?.food_details;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="food-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3> {name} </h3>
      <h3> {cuisine} </h3>
      <h3> {ratings} </h3>
      <h3> {sla.slaString} </h3>
    </div>
  );
};

const resList = [
  {
    restaurant_details: {
      id: "179042",
      lat: "26.7523528",
      lng: "88.4396745",
      phone_no: "9073997823",
      address:
        "Vega Circle Mall,2.5 Mile,Sevoke Road,Dist-Darjeeling,Pin-734008,West Bengal(India)",
      name: "KFC",
      third_party_vendor_type: null,
      cloudinary_image_id: "56c9ab92bd79745fd152a30fa2525426",
      slug: "kfc-vega-circle-mall-janta-nagar",
      city: "Siliguri",
      area_name: "Bankim Nagar",
      sla: {
        slaString: "ETA 41 MINS",
      },
      ratings: "4.1",
    },
    food_details: {
      cuisine: "Indian American",
    },
    cloudinaryImageId: "a75044e4479ad52e0d418eed177958eb",
  },
  {
    restaurant_details: {
      id: "179041",
      lat: "26.7523528",
      lng: "88.4396745",
      phone_no: "9073997823",
      address:
        "Vega Circle Mall,2.5 Mile,Sevoke Road,Dist-Darjeeling,Pin-734008,West Bengal(India)",
      name: "ABC",
      third_party_vendor_type: null,
      cloudinary_image_id: "56c9ab92bd79745fd152a30fa2525426",
      slug: "kfc-vega-circle-mall-janta-nagar",
      city: "Siliguri",
      area_name: "Bankim Nagar",
      sla: {
        slaString: "50 MINS",
      },
      ratings: "4.1",
    },
    food_details: {
      cuisine: "Indian Sweets",
    },
    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
  },
  {
    restaurant_details: {
      id: "179040",
      lat: "26.7523528",
      lng: "88.4396745",
      phone_no: "9073997823",
      address:
        "Vega Circle Mall,2.5 Mile,Sevoke Road,Dist-Darjeeling,Pin-734008,West Bengal(India)",
      name: "ABC",
      third_party_vendor_type: null,
      cloudinary_image_id: "56c9ab92bd79745fd152a30fa2525426",
      slug: "kfc-vega-circle-mall-janta-nagar",
      city: "Siliguri",
      area_name: "Bankim Nagar",
      sla: {
        slaString: "50 MINS",
      },
      ratings: "4.1",
    },
    food_details: {
      cuisine: "Indian Sweets",
    },
    cloudinaryImageId: "y4uxmuj0ozrfobod3mwq",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((r) => (
          <RestaurantCard key={r.restaurant_details.id} resData={r} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

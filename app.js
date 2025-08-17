import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav buttons
 * 
 * Body 
 *  - Search
 *  - Restraunt Container 
 *    - Restraunt Cards
 * 
 * Footer
 *  - Copyright
 *  - Address
 *  - Links
 *  - Contact info
 * 
 */


const resObj = [
  {
    info: {
      id: "385824",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Sinchai Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      sla: { deliveryTime: 40 }
    }
  },
  {
    info: {
      id: "123456",
      name: "Domino's Pizza",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "City Center",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: ["Pizza", "Italian", "Pasta"],
      avgRating: 4.3,
      sla: { deliveryTime: 30 }
    }
  },
  {
    info: {
      id: "234567",
      name: "KFC",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Main Road",
      areaName: "Chhindwara",
      costForTwo: "₹500 for two",
      cuisines: ["Burgers", "Fried Chicken", "Fast Food"],
      avgRating: 4.2,
      sla: { deliveryTime: 35 }
    }
  },
  {
    info: {
      id: "345678",
      name: "Biryani Blues",
      cloudinaryImageId: "jo9pdipf4elcuch8g55q",
      locality: "Near Bus Stand",
      areaName: "Mohan Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "Hyderabadi", "Kebabs"],
      avgRating: 4.4,
      sla: { deliveryTime: 45 }
    }
  },
  {
    info: {
      id: "456789",
      name: "Barbeque Nation",
      cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      locality: "Mall Road",
      areaName: "Chhindwara",
      costForTwo: "₹1200 for two",
      cuisines: ["BBQ", "Grill", "Buffet"],
      avgRating: 4.5,
      sla: { deliveryTime: 50 }
    }
  },
  {
    info: {
      id: "567890",
      name: "Haldiram's",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
      locality: "Market Area",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: ["Sweets", "Snacks", "Street Food"],
      avgRating: 4.6,
      sla: { deliveryTime: 25 }
    }
  },
  {
    info: {
      id: "678901",
      name: "McDonald's",
      cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
      locality: "City Center",
      areaName: "Mohan Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fries", "Beverages"],
      avgRating: 4.1,
      sla: { deliveryTime: 28 }
    }
  },
  {
    info: {
      id: "789012",
      name: "Subway",
      cloudinaryImageId: "enj3srsnhbltbom2ovvh",
      locality: "Main Market",
      areaName: "Chhindwara",
      costForTwo: "₹350 for two",
      cuisines: ["Sandwich", "Healthy Food", "Salads"],
      avgRating: 4.0,
      sla: { deliveryTime: 32 }
    }
  },
  {
    info: {
      id: "890123",
      name: "Moti Mahal Delux",
      cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
      locality: "Civil Lines",
      areaName: "Mohan Nagar",
      costForTwo: "₹800 for two",
      cuisines: ["North Indian", "Mughlai", "Tandoor"],
      avgRating: 4.5,
      sla: { deliveryTime: 40 }
    }
  },
  {
    info: {
      id: "901234",
      name: "Wow! Momo",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "City Mall",
      areaName: "Chhindwara",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Tibetan", "Fast Food"],
      avgRating: 4.2,
      sla: { deliveryTime: 27 }
    }
  }
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-cont">
        <img src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="></img>
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const StyleCard = {
  backgroundColor : "#f0f0f0"
}

const Restraunt_card = (props) => {
  const {resData} = props;

  const {cloudinaryImageId, name, sla, cuisines, avgRating} = resData?.info;
  
  return (
    <div className="card-body" style= {StyleCard}>
    <div className="res-img">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}></img>
    </div>
    <div className="res-info">
      <h3>{name}</h3>
      <h4>{sla.deliveryTime}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
    </div>
  </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <div className="search-bar">
        Search 
      </div>

      <div className="Restraunt-container">
        {/* <Restraunt_card resData = {resObj[0]} />
        <Restraunt_card resData = {resObj[1]} />
        <Restraunt_card resData = {resObj[2]} />
        <Restraunt_card resData = {resObj[3]} />
        <Restraunt_card resData = {resObj[4]} />
        <Restraunt_card resData = {resObj[5]} />
        <Restraunt_card resData = {resObj[6]} />
        <Restraunt_card resData = {resObj[7]} />
        <Restraunt_card resData = {resObj[8]} />
        <Restraunt_card resData = {resObj[9]} /> */}

        {resObj.map((restraunt) =>{
          return <Restraunt_card resData={restraunt} key={restraunt.info.id}/>
        })}
        
      </div>
    </div>
  )
}


const App_layout = () => {
  return(
  <div>
  <Header />
  <Body />
  </div>
  )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App_layout />);
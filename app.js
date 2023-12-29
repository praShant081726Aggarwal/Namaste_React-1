import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header --> Logo, Nav items,
 * Body --> Search, Restrarant container, Restaurant card
 * Footer --> copyright, links , address, contact
 */

// Header components and Header  
const Search =()=>{
    return <div className="search">Search</div>
}
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.shutterstock.com/image-vector/sweet-cake-logo-cupcake-icon-600nw-1575517294.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Search/></li>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Body components and Body


const RestaurantCard = (props) => {
    return <div className="res-card"> 
        <img 
        className="res-logo" alt="res-logo"
        src="https://b.zmtcdn.com/data/dish_photos/993/6788af1e267ee17cd67d818208e2a993.jpg?output-format=webp"/>
        <h3>zomato</h3>
    </div>
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

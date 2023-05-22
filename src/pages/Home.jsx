import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/ems">EMS</Link>
        </li>
        <li>
          <Link to="/menu">Navigate to Menu</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;

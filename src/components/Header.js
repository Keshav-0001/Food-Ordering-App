import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

const onlineStatus = useOnlineStatus();


  return (
    <div className="header flex justify-between bg-blue-200 shadow-lg">
      <div className="logo-container ">
        <img
          className="logo w-24 bg-slate-100 hover:scale-105 duration-500"
          src="https://img.freepik.com/free-vector/vegetarian-food-menu_24877-50862.jpg"
          alt="logo-img"
        />
      </div>

      <div className="links font-bold">
        <ul className="nav-list flex m-6">

        <li className="nav-items p-3 ">
            Online Status : {onlineStatus? "On":"Off"}
          </li>
          <li className="nav-items p-3 mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-items p-3 mx-4">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-items p-3 mx-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-items p-3 mx-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="nav-items p-3 mx-4">
            <Link to="/RestaurantMenu/1234">Restro</Link>
          </li>
          <li className="nav-items p-3 mx-4">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

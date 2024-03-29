import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
// import { IoIosArrowDropdownCircle } from "react-icons/io";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // console.log(resInfo?.cards[2]?.card?.card?.info);
  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { cuisines, name, id, locality } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories  =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
console.log(categories);
  return (
    <div>
      <div className="text-center m-4">
        <h2 className="">{cuisines}</h2>
        <h2>{name}</h2>
        <h2>{id}</h2>
        <h2>{locality}</h2>
        {/* {categories accordian} */}
        {categories.map ((category) => <ResCategory/> )}
      </div>
    </div>
  );
};

export default RestaurantMenu;

import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { FetchedAPI } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { updatedHOC } from "./RestroCard";

const Body = () => {
  const [CardData, SetCardData] = useState([]);

  const RestaurantHoc = updatedHOC(RestroCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FetchedAPI);

    const json = await data.json();

    SetCardData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  //  console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const activeStatus = useOnlineStatus();

  if (activeStatus === false) {
    return (
      <h2>
        Looks like your internet connection is off...Please check your internet
        connection dear.
      </h2>
    );
  }

  if (CardData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap ">
      {CardData.map((allData) => (
        <Link
          to={"/RestaurantMenu/" + allData.info.id}
          key={allData.info.id}
          className="link"
        >
          {allData.info.veg ? (
            <RestaurantHoc resName={allData} />
          ) : (
            <RestroCard resName={allData} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default Body;

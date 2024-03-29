import { useEffect, useState } from "react";
import { FetchedAPI } from "./Constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);

  //   I am not not adding resId which I am receiving here just because I don't have the correct/accurate API.... Thank you....

  const fetchData = async () => {
    const data = await fetch(`https://corsproxy.io/?https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.19630&lng=72.96750&restaurantId=${resId}`);
    const json = await data.json();
    setResInfo(json.data);

  };

  return resInfo;
};

export default useRestaurantMenu;

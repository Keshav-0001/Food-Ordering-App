import ResCategory from "./ResCategory";

const RestroCard = ({ resName }) => {
  const { name, areaName, avgRating, costForTwo, cloudinaryImageId, sla, locality } =
    resName.info;

  return (
    <div className="w-[220px] shadow-xl p-3 m-3 rounded bg-slate-100 hover:scale-105 duration-500 hover:bg-slate-200">
      {
        <div className="restro-card ">
          
          <img
            className="rounded h-[160px] w-[100%]"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${cloudinaryImageId}`}
          />
          <h4 className="font-bold">{name}</h4>
         
          <p>{avgRating} stars</p>
          <p>{costForTwo}</p>
          <p>{sla.slaString}</p>
          <p>{sla.lastMileTravel} km</p>
          
          
        </div>
      }
    </div>
  );
};

// Higher order function component


 export const updatedHOC = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className=" text-green-800 bg-green-800 ml-4">Ve</label>
        <RestroCard {...props}/>
      </div>
    );
  };
};

export default RestroCard;

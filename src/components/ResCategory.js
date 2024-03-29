import { RiArrowDropDownLine } from "react-icons/ri";

const ResCategory = ({ resData }) => {

// const { ImageId } = resData?.card?.info?.imageId;
  
  return (
    <div>
      <div className="">
      {/* <img
          className="logoo rounded-lg max-w-[10%]"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${ImageId}`} alt="images"
        /> */}
        {/* <span className="mx-4">{resData.card.info.name}</span> */}

        rescategory
        <RiArrowDropDownLine className="text-[20px]" />
      </div>
      
      
    </div>
  );
};

export default ResCategory;

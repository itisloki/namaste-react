import { CDN_URL, STAR_LOGO } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const {name, cloudinaryImageId, avgRating, cuisines, sla } = resData.info;
    return(
        <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-200 ">
             <img alt="res-logo" className="rounded-lg"
            src={CDN_URL+cloudinaryImageId}
                />
             <h3 className="font-bold py-4 text-lg">{name}</h3>
            <div className="flex items-center">
                <img alt="star-logo" className="w-[18]" src={STAR_LOGO} />
                <h4 className="ml-1">{avgRating}</h4>
            </div>
            <h4 className="cusines">{cuisines.join(', ')}</h4>
            <h4 className="del-time">{sla.deliveryTime} mins</h4>
        </div>
    )
};


// Higher order Component

// return a new component and inside it will return some JSX.

export const WithPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard  {...props} />
            </div>
        )
    }
}

export default RestaurantCard;
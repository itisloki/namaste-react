import { useState, useEffect, useContext } from 'react';
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { SWIGGY_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);
  
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return <h2>Please Check your internet connection</h2>
  }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={
                  (text) => setSearchText(text.target.value)
                }/>
                <button
                  className="px-4 py-1 m-4 bg-green-200 rounded-lg"
                  onClick={() => {
                    const filteredRestaurant = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(filteredRestaurant);
                  }}
                >
                  Search
                </button>
              </div>
              <div className="m-4 p-4 flex items-center">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={() => {
                     const filterlestList = listOfRestaurants.filter((item) => 
                      item.info.avgRating > 4
                     )
                     setListOfRestaurants(filterlestList)
                  }}
                >
                    Top Rated Restaurant
                </button>
                </div>

                <div className="m-4 p-4 flex items-center">
                <input
                className='border border-black'
                onChange={(e) => setUserName(e.target.value)}
                value={loggedInUser}
                />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                  filteredRestaurant.map((restaurant) => <Link
                  key={restaurant?.info?.id}
                  to={"/restaurants/" + restaurant?.info?.id}
                  className="link-no-style"
                  >
                    {
                      restaurant?.info?.avgRating > 4.3
                      ? (<RestaurantCardPromoted resData={restaurant?.info} />)
                      : (<RestaurantCard resData={restaurant?.info}/>)
                    }
                  </Link>)
                }
            </div>
        </div>
    )
}

export default Body;

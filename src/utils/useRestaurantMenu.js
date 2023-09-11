
import { useEffect, useState } from "react";
import { FOOD_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData(){
        const data = await fetch(FOOD_MENU_URL + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    }
    

    return resInfo;
}

export default useRestaurantMenu;
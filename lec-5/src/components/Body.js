import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    //state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    //normal JS variable
    // let listOfRestaurentsJS = [
    //     {
    //         "info": {
    //             "id": "422971",
    //             "name": "Grameen Kulfi",
    //             "cloudinaryImageId": "fabmerdrji2cjcrfxtgy",
    //             "locality": "Achraj Towers Katol Road",
    //             "areaName": "Chindwada",
    //             "costForTwo": "₹120 for two",
    //             "cuisines": ["Ice Cream", "Desserts"],
    //             "avgRating": 4.6,
    //         },
    //     },
    //     {
    //         "info": {
    //             "id": "422972",
    //             "name": "KFC",
    //             "cloudinaryImageId": "fabmerdrji2cjcrfxtgy",
    //             "locality": "Achraj Towers Katol Road",
    //             "areaName": "Chindwada",
    //             "costForTwo": "₹120 for two",
    //             "cuisines": ["Ice Cream", "Desserts"],
    //             "avgRating": 3.2,
    //         },
    //     },
    //     {
    //         "info": {
    //             "id": "422973",
    //             "name": "MacD",
    //             "cloudinaryImageId": "fabmerdrji2cjcrfxtgy",
    //             "locality": "Achraj Towers Katol Road",
    //             "areaName": "Chindwada",
    //             "costForTwo": "₹120 for two",
    //             "cuisines": ["Ice Cream", "Desserts"],
    //             "avgRating": 4.2,
    //         },
    //     }
    // ];

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="fiter-btn"
                    onClick={() => {
                        // Filter logic here
                        const filteredRestaurants = listOfRestaurants.filter(
                            res => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredRestaurants); // Log the filtered result
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Body;

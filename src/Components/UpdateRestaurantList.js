import React from "react";
import { useEffect, useState } from "react";
import Restaurant from "../Pages/Restaurant";

function UpdateRestaurantList({listId}) {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        async function getUpdateList(){
            const res = await fetch(`/mzlist/${listId}/enrolledyn`, {
                headers: {
                  Accept: "application/json",
                },
                method: "GET",
            }).then((res) => {
                return res.json();
            });

            setRestaurants(Object.values(res.enrolledYnList));
        }

        getUpdateList();

        console.log(restaurants);
    }, [listId])
    
    function YnList({state}){

        const {restaurantId, restaurantName, enrolledYn} = state;

        const onClick = () => {
            const yn = enrolledYn === 'Y' ? 'N' : 'Y';

            setRestaurants(
                restaurants.map(
                    restaurant => restaurant.restaurantId === restaurantId ? {...restaurant, enrolledYn:yn} : restaurant
                )
            )
        }
       

        return (
            <div className="YnListWrapper">
                <div className={["YnList", `YnList_${enrolledYn}`].join(" ")} onClick={onClick}/>
    
                <div className="YnListName">
                    {restaurantName}
                </div>
            </div>
        )
    }

    return (
        <div>
            {restaurants.map(ls => (
                <YnList state={ls} key={ls.restaurantId}/>
            ))}
        </div>
    )
}

export default UpdateRestaurantList;
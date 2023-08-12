import React from "react";
import MyHeader from "../Components/MyHeader";
import LeftHeader from "../Components/LeftHeader";
import RightHeader from "../Components/RightHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import RestaurantList from "../Components/RestaurantList";

function Restaurant() {
    const {state} = useLocation();
    const {listId, listName} = state;
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        async function getUserData() {
            const res = await fetch(`/mzlist/${listId}/restaurants`, {
                headers: {
                  Accept: "application/json",
                },
                method: "GET",
            }).then((res) => {
                return res.json();
            });
    
            setRestaurants(Object.values(res.restaurants));
        }

        getUserData();
    },[listId])

    return (
        <div>
            <MyHeader 
                headText={"MATZIP"} 
                rightChild={<LeftHeader text={listName}/>} 
                leftChild={<RightHeader />}
            />

            <RestaurantList restaurants={restaurants}/>
        </div>
    )
}

export default Restaurant;
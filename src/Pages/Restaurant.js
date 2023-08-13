import React from "react";
import MyHeader from "../Components/MyHeader";
import LeftHeader from "../Components/LeftHeader";
import RightHeader from "../Components/RightHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import RestaurantList from "../Components/RestaurantList";
import MyButton from "../Components/MyButton";

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
        <div className="Restaurant">
            <MyHeader 
                headText={"RESTAURANT"} 
                rightChild={<RightHeader text={listName}/>} 
                leftChild={<LeftHeader />}
            />

            <div className="RestaurantList">
                <RestaurantList restaurants={restaurants}/>
            </div>

            <div className="CreateMzListWrapper">
                <MyButton text={"+"} type="CreateMzList"/>
            </div>
        </div>
    )
}

export default Restaurant;
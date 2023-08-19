import React from "react";
import MyHeader from "../Components/MyHeader";
import LeftHeader from "../Components/LeftHeader";
import RightHeader from "../Components/RightHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import RestaurantList from "../Components/RestaurantList";
import MyButton from "../Components/MyButton";
import { useNavigate } from "react-router-dom";

function Restaurant() {
    const {state} = useLocation();
    const {listId, listName} = state;
    const [restaurants, setRestaurants] = useState([]);
    const navigate = useNavigate();

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

    const onClick = () => {
        navigate("/updaterestaurant", {state : {listId: listId, listName: listName}});
    }

    return (
        <div className="contents">
            <MyHeader 
                headText={"RESTAURANT"} 
                rightChild={<RightHeader text={listName}/>} 
                leftChild={<LeftHeader />}
            />

            <div className="ListWrapper">
                <RestaurantList restaurants={restaurants}/> 
            </div>
            
            <div className="Footer">
                <MyButton text={"+"} type="CreateMzList" onClick={onClick}/>
            </div>
        </div>
    )
}

export default Restaurant;
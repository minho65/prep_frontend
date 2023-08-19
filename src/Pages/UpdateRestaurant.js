import React from "react";
import MyHeader from "../Components/MyHeader";
import RightHeader from "../Components/RightHeader";
import LeftHeader from "../Components/LeftHeader";
import { useLocation} from "react-router-dom";
import MyButton from "../Components/MyButton";
import UpdateRestaurantList from "../Components/UpdateRestaurantList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Restaurant from "./Restaurant";

function UpdateRestaurant() {
    const {state} = useLocation();
    const {listId, listName} = state;
    const [restaurants, setRestaurants] = useState([]);
    const navigate = useNavigate();

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

    const onClick = () => {
        const requests = restaurants.map(function(data) {
            return {
                'restaurantId' : data.restaurantId,
                'enrolledYn' : data.enrolledYn
            }
        })

        const updateRestaurantsOfMzList = async () => {
            await fetch(`/mzlist/restaurantrel`, {
                headers: {
                    "Content-Type":"application/json; charset=utf-8"
                },
                method: "PUT",
                body: JSON.stringify({
                    'listId' : listId,
                    'updateList' : requests
                })
            }).then((res) => {
                return res.json();
            }).then((res) => {
                if(res.listId === listId){
                    navigate(-1);
                }else{
                    alert("failed update restaurants of mzlist : " + listName);
                }
            })
        }

        updateRestaurantsOfMzList();
    }

    return (
        <div className="contents">
            <MyHeader 
                headText={"RESTAURANT"} 
                rightChild={<RightHeader text={listName}/>} 
                leftChild={<LeftHeader />}
            />

            <div className="ListWrapper">
                <UpdateRestaurantList restaurants={restaurants} setRestaurants={setRestaurants}/>
            </div>

            <div className="Footer">
                <MyButton text={"+"} type="CreateMzList" onClick={onClick}/>
            </div>
        </div>
    )
}

export default UpdateRestaurant;
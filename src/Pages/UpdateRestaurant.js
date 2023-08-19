import React from "react";
import MyHeader from "../Components/MyHeader";
import RightHeader from "../Components/RightHeader";
import LeftHeader from "../Components/LeftHeader";
import { useLocation} from "react-router-dom";
import MyButton from "../Components/MyButton";
import UpdateRestaurantList from "../Components/UpdateRestaurantList";

function UpdateRestaurant() {
    const {state} = useLocation();
    const {listId, listName} = state;

    return (
        <div className="contents">
            <MyHeader 
                headText={"RESTAURANT"} 
                rightChild={<RightHeader text={listName}/>} 
                leftChild={<LeftHeader />}
            />

            <div className="ListWrapper">
                <UpdateRestaurantList listId={listId}/>
            </div>

            <div className="Footer">
                <MyButton text={"+"} type="CreateMzList"/>
            </div>
        </div>
    )
}

export default UpdateRestaurant;
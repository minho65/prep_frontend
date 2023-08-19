import React from "react";

function UpdateRestaurantList({restaurants, setRestaurants}) {

    function sortRestaurants(){
        restaurants.sort((a, b) => {
            const prev = a.enrolledYn === 'Y' ? 1 : 0;
            const next = b.enrolledYn === 'Y' ? 1 : 0;
            return (next - prev) === 0 ? b.restaurantId - a.restaurantId : next - prev;
        })
    }

    sortRestaurants();

    function YnList({state}){

        const {restaurantId, restaurantName, enrolledYn} = state;

        const onClick = () => {
            const yn = enrolledYn === 'Y' ? 'N' : 'Y';

            setRestaurants(
                restaurants.map(
                    restaurant => restaurant.restaurantId === restaurantId ? {...restaurant, enrolledYn:yn} : restaurant
                )
            )

            sortRestaurants();
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
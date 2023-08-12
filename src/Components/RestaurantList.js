function Restaurant({state}) {
    const {restaurantName, restaurantCategory, restaurantAddress} = state;

    return (
        <div className="RestaurantListWrapper">
            <div className="RestaurantName">
                {restaurantName}
            </div>
            <div className="RestaurantCategory">
                {restaurantCategory}
            </div>
            <div className="RestaurantAddress">
                {restaurantAddress}
            </div>
        </div>
    )
}

function RestaurantList({restaurants}) {
    return (
        <div className="RestaurantList">
            {restaurants.map(res => (
                <Restaurant state={res} key={res.listId}/>
            ))}
        </div>
    )
}

export default RestaurantList;
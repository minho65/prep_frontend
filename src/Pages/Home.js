import React from "react";
import { useLocation } from "react-router-dom";
import MyHeader from "../Components/MyHeader";
import MzList from '../Components/MzList'
import LeftHeader from "../Components/LeftHeader";
import RightHeader from "../Components/RightHeader";

const Home = () => {
    const {state} = useLocation();
    const {userId, userName} = state;

    return (
        <div>
          <MyHeader 
            headText={"맛집리스트"} 
            rightChild={<LeftHeader text={userId}/>} 
            leftChild={<RightHeader />}
          />
          <MzList userId={userId} />
        </div>
    );
}

export default Home;
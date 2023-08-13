import React from "react";
import { useLocation } from "react-router-dom";
import MyHeader from "../Components/MyHeader";
import MzList from '../Components/MzList'
import LeftHeader from "../Components/LeftHeader";
import RightHeader from "../Components/RightHeader";
import CreateMzList from "./CreateMzList";

const Home = () => {
    const {state} = useLocation();
    const {userId} = state;

    return (
        <div className="Home">
          <MyHeader 
            headText={"MATZIP"} 
            rightChild={<RightHeader text={userId}/>} 
            leftChild={<LeftHeader />}
          />

          <MzList userId={userId} />

          <div className="CreateMzListWrapper">
            <div className="CreateMzListButton">
              +
            </div>
          </div>
        </div>
    );
}

export default Home;
import React from "react";
import { useLocation } from "react-router-dom";
import MyHeader from "../Components/MyHeader";
import MzList from '../Components/MzList'
import LeftHeader from "../Components/LeftHeader";
import RightHeader from "../Components/RightHeader";
import { useNavigate } from "react-router-dom";
import MyButton from "../Components/MyButton";

const Home = () => {
    const {state} = useLocation();
    const {userId} = state;
    const navigate = useNavigate();

    const onClick = () => {
      navigate("/createmzlist", {state : {userId: userId}});
    }

    return (
        <div className="contents">
          <MyHeader 
            headText={"MATZIP"} 
            rightChild={<RightHeader text={userId}/>} 
            leftChild={<LeftHeader />}
          />

          <div className="ListWrapper">
            <MzList userId={userId} />
          </div>
          

          <div className="Footer">
            <MyButton text={"+"} onClick={onClick} type="CreateMzList"/>
          </div>
        </div>
    );
}

export default Home;
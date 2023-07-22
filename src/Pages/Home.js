import React from "react";
import { useParams } from "react-router-dom";
import MyHeader from "../Components/MyHeader";

const Home = () => {
    const params = useParams();
    const userId = params.userId;

    return (
        <div>
          <MyHeader headText={"Home"}></MyHeader>
          <h1>{userId} 의 홈</h1>
          <h1>홈</h1>
          <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
        </div>
    );
}

export default Home;
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MyHeader from "../Components/MyHeader";
import RightHeader from "../Components/RightHeader";
import LeftHeader from "../Components/LeftHeader";
import MyButton from "../Components/MyButton";
import { useNavigate } from "react-router-dom";

function CreateMzList(){
    const {state} = useLocation();
    const {userId} = state;
    const [listName, setListName] = useState();
    const navigate = useNavigate();

    const onChange = (e) => {
        setListName(e.target.value);
    }

    const onClick = () => {

        const getUserData = async () => {
            await fetch(`/mzlist/list`, {
                headers: {
                    "Content-Type":"application/json; charset=utf-8"
                },
                method: "POST",
                body: JSON.stringify({
                    'userId' : userId,
                    'listName' : listName
                })
            }).then((res) => {
                console.log(res)
                return res.json();
            }).then((res) => {
                if(res.listName === listName){
                    navigate(-1);
                }else{
                    alert("failed create new Mzlist : " + listName);
                }
            })
        }

        getUserData();
    }

    return (
        <div className="CreateMzListBody">
            <MyHeader 
                headText={"NEW MZLIST"} 
                rightChild={<RightHeader text={userId}/>} 
                leftChild={<LeftHeader />}
            />
            
            <div className="CreateMzListInput">
                <h2>Create New MATZIP World!</h2>
                <label>
                    <input type="listName" value={listName} onChange={onChange}  name="listName"/>
                </label>
            </div>

            <div className="CreateNewMzListWrapper">
                <MyButton text={"Create"} onClick={onClick} type="Login"/>
            </div>
        </div>
    );
}

export default CreateMzList;
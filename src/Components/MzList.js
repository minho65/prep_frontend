import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EachList ({state}) {
    const navigate = useNavigate();
    const {listId, listName, createdDate} = state;

    const onClick = ({eachList}) => {
        navigate('/restaurants', {state : {listId: listId, listName: listName}})
    }

    return (
        <div className="EachListWrapper" onClick={onClick}>
            <div className="EachList">
                {listName}
            </div>
            <div className="EachList">
                {createdDate}
            </div>
        </div>
    );
}

const MzList = ({userId}) => {
    const [mzList, setMzList] = useState([]);

    useEffect(() => {
        async function getUserData() {
            const res = await fetch(`/user/${userId}/list`, {
                headers: {
                  Accept: "application/json",
                },
                method: "GET",
            }).then((res) => {
                return res.json();
            });
    
            setMzList(Object.values(res.mzList));
        }

        getUserData();
    },[userId])

    return (<div className="MzList">
        {mzList.map(ls => (
            <EachList state={ls} key={ls.listId} />
        ))}
    </div>)
}

export default MzList;
import { useEffect, useState } from "react";

const MzList = ({userId}) => {
    const [mzList, setMzList] = useState([]);

    const getUserData = async () => {
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

    useEffect(() => {
        getUserData();
    },[userId])

    return (<div>
        <h2>MzList</h2>
        {mzList.map((list) => {
            return (<div>
                <div>{list.listId}</div>
                <div>{list.listName}</div>
            </div>)
        })}
    </div>)
}

export default MzList;
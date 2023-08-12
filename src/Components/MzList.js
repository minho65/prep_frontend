import { useEffect, useState } from "react";

function EachList ({state}) {
    const {listName, createdDate} = state;

    return (
        <div className="EachListWrapper">
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
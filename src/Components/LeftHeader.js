import { useNavigate } from "react-router-dom";

function LeftHeader() {
    const navigate = useNavigate();

    return (
        <div style={{cursor: 'pointer'}} onClick={() => navigate(-1)}>
            back
        </div>
    )
}

export default LeftHeader;
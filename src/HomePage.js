import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";

const HomePage = () => {
    const navigate = useNavigate();
    const goToPage2 = () => {
        navigate('/page-2')
    };
    const goToPage1 = () => {
        navigate('/page-1')
    };
    return (
        <div>
            <button className = "btn" onClick={goToPage1} style = {{cursor:"pointer"}}>Go to Page 1</button><br></br>
            <button className = "btn" onClick={goToPage2}>Go to Page 2</button>
        </div>

    
    )
}

export default HomePage
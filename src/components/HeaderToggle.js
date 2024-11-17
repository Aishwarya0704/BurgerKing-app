import { useState } from "react";

export const HeaderToggle = () => {

    let [isActive, setActive] = useState(true);

    return (
        <div className='header-toggle'>
            <div className='header-toggle-dinein' style={{ color: isActive ? "gray" : "#6f3c2f" }} >Dine-in/Takeaway</div>
            <div className="toggle-switch-outer" style={{ backgroundColor: isActive ? "#e70" : "#6f3c2f"}}>
                <div className="toggle-switch-inner" style={{ right: isActive && "7%", left: !isActive && "7%"}} onClick={() => setActive(!isActive)}>
                </div>
            </div>
            <div className='header-toggle-delivery' style={{ color: !isActive ? "gray" : "#e70" }}>Delivery</div>
        </div>
    );
}
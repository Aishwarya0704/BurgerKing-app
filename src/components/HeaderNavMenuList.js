import { useNavigate } from "react-router-dom";


export const HeaderNavMenuList = () => {
    const navigate = useNavigate();
    return (
        <div className='header-nav-menu-list'>
            <ul className="nav-menu-list">
                <li className="nav-menu-item">
                    <img src="https://www.burgerking.in/static/media/dine-in-black.c32e1cdd.svg" alt="" className="nav-menu-icon" />
                    <span className="nav-menu-name">Nearby Stores</span>
                </li>
                <li>
                    <img src="https://www.burgerking.in/static/media/offers-inactive.81dcb21f.svg" alt="" className="nav-menu-icon"/>
                    <span className="nav-menu-name">King Deals</span>
                </li>
                <li>
                    <img src="https://www.burgerking.in/static/media/login-inactive.de941b20.svg" alt="" className="nav-menu-icon"/>
                    <span onClick={()=> navigate('/login')} className="nav-menu-name">Login</span>
                </li>
                <li>
                    <img src="https://www.burgerking.in/static/media/login-inactive.de941b20.svg" alt="" className="nav-menu-icon"/>
                    <span onClick={()=> navigate('/registration')} className="nav-menu-name">Register</span>
                </li>
                <li>
                    <img src="https://www.burgerking.in/static/media/cart.3ff203fa.svg" alt="" className="nav-menu-icon"/>
                    <span onClick={()=> navigate('/addtocart')} className="nav-menu-name">Cart</span>
                </li>
            </ul>
        </div>
    );
}
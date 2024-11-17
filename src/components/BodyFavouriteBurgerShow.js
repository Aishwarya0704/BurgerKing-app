import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductAction } from '../redux/Actions/ProductAction';
import { AddDataToCartAction } from "../redux/Actions/AddToCartAction";
import { favouriteBurgerList } from "../data";

export const BodyFavouriteBurgerShow = () => {
    const dispatch = useDispatch();
    // const favouriteBurgerList = useSelector((state) => state.ProductReducer.products);

    useEffect(() => {
        dispatch(ProductAction());
    }, []);

    const addFavouriteBurgersToCart = (burger, index) => {
        console.log(burger, index);

        const cartItem = {
            id: index,
            imgUrl: burger.imgUrl,
            name: burger.name,
            description: burger.description,
            price: burger.price,
            quantity: 1
        };

        dispatch(AddDataToCartAction(cartItem));

    }

    return (
        <div className="body-burger-show">
            {favouriteBurgerList &&
                favouriteBurgerList.map((favouriteBurger, index) => {
                    const { imgUrl, name, description, price } = favouriteBurger;
                    return (
                        <div className="burger-card">
                            <img className='burger-card-veg-logo' alt='veg-symbol' src="https://www.burgerking.in/static/media/veg.2d5a7ccc.svg" />
                            <div className="burger-img">
                                <img src={imgUrl} alt='' />
                            </div>
                            <div className="burger-content">
                                <h2>{name}</h2>
                                <p>{description}</p>
                                <div className="burger-content-price-button">
                                    <p>₹{price}/-</p>
                                    <button onClick={() => addFavouriteBurgersToCart(favouriteBurger, index)} type="button">ADD+</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );

}
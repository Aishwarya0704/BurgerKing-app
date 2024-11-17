import { Header } from './Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useDispatch, useSelector } from 'react-redux';
import { FetchDataFromCartAction } from '../redux/Actions/AddToCartAction';
import { RemoveItemFromCartAction } from '../redux/Actions/AddToCartAction';

function AddToCart() {
    let totalPrice = 0;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let cartItems = useSelector((state) => state.FetchDataFromCartReducer.cartItems);
    let [cartItemsData, setCartItems] = useState([]);


    useEffect(() => {
        dispatch(FetchDataFromCartAction())

    }, []);

    useEffect(() => {
        console.log('updating card details');
        setCartItems(cartItems)

    }, [cartItems])

    const checkUserLogin = () => {
        if (!localStorage.getItem('idToken')) {
            navigate('/login')
        }
        else {
            navigate('/addtocart')
        }
    }

    const handlePlus = async (cart_id) => {
        let updatedCartData = cartItemsData.map(item => {
            if (cart_id === item.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            else {
                return item;
            }
        })
        console.log(updatedCartData);
        setCartItems(updatedCartData);
    }

    const handleMinus = (cart_id) => {
        let updatedCartData = cartItemsData.map(item => {
            if (cart_id === item.id) {
                return {
                    ...item,
                    quantity: item.quantity - (item.quantity > 1 ? 1 : 0)
                }
            }
            else {
                return item;
            }
        })
        setCartItems(updatedCartData);

    }

    const removeCartProduct = (cartBurger) => {
        // const removedProduct = cartItems.filter((burger) => {
        //     return burger.id !== cartBurger.id;
        // })
        window.location.reload();
        // console.log(removedProduct);
        dispatch(RemoveItemFromCartAction(cartBurger.id))
    }

    return (
        <>
            <Header />
            <div className='main-container'>
                <div className='cart-sub-container'>
                    <Scrollbars>
                        <div className='back-button'>
                            <img onClick={() => navigate('/')} alt='back-button' src="https://www.burgerking.in/static/media/left-arrow.e2f47880.svg" />
                        </div>
                        <h2>Your Cart</h2>
                        <div className='addtocart-heading'>
                            <p>Image</p>
                            <p>Name</p>
                            <p>Quantity</p>
                            <p>Price</p>

                        </div>
                        {
                            cartItemsData?.map((burger, index) => {
                                totalPrice += burger.price * burger.quantity;
                                return (
                                    <div className="show-addtocart-burgers">

                                        <div key={burger.id} className="addtocart-burger-card">
                                            <img onClick={() => removeCartProduct(burger)} className='addtocart-remove-button' />
                                            <div className="addtocart-burger-img">
                                                <img src={burger.imgUrl} alt='addtocart-burget-img' />
                                            </div>
                                            <p className='addtocart-burger-name'>{burger.name}</p>
                                            <div className='addtocart-burger-quantity'>
                                                <div className='addtocart-burger-quantity-counter'>
                                                    <button onClick={() => handleMinus(burger.id)} className='burger-quantity-minus' type='button' >-</button>
                                                    <div className='burger-quantity-value'>{burger.quantity}</div>
                                                    <button onClick={() => handlePlus(burger.id)} className='burger-quantity-plus' type='button' >+</button>
                                                </div>
                                            </div>
                                            <p className='addtocart-burger-price'>Rs {burger.price * burger.quantity}/-</p>
                                        </div>

                                    </div>
                                );
                            })
                        }
                        <div className='addtocart-total-amount'>
                            <p>Total Amount</p>
                            <p>Rs {totalPrice}/-</p>
                        </div>
                        <button className='addtocart-checkout-btn' onClick={checkUserLogin}>Checkout</button>
                    </Scrollbars>
                </div>
            </div>
        </>
    );
}

export default AddToCart;


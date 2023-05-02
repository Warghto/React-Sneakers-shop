import React from "react";
import axios from "axios";
import Info from "./info";
import AppContext from "../context";


const delay = (ms) => new Promise ((resolve)=> setTimeout(resolve, ms));

function Drawer({onClose, onRemove, items = []}){
    const {cartItems, setCartItems} = React.useContext(AppContext);
    const [orderId, setOrderID] = React.useState(null)
    const [isOrderComplete, setOrderComplete] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const onClickOrder = async () =>{
        try{
            setIsLoading(true);
            const { data } = await
                axios.post("https://643806eac1565cdd4d6435e6.mockapi.io/orders", {
                    items: cartItems,
                });
            setOrderID(data.id)
            setOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++){
                const item = cartItems[i];
                await axios.delete(
                    `https://643062f7b289b1dec4c76583.mockapi.io/cart/${item.id}`);
                await delay(1000);
            }

        }catch (err){
            alert('Your order was canceled:(' +
                'try one more time or contact our support to help you')
        }
        setIsLoading(false);
    };

    return(
        <div className="overlay">
        <div className="drawer">
            <h2 className="d-flex justify-between mb-30 ">Shopping cart <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>

            {items.length>0 ? (
                    <div className="d-flex flex-column flex">
                        <div className="items">
                            {
                                items.map((obj) => (<div className="cartItem d-flex align-center mb-20">
                                        <div
                                            style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                            className="cartItemImg"></div>

                                        <div className="mr-20 flex">
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price}</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                                    </div>
                                ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Total price:</span>
                                    <div></div>
                                    <b> 405 eur.</b>
                                </li>

                                <li>
                                    <span>Fee 5%:</span>
                                    <div></div>
                                    <b> 7 eur.</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Proceed to checkout<img src="/img/arrow.svg" alt="Arrow" />.</button>
                        </div>
                    </div>
                ) : (
                    <Info title={isOrderComplete ? "Order complete!":"Cart is empty"}
                    description={isOrderComplete ?  `Thank you for order #${orderId}!` : 'You need to make an order'}
                    image={isOrderComplete ? "/img/complete-order.jpg":"/img/empty-cart.jpg"}/>
                )}
        </div>
        </div>
    );
}
export default Drawer;
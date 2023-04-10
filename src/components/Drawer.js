function Drawer({onClose, onRemove, items = []}){
    return(
        <div className="overlay">
        <div className="drawer">
            <h2 className="d-flex justify-between mb-30 ">Shopping cart <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>

            {
                items.length>0 ? (
                    <div>
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
                            <button className="greenButton">Proceed to checkout<img src="/img/arrow.svg" alt="Arrow" />.</button>
                        </div>
                    </div>
                ) : (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="empty cart" />
                    <h2>Cart is empty</h2>
                    <p className="opacity-6">Add some products to make an order</p>
                    <button className="greenButton">
                        <img src="/img/arrow.svg" alt="Arrow" /> Back to store
                    </button>
                </div>
                )}






        </div>
        </div>
    );
}
export default Drawer;
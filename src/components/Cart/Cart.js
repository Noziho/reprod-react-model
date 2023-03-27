import './Cart.css'

export const Cart = ({children}) => {
    return (
        <div className="cart">
            <h2>Vos articles</h2>

            <div className="products">
                {children}
            </div>
        </div>
    );
}
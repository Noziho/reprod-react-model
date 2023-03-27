import './CartItem.css'
import trash from '../../assets/images/trash.svg';
export const CartItem = (props) => {
    return (
        <div className="product">
            <div>
                <img className="trash" src={trash} alt=""/><h3>{props.name}</h3>
                <div className="amount">({props.amount})</div>
            </div>
        </div>
    );
}
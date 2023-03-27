import './CartItem.css'
import trash from '../../assets/images/trash.svg';

export const CartItem = () => {

    const productList = [
        {id: 1, name: 'Product1', amount:1},
        {id: 2, name: 'Product2', amount:2},
        {id: 3, name: 'Product3', amount:3},
        {id: 4, name: 'Product4', amount:4},
        {id: 5, name: 'Product5', amount:5},
    ];

    return (
        <div className="items">
            {productList.map(product =>
                <div key={product.id} className="item">
                    <div>
                        <img className="trash" src={trash} alt=""/><h3>{product.name}</h3>
                        <div className="amount">({product.amount})</div>
                    </div>
                </div>
            )}

        </div>

    );
}
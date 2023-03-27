import './Product.css';

export const Product = ({children}) => {
    return (
        <div className="products">
            {children}
        </div>
    )
}

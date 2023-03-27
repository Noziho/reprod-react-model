import '../../assets/App.css';
import {Header} from "../Header/Header";
import {Cart} from "../Cart/Cart";
import {CartItem} from "../CartItem/CartItem";
import {Product} from "../Product/Product";
import {ProductList} from "../ProductsList/ProductList";
import {QuantitySelector} from "../QuantitySelector/QuantitySelector";
import {Categories} from "../Categories/Categories";



function App() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <Cart>
                    <CartItem></CartItem>
                </Cart>

                <Product>
                    <Categories></Categories>
                    <ProductList>
                        <QuantitySelector></QuantitySelector>
                    </ProductList>
                </Product>
            </div>
        </>
    );
}

export default App;

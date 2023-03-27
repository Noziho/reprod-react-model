import '../../assets/App.css';
import {Header} from "../Header/Header";
import {Cart} from "../Cart/Cart";
import {CartItem} from "../CartItem/CartItem";

function App() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <Cart>
                    <CartItem name={"Mon product0"} amount={1}></CartItem>
                    <CartItem name={"Mon product1"} amount={2}></CartItem>
                    <CartItem name={"Mon product2"} amount={3}></CartItem>
                    <CartItem name={"Mon product3"} amount={4}></CartItem>
                </Cart>
            </div>
        </>
    );
}

export default App;

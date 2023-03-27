import './ProductList.css'
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';
export const ProductList = ({children}) => {

    const productList = [
        {id: 1, name: 'Product1', description: "Description 1",price:1, image:image1},
        {id: 2, name: 'Product2', description: "Description 2",price:2, image:image2},
        {id: 3, name: 'Product3', description: "Description 3",price:3, image:image3},
        {id: 4, name: 'Product4', description: "Description 4",price:4, image:image4},
        {id: 5, name: 'Product5', description: "Description 5",price:5, image:image5},
    ];

    return (
        <div className="productsList">
            {productList.map(product =>
                <div key={product.id} className="singleProduct">
                    <div className="thumbnailContainer">
                        <img className="thumbnail" src={product.image} alt="img produit"/>
                    </div>

                    <div className="describeProduct">
                        <h3 className="productName">{product.name}</h3>
                        <div className="description">{product.description}</div>
                        <div className="price">
                            {children}
                            {product.price}€
                        </div>
                    </div>
                </div>
            )}

        </div>

    );
}

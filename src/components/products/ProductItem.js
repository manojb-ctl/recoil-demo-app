import React from "react";
import { useRecoilState } from "recoil";
import { productState } from "../../recoil/ProductRecoil";
import { Link } from "react-router-dom";
import View from "../layout/View";

const ProductItem = (props) => {
  const { product } = props;

  // Recoil state Logic(useRecoilState) => products: is used for get products and setProducts: is for set(update) products...
  const [products, setProducts] = useRecoilState(productState);

  const deleteProduct = (id) => {
    console.log("delete id: ", id);
    const new_products = products.filter((product) => product.id !== id);
    setProducts(new_products);
  };

  return (
    <View>
      <div className="box box__custom">
        <Link
          to={`/editProduct/${product.id}`}
          className="button button-edit is-warning"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteProduct(product.id)}
          className="button button-delete is-danger"
        >
          Delete
        </button>
        <h1 className="title is-1">{product.picture}</h1>
        <h2 className="subtitle is-5">{product.name}</h2>
        <span className="tag">Rs.{product.price}/kg</span>
      </div>
    </View>
  );
};

export default ProductItem;

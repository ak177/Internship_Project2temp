import "./HomeScreen.css";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import Backdrop from "../components/Backdrop";
import Card_Item from "../components/Card_Item";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [sideToggle, setSideToggle] = useState(false);
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
       <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <h2 className="homescreen__title">Products</h2>
      {console.log(products)}
      <div className="homescreen__products">
        
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            
            <Card_Item
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;

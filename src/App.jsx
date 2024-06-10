import { useEffect, useState } from "react"
import Navbar from "./ecomerce/navbar/navbar"
// import Store from "./ecomerce/store/store"
import axios from "axios";
import create from "./context/context.jsx";

import BasicModal from "./ecomerce/store/modal.jsx"
import ReactStars from "react-rating-stars-component";
import ActionAreaCard from "./ecomerce/store/card.jsx"
// import { useSearchParams } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import './ecomerce/store/store.css'
import { ThreeCircles } from "react-loader-spinner";

function App() {
  // const [searchParams,setSearchParams]= useSearchParams();
  const [cart, setCart] = useState([])
  const [loader, setLoader] = useState(false)
  const [addToCard, setAddToCard] = useState(false)
  const [open, setOpen] = useState(false)
  // const [detail, setDetails] = useState({})
  const [data, setData] = useState({ loading: true, error: null, products: [] });
  const [detail, setDetails] = useState({})

  const dataFetch = async () => {
    try {
      setLoader(true); // Show loader when fetching data
      const response = await axios.get('https://fakestoreapi.com/products');
      setData({ loading: false, error: null, products: response.data });
    } catch (error) {
      setData({ loading: false, error: error.message, products: [] });
    } finally {
      setLoader(false); // Hide loader after fetching data
    }
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const veiwdetail = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setDetails(response.data);
    setOpen(true);
  }

  const addToCart = (pro) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({...pro,qty:1});
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
    setAddToCard(true)
  }

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, []);

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div>
      <create.Provider value={{ cart, setCart }}>
        <Navbar cartData={cart} />
        <div className="storeContainer">
          {loader && ( // Display loader only when loader state is true
            <div className="loaderContainer">
              <ThreeCircles
                visible={true}
                height={100}
                width={100}
                color="#4fa94d"
                ariaLabel="three-circles-loading"
              />
            </div>
          )}
          {data.products.length > 0 && (
            <div className="store">
              {data.products.map((product) => (
                <div className="singleProduct" key={product.id}>
                  <img className="img" src={product.image} alt={product.title} />
                  <div className="price">
                    <p> Rs {product.price}-/</p>
                    <div className="productTitle">
                      <h3>{product.title}</h3>
                      <div className="rating">
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <div className="addToCardbtn">
                          <button className="addtocard" onClick={() => addToCart(product)}>Add to Cart
                            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={addToCard} autoHideDuration={2000} onClose={() => setAddToCard(false)} >
                              <Alert
                                onClose={() => setAddToCard(false)}
                                severity="success"
                                variant="filled"
                                sx={{ width: '100%' }}
                              >
                                Item added in cart!
                              </Alert>
                            </Snackbar>
                          </button>
                          <button className="veiwdetail" onClick={() => veiwdetail(product.id)}>View Details

                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <BasicModal open={open} detail={detail} handleClose={() => setOpen(false)} />
      </create.Provider>
    </div>
  );
}

export default App;

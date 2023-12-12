import { IoBagAdd } from 'react-icons/io5';
import { DataConsumer } from '../context/dataContext';
import '../styles/productList.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartConsumer } from '../context/cartContext';

const ProductList = () => {
  const { apiData } = DataConsumer();
  const { addToCart } = CartConsumer();

  const addToCartMsg = (item) => {
    toast.success('🦄 Add to cart successfully!!!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    addToCart(item);
  };

  return (
    <div className='product'>
      <div>
        <h2>~Our Best Product~</h2>
        <h1>Recently Sold Items</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elitThe liber
          tempor cum soluta nobis eleifend option congue doming quod mazim..
        </p>
      </div>
      <div className='product-list'>
        {apiData &&
          apiData.categories.map((item) => {
            const {
              idCategory,
              strCategory,
              strCategoryDescription,
              strCategoryThumb,
            } = item;
            return (
              <div className='product-card' key={idCategory}>
                <div className='product-card-img'>
                  <img src={strCategoryThumb} alt={strCategory} />
                </div>
                <div className='product-card-desc'>
                  <h2>{strCategory}</h2>
                  <h6>${idCategory}</h6>
                  <p>
                    <IoBagAdd onClick={() => addToCartMsg(item)} />
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;

import Home from './Home';
import ProductList from './ProductList';
import ProductRow from './ProductRow';
import ServiceForm from './ServiceForm';

const HomeContainer = () => {
  return (
    <>
      <Home />
      <ProductRow />
      <ProductList />
      <ServiceForm />
    </>
  );
};

export default HomeContainer;

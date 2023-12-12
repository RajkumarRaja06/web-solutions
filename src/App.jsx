import { Navbar, Home, ProductList, HomeContainer } from './component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Root, RegisterForm, LogIn, Cart } from './router';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<HomeContainer />} />
          <Route path='productList' element={<ProductList />} />
          <Route path='cart' element={<Cart />} />
          <Route path='logIn' element={<LogIn />} />
          <Route path='registerForm' element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

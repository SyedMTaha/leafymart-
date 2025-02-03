import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import AppMart from './components/AppMart';

function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [showAboutUs, setShowAboutUs] = React.useState(true); // Show AboutUs by default
  const [showAppMart, setShowAppMart] = React.useState(true); // Show AppMart by default

  return (
    <Provider store={store}>
      <div className="App">
        <main>
          {showAppMart && <AppMart />}
          {showAboutUs && <AboutUs />}
          {!showCart && !showAboutUs && !showAppMart && <ProductList />}
          {showCart && <CartItem />}
        </main>
      </div>
    </Provider>
  );
}

export default App;

import React from 'react';

import Header from '../src/components/header/header.js';
import Categories from '../src/components/storefront/categories.js';
import SimpleCart from '../src/components/cart/simplecart.js';
import ActiveCategory from '../src/components/storefront/current-category.js';
import Products from '../src/components/storefront/products.js';
import Footer from '../src/components/footer/footer.js';



function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <SimpleCart />
      <ActiveCategory />
      <Products />
      <Footer />
    </div>
  );
}

export default App;

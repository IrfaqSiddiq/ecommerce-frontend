import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => (
  <div>
    <header style={styles.header}>
      <h1>eCommerce Store</h1>
    </header>
    <ProductList />
  </div>
);

const styles = {
  header: { textAlign: 'center', padding: '16px', backgroundColor: '#343a40', color: 'white' },
};

export default HomePage;

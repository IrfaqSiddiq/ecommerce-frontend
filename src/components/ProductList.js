import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setLoading(false);
    };
    getProducts();
  }, []);

  if (loading) return <p style={styles.loading}>Loading products...</p>;

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Responsive layout with dynamic grid items
    gap: '24px',
    justifyItems: 'center',
    padding: '20px',
    backgroundColor: '#f7f7f7', // Soft background color
  },
  loading: {
    fontSize: '18px',
    textAlign: 'center',
    color: '#555',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ProductList;

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../api';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setLoading(false);
    };
    getProducts();
  }, []);

  // Handle button click to navigate to Add Product page
  const handleAddProductClick = () => {
    navigate('/products/add'); // Adjust route path based on your routing setup
  };

  if (loading) return <p style={styles.loading}>Loading products...</p>;

  return (
    <div>
      {/* Add Product Button - Wrapped in a flex container to align it to the right */}
      <div style={styles.addButtonContainer}>
        <button style={styles.addButton} onClick={handleAddProductClick}>
          Add Product
        </button>
      </div>

      {/* Product List Container */}
      <div style={styles.container}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
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
  addButtonContainer: {
    display: 'flex', // Enable flexbox
    justifyContent: 'flex-end', // Align to the right
    marginBottom: '20px', // Space between the button and the products
  },
  addButton: {
    backgroundColor: '#4CAF50', // Green background for the button
    color: 'white',
    fontSize: '16px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductList;

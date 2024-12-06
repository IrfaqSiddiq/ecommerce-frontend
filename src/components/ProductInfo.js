import React from 'react';

const ProductInfo = ({ product }) => (
  <div style={styles.card}>
    <h3 style={styles.productName}>{product.product_name}</h3>
    <p style={styles.price}>${product.price}</p>
    <p style={styles.productType}>{product.product_type}</p>
    <img 
      src={`http://localhost:3000/product/img/${product.product_id}`} 
      alt={product.product_name} 
      style={styles.image} 
    />
    <p style={styles.description}>{product.description}</p>
    <button style={styles.button}>Add to Cart</button>
  </div>
);

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow effect for the card
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
  },
  productName: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 10px 0',
  },
  price: {
    fontSize: '20px',
    color: '#28a745',
    fontWeight: '500',
    margin: '10px 0',
  },
  productType: {
    fontSize: '16px',
    color: '#777',
    margin: '10px 0',
  },
  image: {
    width: '200px', // Increased size for better display
    height: '200px',
    objectFit: 'contain',
    margin: '20px 0',
    borderRadius: '8px',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    margin: '20px 0',
    lineHeight: '1.6',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  // Hover effect for the card
  cardHover: {
    transform: 'translateY(-5px)', // Lift the card on hover
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)', // Stronger shadow on hover
  },
  // Hover effect for the button
  buttonHover: {
    backgroundColor: '#218838', // Darker green on hover
  },
};

export default ProductInfo;

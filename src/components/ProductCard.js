import React from 'react';

const ProductCard = ({ product }) => (
  <div style={styles.card}>
    <h3>
      <a href={`/products/${product.product_id}`} style={styles.link}>
        {product.product_name}
      </a>
    </h3>
    <p style={styles.price}>${product.price}</p>
    <button style={styles.button}>Add to Cart</button>
  </div>
);

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow effect for card
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
    width: '280px',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
    fontWeight: '600',
    transition: 'color 0.3s ease', // Smooth transition for hover
  },
  price: {
    fontSize: '16px',
    color: '#333',
    fontWeight: '500',
    marginBottom: '16px', // Space between price and button
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
  // Hover effect for the link
  linkHover: {
    color: '#28a745', // Green color for product link on hover
  },
};

export default ProductCard;

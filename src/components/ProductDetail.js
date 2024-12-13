import React, { useEffect, useState } from 'react';
import ProductInfo from './ProductInfo';
import axios from 'axios';
import { fetchProductDetail } from '../productDetailApi';
import { useParams, useNavigate } from 'react-router-dom';
const BASE_URL = 'http://localhost:3000';

const ProductDetail = () => {
  const { id } = useParams();
  console.log('***********id***********', id);

  const [product, setProduct] = useState(null); // Single product object
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (id) {
          const productData = await fetchProductDetail(id);
          setProduct(productData);
        } else {
          console.error('No product ID provided in the URL');
        }
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [id]);

  if (!id) {
    return (
      <p style={styles.error}>
        Invalid Product ID. Please provide a valid path parameter.
      </p>
    );
  }

  if (loading) {
    return <p style={styles.loading}>Loading product details...</p>;
  }

  if (!product) {
    return (
      <p style={styles.error}>No product details found for the given ID.</p>
    );
  }
  // Handle button click to navigate to Add Product page
  const deleteProductClick = () => {
    try {
      const response = axios.delete(`${BASE_URL}/product/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json', // Specify the content type of the request
        },
        withCredentials: true, // Send cookies with the request
      });
      const jsonData = response.data; // Axios automatically parses JSON responses
      console.log(jsonData, '***********response in json***********');
      navigate('/products');
    } catch (error) {
      // Something happened in setting up the request
      console.error('Error setting up the request:', error.message);
    }
  };

  return (
    <div>
      <div style={styles.deleteButtonContainer}>
        <button style={styles.deleteButton} onClick={deleteProductClick}>
          Delete Product
        </button>
      </div>
      <div style={styles.container}>
        {/* Pass the product object to the ProductInfo component */}
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  loading: {
    fontSize: '18px',
    color: '#555',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  error: {
    fontSize: '18px',
    color: '#d9534f',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default ProductDetail;

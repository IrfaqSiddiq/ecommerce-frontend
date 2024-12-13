import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddProduct.css';

const BASE_URL = 'http://localhost:3000';

const AddProduct = () => {
  const navigate = useNavigate();
  const [product_name, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [productType, setProductType] = useState([]);
  const [image, setImage] = useState(null); // Added state for the image
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send the image and other data
    const formData = new FormData();
    formData.append('product_name', product_name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('productType', JSON.stringify(productType)); // Send productType as a stringified array
    if (image) {
      formData.append('image', image); // Append the image file
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/product/add`,
        formData,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'multipart/form-data' },
        } // Ensure correct headers for file upload
      );
      setMessage('Product Added Successfully');
      setPopupMessage('Product Added Successfully!');

      navigate('/products');
    } catch (err) {
      console.error('Error during Adding Products:', err);
      setMessage(err.response?.data?.message || 'Something went wrong!');
      setPopupMessage(err.response?.data?.message || 'Something went wrong!');
    }
  };

  const closePopup = () => setPopupMessage('');

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Product Type:</label>
          <input
            type="text"
            value={productType.join(', ')} // Converts array to string for display
            onChange={(e) =>
              setProductType(
                e.target.value.split(',').map((item) => item.trim())
              )
            } // Converts string to array
          />
        </div>

        <div>
          <label>Product Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])} // Set the selected file
          />
        </div>

        {error && <div className="error-message">{error}</div>}
        <button type="submit">Add Product</button>
      </form>

      {message && <div className="success-message">{message}</div>}

      {popupMessage && (
        <div className="popup-overlay">
          <div className="popup">
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;

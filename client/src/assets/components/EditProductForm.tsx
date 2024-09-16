import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface ProductData {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  offer: number;
  imageUrls: File[];
}

const EditProductForm: React.FC<{ productId: string }> = ({ productId }) => {
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    offer: 0,
    imageUrls: [],
  });

  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [imagesToRemove, setImagesToRemove] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch product data on component mount
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/admin/singleProduct/${productId}`
        );
        const product = response.data;
        setProductData({
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          stock: product.stock,
          offer: product.offer,
          imageUrls: [],
        });
        setExistingImages(product.imageUrls || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  // Handle form input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "imageUrls" && files) {
      setProductData({
        ...productData,
        imageUrls: Array.from(files), // Handle multiple files
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
  };

  // Handle image removal
  const handleRemoveImage = (imageUrl: string) => {
    setImagesToRemove([...imagesToRemove, imageUrl]);
    setExistingImages(existingImages.filter((img) => img !== imageUrl));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    // Append only fields that have been modified
    if (productData.name !== "") formData.append("name", productData.name);
    if (productData.description !== "")
      formData.append("description", productData.description);
    if (productData.price !== 0)
      formData.append("price", productData.price.toString());
    if (productData.category !== "")
      formData.append("category", productData.category);
    if (productData.stock !== 0)
      formData.append("stock", productData.stock.toString());
    if (productData.offer !== 0)
      formData.append("offer", productData.offer.toString());

    // Append new images if selected
    productData.imageUrls.forEach((file) => {
      formData.append("imageUrls", file);
    });

    // Append images to remove
    imagesToRemove.forEach((imageUrl) => {
      formData.append("imagesToRemove[]", imageUrl);
    });

    try {
      const response = await axios.patch(
        `http://localhost:5000/admin/editProduct/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const result = response.data;
      if (response.status === 200) {
        console.log(result.message);
      } else {
        console.log("Failed to update product: " + result.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      console.log("An error occurred while updating the product.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={productData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={productData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={productData.stock}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Offer:</label>
        <input
          type="number"
          name="offer"
          value={productData.offer}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Upload New Images:</label>
        <input type="file" name="imageUrls" onChange={handleChange} multiple />
      </div>
      <div>
        <label>Existing Images:</label>
        {existingImages.map((imgUrl, index) => (
          <div key={index}>
            <img src={imgUrl} alt={`product-image-${index}`} />
            <button type="button" onClick={() => handleRemoveImage(imgUrl)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProductForm;

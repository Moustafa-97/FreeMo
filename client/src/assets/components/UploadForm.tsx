import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface ProductData {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  offer: number;
  imageUrls: File[]; // Handling multiple files
}

interface Result {
  message: string;
  success: boolean;
}

const UploadForm: React.FC = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result>();
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    offer: 0,
    imageUrls: [],
  });

  useEffect(() => {
    axios.get("http://localhost:5000/admin/product").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "imageUrls" && files) {
      setProductData({ ...productData, imageUrls: Array.from(files) });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price.toString());
    formData.append("category", productData.category);
    formData.append("stock", productData.stock.toString());
    formData.append("offer", productData.offer.toString());

    productData.imageUrls.forEach((file) => {
      formData.append("imageUrls", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/admin/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response) setLoading(false);
      const result = response.data;

      if (result?.success) {
        console.log(result.message);
        console.log(result);
      } else {
        console.log(result);

        console.log("Failed to add product: ");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      console.log("An error occurred while uploading the file.");
    }
  };

  return (
    <>
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
          <input
            type="text"
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
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            name="imageUrls"
            onChange={handleChange}
            multiple
            required
          />
        </div>
        <button type="submit">{loading ? "Loading..." : "Submit"}</button>
      </form>

      {data &&
        data.map((da: any) => (
          <>
            <section style={{ border: "2px solid white" }}>
              <div>{da.name}</div>
              <div>{da.description}</div>
              <div>{da.price}</div>
              <div>{da.category}</div>
              <div>{da.stock}</div>
              <div
                style={{
                  width: "100%",
                  height: "30vh",
                  margin: "auto",
                  objectFit: "cover",
                }}
              >
                {da.imageUrls.map((img: any) => (
                  <img
                    style={{
                      width: "30vw",
                      height: "100%",
                      margin: "auto",
                      objectFit: "cover",
                    }}
                    src={img}
                    alt=""
                  />
                ))}
              </div>
              <button
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  e.preventDefault();
                  axios
                    .delete(`http://localhost:5000/admin/product/${da._id}`)
                    .then((res) => {
                      console.log(res);
                    });
                }}
              >
                DELETE
              </button>
              <button
              onClick={()=>
                navigate(`/edit/${da._id}`)
              }
              >Edit</button>
            </section>
          </>
        ))}
    </>
  );
};

export default UploadForm;

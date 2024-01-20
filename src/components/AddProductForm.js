import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductForm = ({ onAddproduct, setCount, count, setProductQty }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct, //constrol the previous state
      [name]: value,
    }));
    setProductQty(product.quantity);
  };

  const isFormValid = () => {
    if (!product.name || !product.quantity || !product.price) {
      setError("Please fill all fields......");
      return false;
    }

    return true;
  };

  const handleAddProduct = () => {
    console.log(" added products are", product);
    //after adding restart input fields
    if (isFormValid()) {
      const updateCount = count + 1;
      setCount(updateCount);

      const existingProducts =
        JSON.parse(localStorage.getItem("products")) || [];
      // Create a new array with the existing products and the new product
      const updatedProducts = [...existingProducts, product];
      // Store the updated array back to local storage
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      // Update the count in local storage
      localStorage.setItem("count", parseInt(updateCount));

      onAddproduct(product);
      setProduct({
        name: "",
        quantity: 0,
        price: 0,
      });

      //setCount((increasecounter)=>increasecounter+1)
      navigate("/SalesPage");
    }
  };
  return (
    <div className="  relative top-[4rem] ">
      <h2 className=" flex justify-center items-center mt-4 mb-4 text-3xl font-bold">
        Add Product
      </h2>
      <div className="flex  justify-center items-center">
        <form className="">
          <label className=" text-xl font-bold  flex flex-1  items-center">
            Product Name:-
            <input
              type="text"
              placeholder="Enter Name..."
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className=" w-72 ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
          <br />
          <label className=" text-xl font-bold  flex flex-1  items-center">
            Product Quantity:-
            <input
              type="number"
              placeholder="Enter Quantity..."
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
              className="  w-64 ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
          <br />
          <label className=" text-xl font-bold  flex flex-1  items-center">
            Product Price:-
            <input
              type="number"
              placeholder="Enter price..."
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className=" w-72 ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
          <br />
          <div className=" flex justify-center items-center">
            <button
              type="button"
              onClick={handleAddProduct}
              className=" ml-2 py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] bg-gray-300"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>

      {error && (
        <p className=" flex justify-center items-center text-red-500 text-3xl font-bold">
          {error}
        </p>
      )}
    </div>
  );
};

export default AddProductForm;

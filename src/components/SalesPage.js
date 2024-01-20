import React, { useEffect, useState } from "react";

const SalesPage = ({ productList, setProductList, count, setCount }) => {
  const [error, setError] = useState("");
  const [sellqty, setSellqty] = useState();
  console.log(productList);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    //data shhow in the object format
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProductList(storedProducts);
    const storedCount = JSON.parse(localStorage.getItem("count")) || [];
    setCount(storedCount);
  }, [setProductList, setCount]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    setSellqty(e.target.value);
  };
  const handleSellProduct = (productId) => {
    //get the particular index
    let updatedNewProductList = [...productList];
    //updated the partucular product quantity
    updatedNewProductList[productId].quantity -= sellqty;
    if (updatedNewProductList[productId].quantity <= 0) {
      updatedNewProductList.splice(productId, 1);
      const decreasecounter = count - 1;
      setCount(decreasecounter);
      localStorage.setItem("count", JSON.stringify(decreasecounter));
    } else {
      setError("No more products EXist....");
    }

    setProductList(updatedNewProductList);

    localStorage.setItem("products", JSON.stringify(updatedNewProductList));
  };

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //filter throught the name of the product
  return (
    <div className="">
      <div className="block  sm:block md:flex relative top-3  mb-2 ">
        <div className=" flex justify-start items-center sm:w-[50vw]  ">
          <h1 className="text-[1rem] sm:w-[20rem] md:w-[31rem] lg:w-[17rem] xl:w-[14rem] md:text-2xl font-bold">
            {" "}
            Search Products:-
          </h1>
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className=" w-72 sm:w-[23rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="  sm:block md:block md:justify-end md:items-end sm:w-[50vw] md:w-[88rem]">
          <h1 className=" text-[1rem] flex items-center relative mt-4 sm:flex md:flex-1 md:justify-end md:items-end md:left-0 md:text-2xl font-bold ">
            Number of products:-{count}
          </h1>
        </div>
      </div>
      <h1 className="text-5xl font-bold  flex flex-1 items-center justify-center">
        SalesPage
      </h1>
      <hr className="  border-black" />
      {filteredProducts.length === 0 ? (
        <p className="text-xl font-medium mt-4 flex flex-1 items-center justify-center">
          Data not available <span className="text-xl font-bold">!</span>
        </p>
      ) : (
        <div className=" mt-4 grid grid-cols-2 gap-6  md:grid md:grid-cols-3 md:gap-4 lg:grid lg:grid-cols-4 lg:gap-4  2xl:grid 2xl:grid-cols-5 2xl:gap-5 items-center">
          {filteredProducts.map((products, index) => (
            <div
              key={index}
              className=" sm:h-[20vh] md:h-auto py-5 px-5 mr-6 ml-6 rounded-lg  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-zinc-200"
            >
              <h2 className="text-xl font-medium"> Name:- {products.name}</h2>
              <p className="text-xl font-medium">
                {" "}
                Quantity:- {products.quantity}
              </p>
              <p className="text-xl font-medium"> Price:- {products.price}</p>
              <label className=" text-xl font-bold  flex flex-1  items-center">
                sell qty:-
                <input
                  type="number"
                  placeholder="qty"
                  name="qty"
                  onChange={handleInputChange}
                  className="w-16 h-8 ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
              <button className=" ml py mt-3 px"></button>
              <button
                type="button"
                onClick={() => handleSellProduct(index)}
                className="  ml-6 py-2  px-4 mt-3 font-poppins font-medium text-[15px] text-primary outline-none rounded-[10px] bg-gray-300  hover:bg-[#00800cdb] sm:relative sm: bottom-[3.1rem] w-[6rem] sm:left-[8.7rem] h-[2.6rem] md:bottom-0 md:left-0 lg:bottom-0 lg:left-0 xl:bottom-[3.1rem] xl:left-[8.7rem]"
              >
                Sell
              </button>
            </div>
          ))}
        </div>
      )}
      {error && (
        <p className=" flex justify-center items-center text-red-500 text-3xl font-bold">
          {error}
        </p>
      )}
    </div>
  );
};

export default SalesPage;

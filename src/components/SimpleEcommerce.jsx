import React, { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    category: "Electronics",
    price: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    category: "Fashion",
    price: 50,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    category: "Home",
    price: 30,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    category: "Electronics",
    price: 200,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Product 5",
    category: "Fashion",
    price: 70,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Product 6",
    category: "Books",
    price: 25,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Product 7",
    category: "Toys",
    price: 40,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Product 8",
    category: "Sports",
    price: 120,
    image: "https://via.placeholder.com/150",
  },
];

const SimpleEcommerce = () => {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Handle Remove from Cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  // Filter Products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories for filter options
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        {/* Search and Filter */}
        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 border rounded-md w-full max-w-sm"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 border rounded-md ml-4"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-lg font-semibold text-green-600">
                ${product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Shopping Cart */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl text-center font-bold text-gray-800">
            Shopping Cart
          </h2>
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div>
              {cart.map((product, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mt-4 p-4 bg-gray-200 rounded-md"
                >
                  <span className="text-gray-700">
                    {product.name} - ${product.price}
                  </span>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-4 text-right">
                <p className="font-bold text-lg text-gray-800">
                  Total: $
                  {cart.reduce((total, product) => total + product.price, 0)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleEcommerce;

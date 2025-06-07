import { useEffect, useState } from "react";
import GroceryCards from "./GroceryCard";

const Grocery = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [barSearch, setBarSearch] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const proxyUrl =
        "https://corsproxy.io/?" +
        encodeURIComponent(
          "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP"
        );
      const response = await fetch(proxyUrl);
      const json = await response.json();

      // Extract groceries list
      const groceries =
        json?.data?.widgets?.[1]?.data?.filteredProductsV2?.products || [];

      console.log("Fetched groceries:", groceries);

      setGroceryItems(groceries);
      setFilteredItems(groceries);
    } catch (error) {
      console.error("Error fetching grocery data:", error);
    }
  };

  const handleSearch = () => {
    const searchFiltered = groceryItems.filter((item) =>
      item?.product?.productName
        ?.toLowerCase()
        .includes(barSearch.toLowerCase())
    );
    setFilteredItems(searchFiltered);
  };

  return (
    <div className="max-w-7xl mx-auto my-8 bg-white rounded-2xl shadow-2xl p-6 transition-transform duration-500 ease-in-out hover:scale-105">
      {/* Header & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between pb-6">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-4 md:mb-0">
          🛒 Grocery Items
        </h1>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            className="border border-gray-400 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
            placeholder="Search groceries..."
            value={barSearch}
            onChange={(e) => setBarSearch(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Grocery Cards or Loader */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((details) => (
            <GroceryCards
              key={details.product.productId}
              resGrocery={details}
            />
          ))
        ) : (
          <div className="col-span-full text-center">
            <img
              src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif"
              alt="Loading..."
              className="mx-auto h-40 rounded-2xl"
            />
            <p className="text-lg font-bold mt-2 text-gray-700">
              Loading groceries...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Grocery;

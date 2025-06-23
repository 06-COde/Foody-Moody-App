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
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-sky-100 via-white to-sky-100 p-6 rounded-xl shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          🛒 Grocery Items
        </h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search groceries..."
            value={barSearch}
            onChange={(e) => setBarSearch(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition-all duration-200"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="mx-auto h-40 rounded-2xl shadow-lg"
            />
            <p className="text-lg font-semibold mt-2 text-gray-600">
              Loading groceries...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Grocery;

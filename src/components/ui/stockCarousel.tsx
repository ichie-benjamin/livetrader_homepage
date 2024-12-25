import { motion } from "framer-motion";

// Define the stocks array
const stocks = [
  {
    symbol: "AAPL",
    name: "APPLE INC",
    price: "254.72",
    change: "+4.92 (+1.97%)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    symbol: "MCD",
    name: "MCDONALD'S",
    price: "292.53",
    change: "+2.57 (+0.89%)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/McDonald%27s_logo.svg",
  },
];

// Define the StockCard component
const StockCard = ({ stock }: { stock: (typeof stocks)[0] }) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 flex flex-col items-center">
      <img src={stock.logo} alt={stock.name} className="h-12 w-12 mb-4" />
      <h3 className="text-lg font-bold">{stock.symbol}</h3>
      <p className="text-gray-500">{stock.name}</p>
      <p className="text-xl font-semibold mt-2">{stock.price} USD</p>
      <p
        className={`mt-1 font-medium ${
          stock.change.startsWith("+") ? "text-green-500" : "text-red-500"
        }`}
      >
        {stock.change}
      </p>
    </div>
  );
};

// Define the StockCarousel component
const StockCarousel = () => {
  return (
    <motion.div
      className="flex gap-6 overflow-hidden"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      {stocks.map((stock, index) => (
        <motion.div
          key={index}
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <StockCard stock={stock} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StockCarousel;

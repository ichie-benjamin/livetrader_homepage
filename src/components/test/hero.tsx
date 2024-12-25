import Herophone from "/equitymarketspro/hero_iphone.png";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const HeroSection: React.FC = () => {
  return (
    <section className="text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[url('/equitymarketspro/hero_bg.jpg')] bg-center bg-cover w-full text-white overflow-hidden h-[89vh]">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img className="w-full h-full object-cover" src={Herophone} alt="Hero Background" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl p-2 sm:p-5 mx-auto relative z-10 flex flex-col items-start justify-center h-full text-start text-white">
          <div className="grid grid-cols-1 md:grid-cols-12 z-10">
            <div className="max-w-3xl  col-span-7 md:ps-4">
              <h1 className="text-4xl md:text-5xl font-bold lg:leading-tight">
                Trade with confidence on the world's leading social trading platform
              </h1>
              <p className="mt-4 sm:mt-6 text-lg md:text-xl">
                Join millions who’ve already discovered smarter investing in multiple types of assets. Choose an investment product to start with.
              </p>
            </div>
            <div className="col-span-5">
              <img src={Herophone} className="h-full -z-10" alt="Hero Phone" />
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Section */}
      <div className="z-30 hidden lg:grid grid-cols-3 gap-4 md:gap-6 max-w-7xl p-2 xl:p-10 sm:p-5 mx-auto -translate-y-1/3">
        {[
          {
            title: "Stocks & ETFs",
            description: "Invest in stocks with 0% commission. Buy in bulk or just a fraction.",
            button: "Open Account",
            image: "/equitymarketspro/amzn.png",
          },
          {
            title: "Cryptocurrencies",
            description: "Buy, sell and store Bitcoin and other leading cryptos with ease.",
            button: "Buy Cryptocurrencies",
            image: "/equitymarketspro/eth.png",
          },
          {
            title: "CFD Trading",
            description: "Go long or short on FX from just 1 pip. Trade commodities and indices with flexible leverage.",
            button: "Trade Now",
            image: "/equitymarketspro/nsdq.png",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl z-50 shadow-lg">
            <div className="p-5 lg:p-10">
              <h4 className="text-2xl font-bold">{item.title}</h4>
              <p className="text-gray-500 py-3">{item.description}</p>
              <div>
                <Link to="#" className="text-lg font-bold transition transform ease-out delay-100 hover:text-hBlue text-orange">
                  Learn More
                </Link>
              </div>
              <button className="bg-hBlue px-6 py-3 my-4 rounded font-semibold text-white hover:bg-orange">
                {item.button}
              </button>
            </div>
            <div className="flex justify-end py-5 -mt-10">
              <img src={item.image} className="w-full" alt={item.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Small Screen Section */}
      <div className="px-4 hidden sm:flex lg:hidden">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl">
          <span className="font-bold">Choose an investment product to get started</span> and discover why over 200 million users trust our company
        </h2>
      </div>
      <div className="z-30 lg:hidden grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl p-2 xl:p-10 sm:p-5 mx-auto">
        {[
          {
            title: "Stocks & ETFs",
            description: "Invest in stocks with 0% commission. Buy in bulk or just a fraction.",
            image: "/equitymarketspro/amzn.png",
          },
          {
            title: "Cryptocurrencies",
            description: "Buy, sell and store Bitcoin and other leading cryptos with ease.",
            image: "/equitymarketspro/eth.png",
          },
          {
            title: "CFD Trading",
            description: "Go long or short on FX from just 1 pip. Trade commodities and indices with flexible leverage.",
            image: "/equitymarketspro/nsdq.png",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl z-50">
            <div className="p-5 lg:p-10">
              <h4 className="text-2xl font-bold">{item.title}</h4>
              <p className="text-gray-500 py-3">{item.description}</p>
              <div>
                <Link to="#" className="text-lg font-bold transition transform ease-out delay-100 hover:text-hBlue text-orange">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-end py-5 -mt-10">
              <img src={item.image} className="w-full" alt={item.title} />
            </div>
          </div>
        ))}
      </div>

      {/* New to Trading Section */}
      <div className="xl:-mt-64 lg:-mt-48 max-w-7xl p-2 xl:p-10 sm:p-5 mx-auto">
        <div className="bg-gray lg:bg-brown text-white max-w-7xl mx-auto flex justify-between items-center rounded-xl">
          <div className="flex flex-col justify-center sm:ps-10 p-5 sm:p-0 sm:py-10 md:py-0">
            <h2 className="text-3xl font-bold mb-4">New to Trading?</h2>
            <p className="mb-4">
              Discover CopyTrader™: Replicate the trading strategies of top-performing traders
            </p>
            <div className="flex md:space-x-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hidden md:flex">CopyTrader™</button>
              <button className="font-bold flex items-center">
                Learn More <span className="md:hidden"><FaAngleRight /></span>
              </button>
            </div>
          </div>
          <div className="relative hidden md:flex justify-end w-full mt-20 items-baseline h-full">
            <img src="/equitymarketspro/new.png" className="max-h-36 rounded-br-2xl" alt="New to Trading" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// App.tsx
import React from "react";
import Navbar from "../components/home/navigation/navbar";
// import Hero from '../components/test/hero';
import HeroSection from "../components/test/hero";
import Stock from "/equitymarketspro/stock.png";
// import StockCarousel from "../components/ui/stockCarousel";
import Trade from "../components/test/trade";
import Investors from "../components/ui/investors";
import Testimonial from "../components/ui/testimonial";
import Logo from "../components/ui/logo";
const equitymarketspro: React.FC = () => {
  const traders = [
    {
      name: "rubymza",
      fullName: "Heloise Greeff",
      gain: "50.33%",
      risk: 4,
      profilePic: "/equitymarketspro/4.jpg", // Replace with actual image
    },
    {
      name: "CPHequities",
      fullName: "Blue Screen Media ApS",
      gain: "97.34%",
      risk: 4,
      profilePic: "/equitymarketspro/CPHequities.jpg", // Replace with actual image
    },
    {
      name: "Miyoshi",
      fullName: "Victor Pedersen",
      gain: "22.74%",
      risk: 4,
      profilePic: "/equitymarketspro/Miyoshi.jpg", // Replace with actual image
    },
  ];

  return (
    <div className="font-mono- font-serif bg-gray-100">
      <Navbar />
      <HeroSection />
      <section className="bg-white py-10">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-full flex items-center">
              <img src={Stock} alt="" />
            </div>
            <div>
              <div className=" text-gray-900 p-4 sm:p-8 md:pe-20 rounded-md  flex flex-col  items-start text-brown">
                {" "}
                <h2
                  className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4"
                  style={{ fontFamily: "YourFontFamily" }}
                >
                  100% stocks, 0% commission
                </h2>{" "}
                <p
                  className="font-extralight text-xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 text-start"
                  style={{ fontFamily: "Open Sans" }}
                >
                  The advantages of buying stocks with our company don’t end
                  with pricing. There are also no limits on commission-free
                  trades and you can buy fractional shares.
                </p>
                <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded">
                  Invest in Stocks
                </button>{" "}
                <p className="mt-4 text-xs sm:text-sm text-gray-500">
                  Zero-commission means that no broker fee will be charged when
                  opening or closing the position and does not apply to short or
                  leveraged positions. Other fees apply including FX fees on
                  non-USD deposits and withdrawals. Your capital is at risk.
                </p>{" "}
                <p className="mt-2 text-xs sm:text-sm text-gray-500">
                  For clients with accounts under ASIC regulation (only): 0%
                  commission stock trading is only available on US stock
                  exchanges and provided by ARSN 637 489 466, promoted by our
                  company AUS Capital Limited AFSL 491139. All other stocks are
                  offered as derivatives and bear commission.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto text-brown font-sans sm:px-8 px-3">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-extralight">
                  <span className="font-bold pe-2">Trade and invest</span>
                  in top stocks and ETFs. Trade currency pairs, Indices and
                  Commodities via CFDs. Investing in the financial markets has
                  never been easier.
                </h1>
                <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded my-5 sm:my-10">
                  Start Trading
                </button>{" "}
                <div className="md:border-s border-gray-300 ps-4">
                  <h2 className="text-5xl font-bold text-orange-500">
                    355,047,128
                  </h2>
                  <p className="text-gray-500 mt-2">
                    TRADES OPEN ON OUR COMPANY
                  </p>
                </div>
              </div>
              <div>
                <Trade />
              </div>
            </div>
          </div>
          <div className="p-3">
<h4 className="text-gray-500 text-center my-5 ms:my-10 md:my-20 font-sans font-light text-sm">
Data from our company 11/3/2021, 11:04:43 AM. Past performance is not an indication of future results. Your capital is at risk.


</h4>
          </div>
        </div>
      </section>

      <section className="max-w-6xl p-2 mx-auto py-10 md:py-24 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sm:px-5  order-2 md:order-1">
            <div className="max-w-2xl mx-auto hidden lg:flex flex-col">
              {traders.map((trader, index) => (
                <div
                  key={index}
                  className="flex items-center max-h-48 h-full  bg-white shadow-md rounded-lg mb-4 p-4- border border-gray-200 relative"
                >
                  {/* Profile Picture */}
                  <img
                    src={trader.profilePic}
                    alt={trader.name}
                    className="w-full- max-h-min max-w-40 h-36- object-cover mr-4"
                  />

                  {/* Info Section */}
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-2xl  font-semibold text-gray-700">
                      {trader.name}
                    </h2>
                    <p className="text-sm text-gray-500 ">{trader.fullName}</p>
                    <p className="text-2xl font-bold text-orange-500 mt-2 font-sans">
                      {trader.gain}
                    </p>
                    <p className="text-sm text-gray-400"> GAIN (LAST 12M)</p>
                  </div>

                  <div className="h-32 b border-s px-2 flex flex-col items-end justify-end">
                    {/* Risk */}
                    <div className="h-fit">
                      <div className="flex items-center justify-center w-12 h-12  rounded border border-orange">
                        <span className="text-lg font-semibold text-orange-500">
                          {trader.risk}
                        </span>
                      </div>
                      <p className="font-semibold text-center"> Risk</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto lg:hidden p-3 ">
              {traders.map((trader, index) => (
                <div
                  key={index}
                  className="  bg-white shadow-md rounded-lg mb-4 p-4- border border-gray-200  rounded-bl-lg"
                >
                  <div className="grid grid-cols-2 gap-4 items-center w-full">
                    <div>
                      <img
                        src={trader.profilePic}
                        alt={trader.name}
                        className="w-full-  w-full max-h-20 object-cover mr-4"
                      />
                    </div>

                    <div>
                      <h2 className="text-lg sm:text-2xl  font-semibold text-gray-700">
                        {trader.name}
                      </h2>
                      <p className="text-sm text-gray-500 ">
                        {trader.fullName}
                      </p>
                    </div>
                  </div>
                  {/* Profile Picture */}
                  <div className="grid grid-cols-2 justify-between px-4 mt-5">
                    <div className="flex-1-">
                      <p className="text-2xl font-bold text-orange-500 mt-2 font-sans">
                        {trader.gain}
                      </p>
                      <p className="text-sm text-gray-400"> GAIN (LAST 12M)</p>
                    </div>
                    <div>
                      <div className="px-2 flex flex-col items-end justify-end">
                        {/* Risk */}
                        <div className="h-fit border-s ps-4">
                          <div className="flex items-center justify-center w-20 h-12  rounded border-2 border-orange">
                            <span className="text-lg font-semibold text-orange-500">
                              {trader.risk}
                            </span>
                          </div>
                          <p className="font-semibold text-center"> Risk</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                </div>
              ))}
            </div>
          </div>
          <div className=" order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-extralight font-sans">
              Join the Social Trading revolution. Connect with other traders,
              discuss trading strategies, and use our patented{" "}
              <span className="font-bold pe-2"> CopyTrader™</span> technology to
              automatically copy their trading portfolio performance.
            </h1>
            <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded my-5 sm:my-10">
              Discover People
            </button>{" "}
            <div>
              <img src="/equitymarketspro/speed-meter.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className=" py-10 md:py-24 bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl p-2 sm:p-5 mx-auto">
          <div className=" order-2 md:order-1 px-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-extralight font-sans">
              <span className="font-bold pe-2">
                {" "}
                Explore an ever-expanding variety of cryptocurrencies,
              </span>{" "}
              and buy and sell the underlying asset on our company’s
              Cryptocurrency Trading Platform. Build your crypto-based portfolio
              and enjoy benefits not offered by most exchanges, such as
              near-immediate execution of market orders.
            </h1>
            <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded my-5 sm:my-10">
              Explore Crytocurrencies
            </button>{" "}
            <div>
              <p className="text-xs text-gray-300 max-w-96">
                Cryptocurrencies are a highly volatile investment product. No
                investor protection. Your capital is at risk.
              </p>
            </div>
          </div>
          <div className="md:px-10 sm:px-5 order-1 md:order-2">
            <div className="h-full">
              <img
                src="/equitymarketspro/crypto.jpg"
                className="h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Investors />
      <Testimonial />

      <section className="bg-white py-5 sm:pt-10 md:pt-20">
        <div className="w-full flex flex-col justify-center items-center text-2xl md:text-3xl lg:text-3xl font-extralight font-sans pb-5 sm:pb-10 md:pb-20 text-gray-700 max-w-5xl- mx-auto">
          <h2 className="font-bold text-center">
            The global leader of social trading
          </h2>
          <h2 className="text-center">
            Discover why millions of users from over 140 countries choose to
            trade with our company
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-3">
          <div className=" flex md:flex-col gap-4">
            <div className="flex justify-end">
              <img
                src="/equitymarketspro/Regulated.png"
                className="md:mx-auto md:max-w-40 max-w-52"
                alt=""
              />
            </div>
            <div className="w-full md:flex md:flex-col md:justify-center items-center text-xl font-extralight font-sans pb-5 sm:pb-10 md:pb-20 text-gray-700 max-w-5xl- md:mx-auto">
              <h2 className="font-bold md:text-center">Regulated </h2>
              <h2 className="md:text-center">
                Our company is regulated by the{" "}
                <span className="font-semibold">FCA</span>
              </h2>
            </div>
          </div>
          <div className=" flex md:flex-col gap-4">
            <div className="flex justify-end">
              <img
                src="/equitymarketspro/Security.png"
                className="md:mx-auto md:max-w-40 max-w-52"
                alt=""
              />
            </div>
            <div className="w-full md:flex md:flex-col md:justify-center items-center text-xl font-extralight font-sans pb-5 sm:pb-10 md:pb-20 text-gray-700 max-w-5xl- md:mx-auto">
              <h2 className="font-bold md:text-center">Security </h2>
              <h2 className="md:text-center">
                Your funds are protected by industry-leading security protocols
              </h2>
            </div>
          </div>
          <div className=" flex md:flex-col gap-4">
            <div className="flex justify-end">
              <img
                src="/equitymarketspro/Privacy.png"
                className="md:mx-auto md:max-w-40 max-w-52"
                alt=""
              />
            </div>
            <div className="w-full md:flex md:flex-col md:justify-center items-center text-xl font-extralight font-sans pb-5 sm:pb-10 md:pb-20 text-gray-700 max-w-5xl- md:mx-auto">
              <h2 className="font-bold md:text-center">Privacy</h2>
              <h2 className="md:text-center">
                We will never share your private data without your permission
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center font-light mx-auto max-w-6xl">
          <hr className="w-full h-1"/>
          <h2 className="text-sm md:text-lg whitespace-nowrap px-2">We Accept
          </h2>
          <hr className="w-full h-1"/>
          
        </div>

      </section>
      <section className="bg-white pb-20">
        <Logo />
      </section>
      <section className="">
        <div className="bg-[url('/citationinvest/ready.webp')] bg-center bg-cover w-full">
          <div className="flex justify-between items-center py-10 sm:py-14 max-w-5xl mx-auto px-2 sm:px-5 ">
            <div>
              <h1 className="text-4xl md:text-[44px]- font-bold lg:leading-tight text-gray-200">
                Ready to get started?
              </h1>
            </div>
            <div>
              <button className="bg-hBlue px-8 py-2.5 rounded font-semibold text-white hover:bg-hBlue/70">
                Open Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default equitymarketspro;

import Hero from "/forex/hero.webp";
import { FaCircleCheck } from "react-icons/fa6";
import { Navbar } from "../components";
import Strength from "/forex/strength-bg.webp";
import { Link } from "react-router-dom";
import Dropdown from "../components/ui/drop";
import { config } from "../constants";
const rangeOfMarkets = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-[60vh]  overflow-hidden">
        <img
          src={Hero}
          alt="hero image"
          className="w-full absolute h-full object-cover top-0 left-0 "
        />
        <div className="relative z-10 flex-col flex items-center justify-center h-full bg-black/70-">
          <div className="max-w-2xl">
            <h1 className="text-gray-300 md:text-4xl sm:text-3xl text-2xl font-extrabold text-center">
              Forex{" "}
            </h1>
            <p className="text-xs md:text-base text-gray-400 text-center mt-10">
              The IC Markets Global Forex offering is one of the most
              competitive in the world. Access the world’s largest and most
              liquid market with Raw spreads starting from 0.0 pips.
            </p>
            <div className="my-10 flex items-center gap-4 justify-center">
              <Link
                to={config.login_url}
                className="bg-hBlue text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Start Trading
              </Link>
            </div>
          </div>
        </div>
      </div>

      
      <div className="p-2 sm:p-4 mt-5 sm:mt-16">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-xl grid gap-4 -lg:gap-8 grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 200"
              width="100"
              height="200"
              className=""
            >
              {/* <!-- Dollar Sign --> */}
              <text
                x="50%"
                y="50%"
                font-size="100"
                text-anchor="middle"
                fill="gold"
                font-family="Arial"
                font-weight="light"
              >
                $
              </text>

              {/* <!-- Decorative Swirls --> */}
              <path
                d="M 40 30 Q 45 60 55 60 Q 45 80 40 120"
                stroke="green"
                stroke-width="4"
                fill="none"
              />
              <path
                d="M 60 30 Q 55 60 45 60 Q 55 80 60 120"
                stroke="green"
                stroke-width="4"
                fill="none"
              />
            </svg>
            <div className="p-6 -mt-20">
              <h1 className="text-4xl text-gray-700 font-bold my-4">
                Forex CFD
              </h1>
              <h6 className="text-gray-600 font-bold">
                The Forex market provides traders the opportunity to trade 24
                hours a day, 5 days a week in the world’s most liquid financial
                market. Traders can take advantage of some of the tightest
                spreads, superior execution, and deep liquidity across 61
                currency pairs.
              </h6>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    See Our
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Spreads
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    Download
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Product Details
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    {" "}
                    Popular Account
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Raw Spread
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 p-6 text-gray-500">
            <div className="bg-slate-950 rounded-xl w-full h-full p-4 ">
              <h6 className="text-xs font-bold text-gray">Forex</h6>
              <h3 className="font-semibold text-lg sm:text-3xl">Forex</h3>
              <hr className="border-gray-900 my-3" />
              <div>
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  61 currency pairs
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Tight spreads from 0.0 pips
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Up to 1:1000 leverage
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Deep liquidity
                </div>
                <hr className="border-gray-900 my-5" />

                <button className="hover:bg-hBlue bg-hBlue sm:bg-transparent hover:text-gray-900 text-gray-900 sm:text-gray-500 text-sm border border-hBlue w-full rounded py-1.5 font-bold">
                  DETAILS{" "}
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 sm:p-4 mt-5 sm:mt-5">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-xl grid gap-4 -lg:gap-8 grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 p-6 text-gray-500">
            <div className="bg-slate-950 rounded-xl w-full h-full p-4 ">
              <h6 className="text-xs font-bold text-gray">Markets</h6>
              <h3 className="font-semibold text-lg sm:text-3xl">Indices</h3>
              <hr className="border-gray-900 my-3" />
              <div>
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  25 Indices to trade from across the globe
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Up to 1:200 leverage
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  No commissions
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  All platforms
                </div>
                <hr className="border-gray-900 my-5" />

                <button className="hover:bg-hBlue bg-hBlue sm:bg-transparent hover:text-gray-900 text-gray-900 sm:text-gray-500 text-sm border border-hBlue w-full rounded py-1.5 font-bold">
                  DETAILS{" "}
                </button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="md:col-span-8">
            <img
              src="/range-of-markets/blue-lines.png"
              className="sm:max-h-36 my-4"
              alt=""
            />
            <div className="p-6 -mt-20">
              <h1 className="text-4xl text-gray-700 font-bold my-4">
                Indices CFD
              </h1>
              <h6 className="text-gray-600 font-bold">
                Gain exposure to the world’s largest equity markets through IC
                Markets Global's offering of global Indices CFDs. With spreads
                from 0.4 points on 25 Indices, traders can take a wider view of
                equities markets whilst enjoying commission free and 24/5
                trading across major markets.
              </h6>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    See Our
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Spreads
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    Download
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Product Details
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    {" "}
                    Popular Account
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Raw Spread
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 sm:p-4 mt-5 sm:mt-5">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-xl grid gap-4 -lg:gap-8 grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8">
            <img
              src="/range-of-markets/comodities.png"
              className="sm:max-h-36 my-4"
              alt=""
            />
            <div className="p-6 -mt-20">
              <h1 className="text-4xl text-gray-700 font-bold my-6">
                Commodities CFD
              </h1>
              <h6 className="text-gray-600 font-bold my-3">
                Trade energy, agriculture and metals products like a currency
                pair against the USD or as a Futures CFD. We have combined tight
                pricing and flexible lot sizes from 10c per point to give you
                one powerful product.
              </h6>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    See Our
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Spreads
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    Download
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Product Details
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    {" "}
                    Popular Account
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Raw Spread
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 p-6 text-gray-500">
            <div className="bg-slate-950 rounded-xl w-full h-full p-4 ">
              <h6 className="text-xs font-bold text-gray">Markets</h6>
              <h3 className="font-semibold text-lg sm:text-3xl">Commodities</h3>
              <hr className="border-gray-900 my-3" />
              <div>
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Over 20 CFDs on Commodities to trade
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Energy, agriculture and metals
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Spot and Futures CFDs
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Up to 1:1000 leverage
                </div>
                <hr className="border-gray-900 my-5" />

                <button className="hover:bg-hBlue bg-hBlue sm:bg-transparent hover:text-gray-900 text-gray-900 sm:text-gray-500 text-sm border border-hBlue w-full rounded py-1.5 font-bold">
                  DETAILS{" "}
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 sm:p-4 mt-5 sm:mt-5">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-xl grid gap-4 -lg:gap-8 grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 p-6 text-gray-500">
            <div className="bg-slate-950 rounded-xl w-full h-full p-4 ">
              <h6 className="text-xs font-bold text-gray">Markets</h6>
              <h3 className="font-semibold text-lg sm:text-3xl">Stocks</h3>
              <hr className="border-gray-900 my-3" />
              <div>
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  +2100 stocks from ASX, Nasdaq & NYSE
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Earn dividends
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  MT5
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Up to 1:20 leverage
                </div>
                <hr className="border-gray-900 my-5" />

                <button className="hover:bg-hBlue bg-hBlue sm:bg-transparent hover:text-gray-900 text-gray-900 sm:text-gray-500 text-sm border border-hBlue w-full rounded py-1.5 font-bold">
                  DETAILS{" "}
                </button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="md:col-span-8">
            <img
              src="/range-of-markets/stock.png"
              className="sm:max-h-28 my-10"
              alt=""
            />
            <div className="p-6 -mt-20">
              <h1 className="text-4xl text-gray-700 font-bold my-4">
                Stocks CFD
              </h1>
              <h6 className="text-gray-600 font-bold">
                Access over +2100 large-cap Stocks CFDs across the ASX, NYSE and
                NASDAQ stock exchanges. We have selected a range of the world’s
                most popular companies to give you the best trading
                opportunities.
              </h6>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    See Our
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Spreads
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    Download
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Product Details
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    {" "}
                    Popular Account
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Raw Spread
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 sm:p-4 mt-5 sm:mt-5">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-xl grid gap-4 -lg:gap-8 grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8">
            <img
              src="/range-of-markets/bonda.png"
              className="sm:max-h-28 my-7 ms-3"
              alt=""
            />
            <div className="p-6 -mt-20">
              <h1 className="text-4xl text-gray-700 font-bold my-6">
                Bonds CFD
              </h1>
              <h6 className="text-gray-600 font-bold my-3">
                Bonds offer traders the opportunity to speculate on interest
                rates and global risk on/off sentiment, hedging equities
                exposure and to diversify their strategy. Choose from a range of
                Bonds issued by governments around the world including Japan,
                Europe, the U.K, and the U.S.
              </h6>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    See Our
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Spreads
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    Download
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Product Details
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    {" "}
                    Popular Account
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Raw Spread
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 p-6 text-gray-500">
            <div className="bg-slate-950 rounded-xl w-full h-full p-4 ">
              <h6 className="text-xs font-bold text-gray">Markets</h6>
              <h3 className="font-semibold text-lg sm:text-3xl">Bonds</h3>
              <hr className="border-gray-900 my-3" />
              <div>
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Over 9 Bonds available to trade
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  No commissions
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Up to 1:200 leverage
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Deep Liquidity
                </div>
                <hr className="border-gray-900 my-5" />

                <button className="hover:bg-hBlue bg-hBlue sm:bg-transparent hover:text-gray-900 text-gray-900 sm:text-gray-500 text-sm border border-hBlue w-full rounded py-1.5 font-bold">
                  DETAILS{" "}
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 sm:p-4 mt-5 sm:mt-5">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-xl grid gap-4 -lg:gap-8 grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 p-6 text-gray-500">
            <div className="bg-slate-950 rounded-xl w-full h-full p-4 ">
              <h6 className="text-xs font-bold text-gray">Markets</h6>
              <h3 className="font-semibold text-lg sm:text-3xl">
                Cryptocurrency
              </h3>
              <hr className="border-gray-900 my-3" />
              <div>
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  21 of the most popular Cryptocurrency
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Trade the market 7 days a week
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Long or short
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-start text-[10px] font-bold">
                  <div>
                    {" "}
                    <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  </div>
                  1:200 Leverage MetaTrader4/MT5 1:5 Leverage cTrader and
                  TradingView
                </div>
                <hr className="border-gray-900 my-5" />

                <button className="hover:bg-hBlue bg-hBlue sm:bg-transparent hover:text-gray-900 text-gray-900 sm:text-gray-500 text-sm border border-hBlue w-full rounded py-1.5 font-bold">
                  DETAILS{" "}
                </button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="md:col-span-8">
            <img
              src="/range-of-markets/cryptocurrency.png"
              className="sm:max-h-28 my-10 mx-6"
              alt=""
            />
            <div className="p-6 -mt-20">
              <h1 className="text-4xl text-gray-700 font-bold my-4">
                Stocks CFD
              </h1>
              <h6 className="text-gray-600 font-bold">
                Access over +2100 large-cap Stocks CFDs across the ASX, NYSE and
                NASDAQ stock exchanges. We have selected a range of the world’s
                most popular companies to give you the best trading
                opportunities.
              </h6>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    See Our
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Spreads
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    Download
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Product Details
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    {" "}
                    Popular Account
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Raw Spread
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 sm:p-4 my-5 sm:mt-5">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-xl grid gap-4 -lg:gap-8 grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8">
            <img
              src="/range-of-markets/future.png"
              className="sm:max-h-28 my-7 mb-10 ms-7"
              alt=""
            />
            <div className="p-6 -mt-20">
              <h1 className="text-4xl text-gray-700 font-bold my-6 ">
                Futures CFD
              </h1>
              <h6 className="text-gray-600 font-bold my-3">
                Futures are one of the most popular form of CFDs. IC Markets
                Global offer a range of Futures from around the world, including
                ICE Dollar Index and CBOE VIX Index. Online Futures based CFDs
                are offered exclusively on IC Markets Global's MetaTrader 4
                Platform.
              </h6>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    See Our
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Spreads
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    Download
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Product Details
                  </p>
                </div>
                <div className="cursor-pointer hover:bg-hBlue text-gray-600 bg-slate-950 py-2 px-4 rounded-xl group sm:my-4 transition-colors duration-300 ">
                  <h4 className="text-xs font-semibold group-hover:text-gray-100 transition-colors duration-700">
                    {" "}
                    Popular Account
                  </h4>
                  <p className="font-bold mt-1 text-xl group-hover:text-gray-100 transition-colors duration-700">
                    Raw Spread
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 p-6 text-gray-500">
            <div className="bg-slate-950 rounded-xl w-full h-full p-4 ">
              <h6 className="text-xs font-bold text-gray">Markets</h6>
              <h3 className="font-semibold text-lg sm:text-3xl">Futures</h3>
              <hr className="border-gray-900 my-3" />
              <div>
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />4 Global
                  Futures available to trade
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  No commissions
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Up to 1:200 leverage
                </div>
                <hr className="border-gray-900 my-5" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Deep Liquidity
                </div>
                <hr className="border-gray-900 my-5" />

                <button className="hover:bg-hBlue bg-hBlue sm:bg-transparent hover:text-gray-900 text-gray-900 sm:text-gray-500 text-sm border border-hBlue w-full rounded py-1.5 font-bold">
                  DETAILS{" "}
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={Strength}
          alt="hero image"
          className="w-full absolute h-full object-cover top-0 left-0 "
        />
        <div className="relative z-10 flex-col flex items-center justify-center h-full bg-black/70-">
          <div className="sm:max-w-2xl w-full px-4">
            <h1 className="text-gray-300 md:text-4xl sm:text-3xl text-2xl font-extrabold text-center">
              Start trading
            </h1>
            <p className="text-xl md:text-2xl font-bol text-gray-400 text-center mt-5">
              global markets today!
            </p>
            <div className="my-10 flex flex-col sm:flex-row w-full items-center gap-4 justify-center">
            <Link to={config.signup_url}  onClick={(e) => {
    e.preventDefault(); // Prevent internal navigation
    window.open(config.signup_url, "_blank", "noopener,noreferrer");
  }} className=" bg-hBlue w-full sm:w-auto text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap">
                Open Trading Account
              </Link>

              <Link to={config.login_url}  onClick={(e) => {
    e.preventDefault(); // Prevent internal navigation
    window.open(config.login_url, "_blank", "noopener,noreferrer");
  }} className="hover:bg-hBlue w-full sm:w-auto border-hBlue border text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap">
                Try a Free Demo{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rangeOfMarkets;

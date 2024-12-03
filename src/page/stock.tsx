import Hero from "/forex/hero.webp";
import Strength from "/forex/strength-bg.webp";

import { Navbar } from "../components";
import { FaCircleCheck } from "react-icons/fa6";
import Forex from "/forex/forexImg.webp";

import { Link } from "react-router-dom";
import { config } from "../constants";
import { CiSearch } from "react-icons/ci";
import { NYSE_Stocks } from "../constants";
import { NASDAQ_Stocks } from "../constants";
import { EURONEXT } from "../constants";
import { Xetra } from "../constants";
import { London_Stock_Exchange } from "../constants";
import { Euronext } from "../constants";
import { Bolsa } from "../constants";
import { ASX } from "../constants";
const stock = () => {
  return (
    <>
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
              Stock{" "}
            </h1>
            <p className="text-xs md:text-base text-gray-400 text-center mt-10">
              Trade over +2100 large-cap Stocks CFDs across the ASX, NYSE and
              NASDAQ stock exchanges with superior execution and tight pricing
              exclusively on the IC Markets Global MetaTrader 5 platform.
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
              <h6 className="text-gray-600 font-bold">
                IC Markets Global single stock CFD give traders the ability to
                trade the world’s most popular companies such as Nvidia, Apple,
                Meta, Microsoft or BHP Billiton.
              </h6>

              <p className="text-gray-500 leading-loose mt-5 text-xs">
                We have listed the most popular stocks across the Australian and
                US markets to give you the best trading opportunities.
                Alternatively you can trade global macro themes with our special
                selection of US Exchange listed CFDs including a range of
                emerging markets Indices and popular such as the VanEck Vectors
                Gold Miners (GDX).
              </p>
              <p className="text-gray-500 leading-loose mt-5 text-xs">
                We have listed the most popular stocks across the Australian and
                US markets to give you the best trading opportunities.
                Alternatively you can trade global macro themes with our special
                selection of US Exchange listed CFDs including a range of
                emerging markets Indices and popular such as the VanEck Vectors
                Gold Miners (GDX).
              </p>
              <a
                href="#"
                className="flex flex-wrap text-hBlue mt-3 text-xs gap-1"
              >
                <h6 className="font-bold">
                  Further Information on US Stock Trading
                </h6>
                <h6 className="font-bold">
                  Further Information on US Stock Trading
                </h6>
              </a>
            </div>
          </div>
          <div className="md:col-span-4 p-6 text-gray-500">
            <div className="bg-slate-950 rounded-xl w-full h-full p-4 ">
              <h6 className="text-xs font-bold text-gray">Stock</h6>
              <h3 className="font-semibold text-lg sm:text-3xl">Facts</h3>
              <hr className="border-gray-900 my-3" />
              <div>
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  +2100 stocks
                </div>
                <hr className="border-gray-900 my-3" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  ASX, NASDAQ, NYSE
                </div>
                <hr className="border-gray-900 my-3" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Ultra fast execution
                </div>
                <hr className="border-gray-900 my-3" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Earn dividends
                </div>
                <hr className="border-gray-900 my-3" />
                <div className="flex items-center text-[10px] font-bold w-full">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  MetaTrader 5
                </div>
                <hr className="border-gray-900 my-3" />

                <button className="hover:bg-hBlue bg-hBlue sm:bg-transparent hover:text-gray-900 text-gray-900 sm:text-gray-500 text-sm border border-hBlue w-full rounded py-1 font-bold">
                  Open Account
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 my-10 text-gray-500 py-16 px-5">
        <div className="mx-auto max-w-5xl px-10">
          <h3 className="font-bold text-2xl sm:text-3xl leading text-center">
            Forex Spreads{" "}
          </h3>

          <h6 className="text-sm sm:text-base text-gray text-center my-4">
            IC Markets Global offers Forex traders some of the tightest spreads
            out of all Forex exchange brokers globally with our EUR/USD spread
            averaging 0.1 pips. Tight spreads combined with our low latency
            enterprise grade hardware makes IC Markets Global the ideal choice
            for active day traders and those using Expert Advisors. The table at
            the bottom of this page shows our minimum and average spreads across
            all of the major currency pairs.
          </h6>
        </div>
      </div>

      <div>
        <div className="max-w-5xl mx-auto grid gap-4 -lg:gap-8 grid-cols-1 md:grid-cols-12 p-2 sm:p-4 items-center">
          <div className="col-span-6 w-full justify-center md:justify-start">
            <img src={Forex} alt="" />
          </div>
          <div className="col-span-6 h-full flex items-center py-20">
            <div className="mx-auto max-w-6xl text-gray-500 flex flex-col items-center">
              <h1 className="font-bold text-center md:!text-start w-full text-4xl sm:text-3xl">
                How does Stock CFD
              </h1>
              <h6 className="text-gray my-4 ">
                Stock trading involves buying or selling a share of ownership in
                an individual company listed on an exchange such as the ASX or
                NASDAQ. Stocks are typically traded without leverage and through
                a stock exchange. Stock CFDs however can be traded using
                leverage and are done so over-the-counter (OTC). Participants
                are able to access stocks of individual companies, building
                positions in an individual company or in a specified sector of
                the economy.
              </h6>
              <h6 className="text-gray my-4 ">
                Participants often build strategies with diversification in mind
                to diversify away unsystematic risk across a number of companies
                or a range of sectors. Investors may choose to build positions
                in defensives if they are predicting volatility. Similarly,
                investors may decide to build a portfolio around a growth
                strategy consisting of small to mid-cap technology stocks.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-slate-900 py-5 sm:py-20 px-3">
        <div className="my-10 text-gray-600 max-w-5xl mx-auto">
          <div className="md:flex justify-between items-center ">
            <h3 className="font-bold text-lg sm:text-3xl w-full ">
              Stocks trading example
            </h3>
            <button className="bg-hBlue my-5 py-1.5 hover:bg-gray-300 px-4 rounded hover:text-hBlue text-gray-800 flex items-center font-bold whitespace-nowrap">
              Buying: Apple Inc (NASDAQ: AAPL)
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 w-full">
            <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
              <h6 className="font-bold">
                The gross profit on your trade is calculated as follows:
              </h6>
              <p className="text-sm font-bold mt-3">opening price</p>
              <p className="text-xs mt-1">$152 x 100 shares = USD $15,200</p>
              <hr className="border-gray-900 my-2" />
              <p className="text-sm font-bold mt-3">Closing Price</p>
              <p className="text-xs mt-1">$170 x 100 shares = USD $17,000</p>
              <hr className="border-gray-900 my-2" />
              <p className="text-sm font-bold mt-3">Gross Profit on Trade</p>
              <p className="text-xs mt-1">USD $17,000 - $15,200 = $1,800</p>
              <hr className="border-gray-900 my-2" />
            </div>
            <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
              <h6 className="font-bold">Opening the Position</h6>
              <p className="text-sm mt-3">
                Apple is trading at 150/152 and you are of the view that Apple’s
                latest product release will boost sales. You decide to purchase
                100 shares of AAPL. For each contract, one point (a price
                movement of 1) is equal to $1 USD.
              </p>
              <p className="text-sm mt-3">
                With 100 contracts, every point that the bid quote on AAPL rises
                above 152 you will make a profit of $100 USD, and for every
                point the bid quote falls below 152 you will lose $100 USD.
              </p>
            </div>
            <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
              <h6 className="font-bold">Closing the Position</h6>
              <p className="text-sm mt-3">
                1 month later, after sales results are released, the price of
                AAPL has increased to 170/172 and you decide to take profit by
                selling 100 AAPL Stock CFD contracts.
              </p>
              <p className="text-sm mt-3">
                To calculate the net profit you must include any financing or
                dividend adjustments. In the case of a ‘long’ position interest
                is credited and in the case of a ‘short’ position interest is
                debited.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto pb-5 md:pb-5">
        {/************************************************
                            section ASX 
        ************************************************/}

        <div>
          {/************************************************
                            section ASX 
        ************************************************/}
          <section className="px-2">
            <div>
              <div className="flex mt-20 md:flex-row justify-between items-center mx-2">
                <h3 className="font-bold text-xl text-center- md:text-start sm:text-4xl w-full ">
                  ASX Stock CFDs
                </h3>
              </div>

              <div className="text-xs text-gray-500 font-light my-4 px-2 flex items-center justify-between">
                <div className=" flex items-center gap-2">
                  <p className="hidden sm:flex">
                    Search by Symbol AFMNMad,mc,adcm,,dc,zcz zcz,mv cmzz
                    zcnmcmzm z mzx dmcmzxcn vmzcv z
                  </p>{" "}
                  <div className="border border-gray-800 rounded-3xl pe-3 ps-1">
                    <input
                      type="text"
                      className="py-1 pe-2 focus:outline-none focus:ring-0 max- bg-transparent"
                    />{" "}
                    <button>
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 ">
              <div className="rounded-xl !sticky top-0  w-full bg-slate-900 flex  justify-between  font-semibold p-4 rounded-">
                <h2>MT5 Symbol</h2>
                <h2>ASX Shares</h2>
              </div>
              <div className="max-h-[70vh] h-full overflow-y-auto ">
                <ul className="divide-y divide-gray-800 space-y-4 pt-4 px-4">
                  {ASX.map((ASX) => (
                    <li className="px-4 pt-4">
                      <div className="flex flex-wrap justify-between">
                        <h2 className="text-bold">{ASX.Symbol}</h2>
                        <p>{ASX.stock}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/************************************************
                            sectionNYCE 
        ************************************************/}
          <section className="px-2">
            <div>
              <div className="flex mt-20 md:flex-row justify-between items-center mx-2">
                <h3 className="font-bold text-xl text-center- md:text-start sm:text-4xl w-full ">
                  NYSE Stock CFDs
                </h3>
              </div>

              <div className="text-xs text-gray-500 font-light my-4 px-2 flex items-center justify-between">
                <div className=" flex items-center gap-2">
                  <p className="hidden sm:flex">Search by Symbol</p>{" "}
                  <div className="border border-gray-800 rounded-3xl pe-3 ps-1">
                    <input
                      type="text"
                      className="py-1 pe-2 focus:outline-none focus:ring-0 max- bg-transparent"
                    />{" "}
                    <button>
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 ">
              <div className="rounded-xl !sticky top-0  w-full bg-slate-900 flex  justify-between  font-semibold p-4 rounded-">
                <h2>MT5 Symbol</h2>
                <h2>NYSE Stocks</h2>
              </div>
              <div className="max-h-[70vh] h-full overflow-y-auto ">
                <ul className="divide-y divide-gray-800 space-y-4 pt-4 px-4">
                  {NYSE_Stocks.map((NYSC) => (
                    <li className="px-4 pt-4">
                      <div className="flex flex-wrap justify-between">
                        <h2 className="text-bold">{NYSC.Symbol}</h2>
                        <p>{NYSC.stock}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/************************************************
                          sectionNASDAQ
        ************************************************/}
          <section className="px-2">
            <div>
              <div className="flex mt-20 md:flex-row justify-between items-center mx-2">
                <h3 className="font-bold text-xl text-center- md:text-start sm:text-4xl w-full ">
                  NASDAQ Stock CFDs
                </h3>
              </div>

              <div className="text-xs text-gray-500 font-light my-4 px-2 flex items-center justify-between">
                <div className=" flex items-center gap-2">
                  <p className="hidden sm:flex">Search by Symbol</p>{" "}
                  <div className="border border-gray-800 rounded-3xl pe-3 ps-1">
                    <input
                      type="text"
                      className="py-1 pe-2 focus:outline-none focus:ring-0 max- bg-transparent"
                    />{" "}
                    <button>
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 ">
              <div className="rounded-xl !sticky top-0  w-full bg-slate-900 flex  justify-between  font-semibold p-4 rounded-">
                <h2>MT5 Symbol</h2>
                <h2> NASDAQ Stocks</h2>
              </div>
              <div className="max-h-[70vh] h-full overflow-y-auto ">
                <ul className="divide-y divide-gray-800 space-y-4 pt-4 px-4">
                  {NASDAQ_Stocks.map((NASDAQ) => (
                    <li className="px-4 pt-4">
                      <div className="flex flex-wrap justify-between">
                        <h2 className="text-bold">{NASDAQ.Symbol}</h2>
                        <p>{NASDAQ.stock}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/*********************************************
                            sectionEURONEXT
                *******************************************/}
          <section className="px-2">
            <div>
              <div className="flex mt-20 md:flex-row justify-between items-center mx-2">
                <h3 className="font-bold text-xl text-center- md:text-start sm:text-4xl w-full ">
                  EURONEXT AMSTERDAM
                </h3>
              </div>

              <div className="text-xs text-gray-500 font-light my-4 px-2 flex items-center justify-between">
                <div className=" flex items-center gap-2">
                  <p className="hidden sm:flex">Search by Symbol</p>{" "}
                  <div className="border border-gray-800 rounded-3xl pe-3 ps-1">
                    <input
                      type="text"
                      className="py-1 pe-2 focus:outline-none focus:ring-0 max- bg-transparent"
                    />{" "}
                    <button>
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 ">
              <div className="rounded-xl !sticky top-0  w-full bg-slate-900 flex  justify-between  font-semibold p-4 rounded-">
                <h2>MT5 Symbol</h2>
                <h2> EURONEXT AMSTERDAM STOCKS</h2>
              </div>
              <div className="max-h-[70vh] h-full overflow-y-auto ">
                <ul className="divide-y divide-gray-800 space-y-4 pt-4 px-4">
                  {EURONEXT.map((euAmSk) => (
                    <li className="px-4 pt-4">
                      <div className="flex flex-wrap justify-between">
                        <h2 className="text-bold">{euAmSk.Symbol}</h2>
                        <p>{euAmSk.stock}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/*********************************************
                            section Xetra
                *******************************************/}
          <section className="px-2">
            <div>
              <div className="flex mt-20 md:flex-row justify-between items-center mx-2">
                <h3 className="font-bold text-xl text-center- md:text-start sm:text-4xl w-full ">
                  Xetra (Germany)
                </h3>
              </div>

              <div className="text-xs text-gray-500 font-light my-4 px-2 flex items-center justify-between">
                <div className=" flex items-center gap-2">
                  <p className="hidden sm:flex">Search by Symbol</p>{" "}
                  <div className="border border-gray-800 rounded-3xl pe-3 ps-1">
                    <input
                      type="text"
                      className="py-1 pe-2 focus:outline-none focus:ring-0 max- bg-transparent"
                    />{" "}
                    <button>
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 ">
              <div className="rounded-xl !sticky top-0  w-full bg-slate-900 flex  justify-between  font-semibold p-4 rounded-">
                <h2>MT5 Symbol</h2>
                <h2>Xetra (Germany) STOCKS</h2>
              </div>
              <div className="max-h-[70vh] h-full overflow-y-auto ">
                <ul className="divide-y divide-gray-800 space-y-4 pt-4 px-4">
                  {Xetra.map((Xetra) => (
                    <li className="px-4 pt-4">
                      <div className="flex flex-wrap justify-between">
                        <h2 className="text-bold">{Xetra.Symbol}</h2>
                        <p>{Xetra.stock}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/*******************************************
                            section London
                *******************************************/}
          <section className="px-2">
            <div>
              <div className="flex mt-20 md:flex-row justify-between items-center mx-2">
                <h3 className="font-bold text-xl text-center- md:text-start sm:text-4xl w-full ">
                  London Stock Exchange
                </h3>
              </div>

              <div className="text-xs text-gray-500 font-light my-4 px-2 flex items-center justify-between">
                <div className=" flex items-center gap-2">
                  <p className="hidden sm:flex">Search by Symbol</p>{" "}
                  <div className="border border-gray-800 rounded-3xl pe-3 ps-1">
                    <input
                      type="text"
                      className="py-1 pe-2 focus:outline-none focus:ring-0 max- bg-transparent"
                    />{" "}
                    <button>
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 ">
              <div className="rounded-xl !sticky top-0  w-full bg-slate-900 flex  justify-between  font-semibold p-4 rounded-">
                <h2>MT5 Symbol</h2>
                <h2> London Stock Exchange </h2>
              </div>
              <div className="max-h-[70vh] h-full overflow-y-auto ">
                <ul className="divide-y divide-gray-800 space-y-4 pt-4 px-4">
                  {London_Stock_Exchange.map((London) => (
                    <li className="px-4 pt-4">
                      <div className="flex flex-wrap justify-between">
                        <h2 className="text-bold">{London.Symbol}</h2>
                        <p>{London.stock}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/*******************************************
                            section EURONEXT
                *******************************************/}
          <section className="px-2">
            <div>
              <div className="flex mt-20 md:flex-row justify-between items-center mx-2">
                <h3 className="font-bold text-xl text-center- md:text-start sm:text-4xl w-full ">
                  EURONEXT PARIS
                </h3>
              </div>

              <div className="text-xs text-gray-500 font-light my-4 px-2 flex items-center justify-between">
                <div className=" flex items-center gap-2">
                  <p className="hidden sm:flex">Search by Symbol</p>{" "}
                  <div className="border border-gray-800 rounded-3xl pe-3 ps-1">
                    <input
                      type="text"
                      className="py-1 pe-2 focus:outline-none focus:ring-0 max- bg-transparent"
                    />{" "}
                    <button>
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 ">
              <div className="rounded-xl !sticky top-0  w-full bg-slate-900 flex  justify-between  font-semibold p-4 rounded-">
                <h2>MT5 Symbol</h2>
                <h2> EURONEXT PARIS STOCKS</h2>
              </div>
              <div className="max-h-[70vh] h-full overflow-y-auto ">
                <ul className="divide-y divide-gray-800 space-y-4 pt-4 px-4">
                  {Euronext.map((Euronext) => (
                    <li className="px-4 pt-4">
                      <div className="flex flex-wrap justify-between">
                        <h2 className="text-bold">{Euronext.Symbol}</h2>
                        <p>{Euronext.stock}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/*******************************************
                            section Bolsa
                *******************************************/}
          <section className="px-2">
            <div>
              <div className="flex mt-20 md:flex-row justify-between items-center mx-2">
                <h3 className="font-bold text-xl text-center- md:text-start sm:text-4xl w-full ">
                  Bolsa Madrid
                </h3>
              </div>

              <div className="text-xs text-gray-500 font-light my-4 px-2 flex items-center justify-between">
                <div className=" flex items-center gap-2">
                  <p className="hidden sm:flex">Search by Symbol</p>{" "}
                  <div className="border border-gray-800 rounded-3xl pe-3 ps-1">
                    <input
                      type="text"
                      className="py-1 pe-2 focus:outline-none focus:ring-0 max- bg-transparent"
                    />{" "}
                    <button>
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 ">
              <div className="rounded-xl !sticky top-0  w-full bg-slate-900 flex  justify-between  font-semibold p-4 rounded-">
                <h2>MT5 Symbol</h2>
                <h2> Bolsa Madrid Stocks</h2>
              </div>
              <div className="max-h-[70vh] h-full overflow-y-auto ">
                <ul className="divide-y divide-gray-800 space-y-4 pt-4 px-4">
                  {Bolsa.map((Bolsa) => (
                    <li className="px-4 pt-4">
                      <div className="flex flex-wrap justify-between">
                        <h2 className="text-bold">{Bolsa.Symbol}</h2>
                        <p>{Bolsa.stock}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="px-2 my-5 py-5 sm:py-10 md:py-20 sm:my-14 bg-slate-900 text-gray-500">
        <div className="max-w-5xl mx-auto  items-center">
          <h3 className="font-bold text-xl md:text-start sm:text-3xl md:text-4xl w-full ">
            US STOCK TRADING
          </h3>
          <div className=" my-4">
            <p className="text-sm mt-2">
              The US Internal Revenue Service (IRS) requires all non-US resident
              holders of US equity derivatives – (this includes CFDs ) to be
              taxed on dividend adjustments.
            </p>
            <h3 className="text-xl font-bold">What does it mean for me?</h3>
            <p className="text-sm mt-2">
              When trading any US listed equities with IC Markets Global, the
              Dividend adjustments on your long positions are credited to your
              account, and the applicable withholding taxes are automatically
              deducted.
            </p>

            <h3 className="text-xl font-bold">How much will be deducted?</h3>
            <p className="text-sm mt-2">
              The deduction rate varies depending on the underlying market, but
              where a treaty between your country of residence and the relevant
              market exists, the rate may be reduced to 15%. Please note that
              the withholding tax deduction doesn't apply to short positions.
            </p>

            <h3 className="text-xl font-bold">What should I do?</h3>
            <p className="text-sm mt-2">
              If you are an INDIVIDUAL and want the applicable reduced rate,
              please fill out{" "}
              <Link to="#" className="text-hBlue text-xs font-bold">
                FORM W-8BEN
              </Link>{" "}
              and upload it to your Client Area. If you are an ENTITY and want
              the applicable reduced rate, please fill out{" "}
              <Link to="#" className="text-hBlue text-xs font-bold">
                FORM W-8BEN-E
              </Link>{" "}
              and upload it to your Client Area. For further information please
              do not hesitate to contact our{" "}
              <Link to="#" className="text-hBlue text-xs font-bold">
                SUPPORT TEAM
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="px-2 my-5 sm:my-20 text-gray-500">
        <div className="max-w-5xl mx-auto  items-center">
          <h3 className="font-bold text-xl md:text-start sm:text-3xl md:text-4xl w-full ">
            Information about ASX trading
          </h3>
          <div className=" my-4">
            <h3 className="text-xl font-bold">Market Data Fees</h3>
            <p className="text-sm mt-2">
              From the <span className="font-bold">1st September 2020</span> ,
              there will be a market data fee fixed{" "}
              <span className="font-bold">at $22 AUD per month</span>. This fee
              is charged
              <span className="font-bold">once per calendar month</span>{" "}
              directly to your account, after the end of the month in which you
              accessed the market data, e.g. the monthly data fee will be
              applied at the beginning of October to all traders who have
              accessed the market data during the month of September, and so
              forth.
            </p>
            <p className="my-4">
              If you have multiple accounts and/or if you access the market data
              multiple times,{" "}
              <span className="font-bold">you will only be charged once</span>.
              If you have access to ASX share CFDs market data you do not need
              to make any changes to your account, this charge will be
              automatically applied each month.
            </p>
            <h3 className="text-xl font-bold">
              Commission fee on ASX Share CFDs?
            </h3>
            <p className="text-sm mt-2">
              Regardless of the value of your trade, starting from the first of
              September 2020 you will be charged a minimum commission fee of $7
              AUD per trade on the spot on your account.
            </p>
          </div>
        </div>
      </section>

      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={Strength}
          alt="hero image"
          className="w-full absolute h-full object-cover top-0 left-0 "
        />
        <div className="relative z-10 flex-col flex items-center justify-center h-full bg-black/70-">
          <div className="max-w-2xl">
            <h1 className="text-gray-300 md:text-4xl sm:text-3xl text-2xl font-extrabold text-center">
              Start trading
            </h1>
            <p className="text-xl md:text-2xl font-bol text-gray-400 text-center mt-5">
              global markets today!
            </p>
            <div className="my-10 flex flex-col sm:flex-row w-full items-center gap-4 justify-center">
              <Link
                to={config.login_url}
                onClick={(e) => {
                  e.preventDefault(); // Prevent internal navigation
                  window.open(
                    config.login_url,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="hover:bg-hBlue w-full sm:w-auto border-hBlue border text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded hover:transf transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap bg-hBlue"
              >
                Open Trading Account
              </Link>
              <Link
                to={config.signup_url}
                onClick={(e) => {
                  e.preventDefault(); // Prevent internal navigation
                  window.open(
                    config.signup_url,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className=" border border-[#2955FF] hover:bg-hBlue w-full sm:w-auto text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded hover:transf transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap"
              >
                Try a Free Demo{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default stock;

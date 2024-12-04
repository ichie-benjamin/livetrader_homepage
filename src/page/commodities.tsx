import Strength from "/forex/strength-bg.webp";
import Hero from "/digitalcurrency/btc-banner.webp";
import { Navbar } from "../components";
import { FaCircleCheck } from "react-icons/fa6";
import Forex from "/forex/forexImg.webp";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Commodities } from "../constants";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { config } from "../constants";
const commodities = () => {
  return (
    <div>
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
                Commodities CFDs
              </h1>
              <p className="text-xs md:text-base text-gray-400 text-center mt-10 mx-2">
                Gain exposure to the basket of instruments making up the index
                in just one trade. The world’s most popular Indices are
                available on all IC Markets Global trading platforms.
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
        <div className="px-2 my-5 sm:mt-10">
          <div className="bg-slate-900 rounded-xl max-w-5xl mx-auto p-2 sm:p-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="-mb-16 ">
                  <img
                    src="/range-of-markets/comodities.png"
                    className="sm:max-h-36 my-4"
                    alt=""
                  />
                </div>
                <div className="sm:p-6 px-2">
                  <h6 className="text-gray-500 font-bold">
                    IC Markets Global offers a flexible and easy way to gain
                    exposure to some of the world’s most popular CFDs on
                    Commodities including energies and metals all from within
                    your MetaTrader 4, 5, cTrader and TradingView trading
                    platforms.
                  </h6>
                  <p className="text-gray-500 mt-5 ">
                    Commodity markets are attractive to speculators as they are
                    susceptible to dramatic changes in supply and demand.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 p-6 text-gray-500">
                <div className="bg-slate-950 rounded-xl w-full p-4 ">
                  <h6 className="text-xs font-bold text-gray">
                    Commodities CFDs
                  </h6>
                  <h3 className="font-semibold text-lg sm:text-3xl">Facts</h3>
                  <hr className="border-gray-900 my-3" />
                  <div>
                    <div className="flex items-start text-[10px] font-bold">
                      <div>
                        <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      </div>
                      <div>
                        <p className="mb-3">
                          25 Indices to trade fromOver 22 CFDs on Commodities to
                          trade
                        </p>
                        <div className="flex items-center text-[10px] mt-2 font-bold"></div>
                      </div>
                    </div>

                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      Energy, Agriculture and Metals
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      Spot and Futures CFDs
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold w-full">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      Leverage up to 1:1000
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold w-full">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      Spreads as low as 0.0 pips
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold w-full">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      Deep liquidity
                    </div>

                    <button className="hover:bg-hBlue mt-5 bg-hBlue sm:bg-transparent hover:text-gray-900 text-gray-900 sm:text-gray-500 text-sm border border-hBlue w-full rounded py-1 font-bold">
                      Open Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="px-2 my-5 py-5 sm:py-10 md:py-20 sm:my-14 bg-slate-900 text-gray-500">
          <div className="max-w-5xl mx-auto  items-center">
            <h3 className="font-bold text-xl md:text-start sm:text-3xl  w-full ">
              Energies{" "}
            </h3>
            <div className=" my-4">
              <p className="text-sm mt-2">
                IC Markets Global allows trading of spot energy contracts
                including Crude Oil, Brent, and Natural Gas from your chosen
                trading platform against the US Dollar. Trading energy contracts
                as a spot instrument has many advantages for investors who are
                only interested in price speculation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:gap-8">
              <div>
                <h3 className="font-bold text-xl md:text-start sm:text-3xl  w-full ">
                  Precious Metals
                </h3>
                <div className=" my-4">
                  <p className="text-sm mt-2">
                    IC Markets Global allows trading the spot price for metals
                    including Gold or Silver against the US Dollar or Euro and
                    the metals Platinum or Palladium against the US Dollar as a
                    currency pair on 1:1000 leverage.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl md:text-start sm:text-3xl  w-full ">
                  Soft CFDs on Commodities
                </h3>
                <div className=" my-4">
                  <p className="text-sm mt-2">
                    In addition to energy and metal contracts, at IC Markets
                    Global we offer a range of soft commodity products to trade,
                    including corn, soybeans, sugar, cocoa, coffee, and wheat as
                    CFDs – all with low spreads and leverage up to 1:100.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div className="max-w-5xl mx-auto grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-12 p-2 sm:p-4">
            <div className="col-span-6 w-full flex items-center  justify-center md:justify-start">
              <img src={Forex} alt="" />
            </div>
            <div className="col-span-6 h-full flex items-center py-20">
              <div className="mx-auto max-w-5xl text-gray-500 flex flex-col md:items-center">
                <h1 className="font-bold text-start w-full text-xl sm:text-2xl">
                  How does CFDs on Commodities trading work?
                </h1>
                <p className="text-gray my-2 ">
                  CFDs on Commodities cover energy, agriculture and metals
                  products. These products are traded in futures markets and
                  derive their value from demand and supply characteristics.
                </p>
                <p className="text-gray my-2 ">
                  Supply characteristics include the weather in the case of
                  agriculture and costs of extraction in the case of mining and
                  energies.
                </p>
                <p className="text-gray my-2 ">
                  Demand for CFDs on Commodities tends to be characterised by
                  broader conditions such as economic cycles and population
                  growth. CFDs on Commodities can be traded as stand alone
                  products or in pairs.
                </p>
                <p className="text-gray my-2 ">
                  Metals and energies are traded against major currencies
                  whereas agriculture futures contracts are traded as
                  stand-alone contracts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-slate-900 py-5 sm:py-20">
          <div className="sm:my-10 text-gray-600 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mx-2">
              <h3 className="font-bold text-xl text-center sm:text-start sm:text-3xl w-full ">
                Commodity trading example
              </h3>

              <button className="bg-hBlue my-5 flex-shrink-0  py-1.5 text-xs sm:text-base hover:bg-gray-300 px-4 rounded hover:text-hBlue gap-2 text-gray-800 flex items-center w-min font-bold">
                {" "}
                <span>Buying:</span>
                BTCUSD
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 w-full p-2">
              <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
                <h6 className="font-bold">
                  The gross profit on your trade is calculated as follows:
                </h6>
                <p className="text-sm font-bold mt-3">opening price</p>
                <p className="text-xs mt-1">
                  $435.25 * 100 contracts * 4 = USD $174,100
                </p>
                <hr className="border-gray-900 my-2" />
                <p className="text-sm font-bold mt-3">Closing Price</p>
                <p className="text-xs mt-1">
                  $460 * 100 contracts * 4 = USD $184,000
                </p>
                <hr className="border-gray-900 my-2" />
                <p className="text-sm font-bold mt-3">Gross Profit on Trade</p>
                <p className="text-xs mt-1">USD $184,000 - $174,100 = $9,900</p>
                <hr className="border-gray-900 my-2" />
              </div>
              <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
                <h6 className="font-bold">Opening the Position</h6>
                <p className="text-sm mt-3">
                  Wheat_N7 is currently trading at 434.00/435.25 and you are
                  expecting Australia’s East Coast crops to be affected by
                  adverse weather patterns over the coming year which will
                  result in lower than average crop yields.
                </p>
                <p className="text-sm mt-3 bg-slate-900 p-2">
                  You buy 100 contracts of Wheat (4 bushels per contract) at
                  435.25 which equals USD $174,100 (435.25 * 100 * 4).
                </p>
              </div>
              <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
                <h6 className="font-bold">Closing the Position</h6>
                <p className="text-sm mt-3">
                  Your research surrounding weather conditions turns out to be
                  correct. Lower crop yields this year have caused Wheat prices
                  to increase to 460.00/462.15. You exit your position by
                  selling your contracts at 460.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto pb-5 md:pb-5">
          <div className="flex flex-col- md:flex-row justify-between items-center mx-2">
            <h3 className="font-bold text-xl text-center- md:text-start sm:text-3xl w-full ">
              Spreads
            </h3>

            <button className="bg-hBlue my-5 flex-shrink-0  py-1.5 text-xs sm:text-base hover:bg-gray-300 px-4 rounded hover:text-hBlue gap-2 text-gray-800 flex items-center w-min font-bold">
              {" "}
              <span>Cryptocurrency </span>
              CFD
            </button>
          </div>
          <div>
            <div className="text-xs text-gray-500 font-light mb-4 px-2 flex items-center justify-between">
              <div className="hidden sm:flex">
                <h4>
                  * <span className="font-extrabold">MIN</span> - minimum,{" "}
                  <span className="font-extrabold">AVG</span> - average
                </h4>
              </div>
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
            <div className="hidden md:flex justify-between items-center mx-2 text-gray-500 bg-slate-800  md:bg-black py-2 text-sm sm:text md:py-4 px-4 mt-5 sm:mt-10 rounded-2xl">
              <h1>Product</h1>
              <h1>All Accounts</h1>
            </div>
            <div className="w-full hidden  max- h-[90vh] md:flex px-2 rounded-xl ">
              <Table className="text-gray-500 mb-10">
                <TableHeader className=" rounded-t-lg sticky top-0 w-full bg-slate-900">
                  <TableRow className="rounded-full divide-gray-900 border-gray-900 border-none  first:rounded-tl-xl last:rounded-tr-xl bg-slate-900 hover:bg-slate-900">
                    <TableHead className=" rounded-s-xl">SYMBOL</TableHead>
                    <TableHead>DESCRIPTION</TableHead>
                    <TableHead>MIN</TableHead>
                    <TableHead className="rounded-e-xl text-right">
                      AVG
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody className=" ">
                  {Commodities.map((Dct, index) => (
                    <TableRow key={index} className="text-sm border-gray-800">
                      <TableCell className="font-bold">{Dct.SYMBOL}</TableCell>
                      <TableCell>{Dct.DESCRIPTION}</TableCell>
                      <TableCell>{Dct.MIN}</TableCell>
                      <TableCell className="text-right">{Dct.AVG}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="md:hidden px-2 sm:px-4 overflow-x-hidden max-h-screen overflow-y-auto scrollbar-[2px] scrollbar-thumb-gray-700 scrollbar-track-gray-200 scrollbar-thumb-rounded w-full">
              {Commodities.map((Dct, index) => (
                <div
                  key={index}
                  className="text-gray-500 mb-4 p-2 sm:p-6 h-full flex bg-slate-900 px-2 border border-slate-800 py-4 rounded justify-between items-end custom-scrollbar custom-scrollbar custom-scrollbar custom-scrollbar custom-scrollbar"
                >
                  <div className="">
                    <h1 className="font-extrabold text-base">{Dct.SYMBOL}</h1>
                    <p className="text-xs text-gray-700 my-2">
                      {Dct.DESCRIPTION}{" "}
                    </p>
                    <p className="text-[11px] font-bold">
                      <span className="me-1">MIN: </span> {Dct.MIN}
                    </p>
                  </div>
                  <div className="h-full items-end flex">
                    <p className="text-[11px] font-bold ">
                      <span className="me-1">AVG: </span> {Dct.AVG}
                    </p>
                  </div>
                </div>
              ))}
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
            <div className="sm:max-w-2xl w-full px-4">
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
                  className=" bg-hBlue w-full sm:w-auto text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap"
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
                  className="hover:bg-hBlue w-full sm:w-auto border-hBlue border text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap"
                >
                  Try a Free Demo{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default commodities;

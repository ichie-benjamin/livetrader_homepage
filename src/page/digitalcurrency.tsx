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
// import { Exotic } from "../constants";
// import { Minor } from "../constants";
// import { Major } from "../constants";
import { Digitalcurrency } from "../constants";
import { digitalcurrencyTable } from "../constants";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { config } from "../constants";
const digitalcurrency = () => {
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
                Cryptocurrency CFDs
              </h1>
              <p className="text-xs md:text-base text-gray-400 text-center mt-10 mx-2">
                Cryptocurrencies are volatile, unregulated, decentralised and
                controlled almost exclusively by retail speculators. Trade the
                world’s newest and most exciting asset class as CFDs with an FSA
                regulated Forex CFD Provider.
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

        <div className="bg-hBlue max-w-5xl my-5 rounded p-4 text-center mx-auto  mt-5 sm:mt-16">
          <p>
            Please note that some symbols may not be available on weekends.
            Detailed trading sessions are available on the platforms.
          </p>
        </div>
        <div className="px-2">
          <div className="bg-slate-900 rounded-xl max-w-5xl mx-auto p-2 sm:p-4">
            <div className="-mb-16 ">
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
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="sm:p-6 px-2">
                  <h6 className="text-gray-600 font-bold">
                    Now you can trade Cryptocurrency 7 days a week on all IC
                    Markets Global platforms.
                  </h6>
                  <h6 className="text-gray-600 font-bold my-8">
                    The leverage available on Cryptocurrency pairs BTCUSD,
                    ETHUSD, LTCUSD and BCHUSD is now 1:200 for clients
                    registered with Raw Trading (not UK clients).
                  </h6>
                  <h6 className="text-gray-600 font-bold">
                    Unlike other asset classes (FX, Equities, CFDs on
                    Commodities, etc.), the Cryptocurrency market is dominated
                    by retail speculators. With IC Markets Global Cryptocurrency
                    CFDs, you will trade in a market where there is no central
                    bank intervention, interbank dealers controlling order flow
                    or giant pension funds moving prices.
                  </h6>
                  <p className="text-gray-500 leading-loose mt-5 text-xs">
                    Price movements on Cryptocurrencies like Bitcoin or Ethereum
                    are driven primarily by news and prevailing sentiment, i.e.
                    the fear and greed of retail speculators. These sometimes
                    dramatic shifts can lead to massive intraday price swings,
                    making Cryptocurrency CFDs an exciting product for
                    aggressive and experienced day traders.
                  </p>
                  <p className="text-gray-500 leading-loose mt-5 text-xs">
                    The IC Markets Global Cryptocurrency CFD product allows
                    traders to go long or short without actually holding the
                    Cryptocurrency. This means traders can get exposure to the
                    price of the Cryptocurrency without worrying about the
                    security risks associated with storing it and the
                    counterparty risk from the exchange. This is similar to
                    trading Energy Futures such as oil rather than owning
                    physical oil to speculate on its price.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 p-6 text-gray-500">
                <div className="bg-slate-950 rounded-xl w-full p-4 ">
                  <h6 className="text-xs font-bold text-gray">
                    Cryptocurrency CFDs{" "}
                  </h6>
                  <h3 className="font-semibold text-lg sm:text-3xl">Facts</h3>
                  <hr className="border-gray-900 my-3" />
                  <div>
                    <div className="flex items-start text-[10px] font-bold">
                      <div>
                        <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      </div>
                      <div>
                        <p className="mb-3">1:200 Leverage MetaTrader4/MT5</p>
                        <p>1:5 Leverage cTrader and TradingView</p>
                        <div className="flex items-center text-[10px] mt-2 font-bold"></div>
                      </div>
                    </div>

                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      Trade the market 7 days a week
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      Long or short
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold w-full">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      FSA regulated
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold w-full">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      REAL live support!
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

        {/* grids */}
        <section className="bg-slate-900 py-10 sm:py-20 my-5 sm:my-10 p-2 sm:p-4 m:p-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 ">
            {Digitalcurrency.map((Dc, index) => (
              <div
                key={index}
                className="max-w-lg mx-auto rounded-2xl bg-slate-950 h-full w-full p-4 sm:p-6 md text-gray-500 mb-10"
              >
                <div>
                  <img
                    src={Dc.Img}
                    className="max-w-16 rounded-full mb-2"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg sm:text-3xl">
                    {Dc.Title}
                  </h3>
                  <p className="text-gray-500 leading-loose mt-5 text-xs">
                    {Dc.Details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div>
          <div className="max-w-5xl mx-auto grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-12 p-2 sm:p-4">
            <div className="col-span-6 w-full justify-center md:justify-start">
              <img src={Forex} alt="" />
            </div>
            <div className="col-span-6 h-full flex items-center py-20">
              <div className="mx-auto max-w-5xl text-gray-500 flex flex-col md:items-center">
                <h1 className="font-bold text-start w-full text-4xl sm:text-3xl">
                  How does Cryptocurrency CFD
                </h1>
                <h1 className="font-bold text-start w-full text-4xl sm:text-3xl">
                  trading work?
                </h1>
                <p className="text-gray my-2 ">
                  Bitcoin is a digital cryptocurrency that derives its value
                  from supply and demand factors unique to this asset class.
                </p>
                <p className="text-gray my-2 text-start">
                  Bitcoin is available in a finite supply and therefore
                  increases in price as demand increases.
                </p>
                <p className="text-gray my-2 ">
                  Demand stems from speculative sources and more practical
                  sources, for example Internet purchases paid for in Bitcoin.
                </p>
                <p className="text-gray my-2 ">
                  Bitcoin also has a tendency to react to market sentiment in
                  more traditional markets such as equities and foreign
                  exchange, increasing during periods of negative sentiment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-slate-900 py-5 sm:py-20">
          <div className="sm:my-10 text-gray-600 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mx-2">
              <h3 className="font-bold text-xl text-center sm:text-start sm:text-3xl w-full ">
                Bitcoin CFD Trading Example
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
                <p className="text-xs mt-1">3910.25 * 2 = USD $7820.50</p>
                <hr className="border-gray-900 my-2" />
                <p className="text-sm font-bold mt-3">Closing Price</p>
                <p className="text-xs mt-1">4200.50 * 2 = USD $8401.00</p>
                <hr className="border-gray-900 my-2" />
                <p className="text-sm font-bold mt-3">Gross Profit on Trade</p>
                <p className="text-xs mt-1">USD $8401.00 - 7820.50 = $580.50</p>
                <hr className="border-gray-900 my-2" />
              </div>
              <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
                <h6 className="font-bold">Opening the Position</h6>
                <p className="text-sm mt-3">
                  The price of Bitcoin CFD against the US Dollar is
                  3900.25/3910.25 and you decide to buy 2 contracts at 3910.25.
                </p>
              </div>
              <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
                <h6 className="font-bold">Closing the Position</h6>
                <p className="text-sm mt-3">
                  One month later Bitcoin CFD has increased to 4200.50/4210.50
                  and you decide to take your profit by selling your 2 contracts
                  at 4200.50 each.
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
            <div className="w-full hidden md:flex px-2 rounded-xl ">
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

                <TableBody className="">
                  {digitalcurrencyTable.map((Dct, index) => (
                    <TableRow key={index} className="text-sm border-gray-800">
                      <TableCell>{Dct.SYMBOL}</TableCell>
                      <TableCell>{Dct.DESCRIPTION}</TableCell>
                      <TableCell>{Dct.MIN}</TableCell>
                      <TableCell className="text-right">{Dct.AVG}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="md:hidden px-2 sm:px-4 overflow-x-hidden max-h-screen overflow-y-auto scrollbar-[2px] scrollbar-thumb-gray-700 scrollbar-track-gray-200 scrollbar-thumb-rounded w-full">
              {digitalcurrencyTable.map((Dct, index) => (
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
              <Link to={config.login_url}  onClick={(e) => {
    e.preventDefault(); // Prevent internal navigation
    window.open(config.login_url, "_blank", "noopener,noreferrer");
  }}className=" bg-hBlue w-full sm:w-auto text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap">
                  Open Trading Account
                </Link>

                <Link to={config.signup_url}  onClick={(e) => {
    e.preventDefault(); // Prevent internal navigation
    window.open(config.signup_url, "_blank", "noopener,noreferrer");
  }} className="hover:bg-hBlue w-full sm:w-auto border-hBlue border text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap">
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

export default digitalcurrency;

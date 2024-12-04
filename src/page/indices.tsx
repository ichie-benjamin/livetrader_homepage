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
import { Stock } from "../constants";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { config } from "../constants";
const indices = () => {
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
                Indices
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
            <div className="-mb-16 ">
              <img
                src="/range-of-markets/blue-lines.png"
                className="sm:max-h-36 my-4"
                alt=""
              />
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="sm:p-6 px-2">
                  <h6 className="text-gray-500 font-bold">
                    Indices are the most popular form of CFDs. IC Markets Global
                    has a large range of Indices from around the world to choose
                    from, including the Australian S&P 200 Index, UK FTSE 100
                    Index, US E-mini S&P 500 and US DJIA Index.
                  </h6>
                  <p className="text-gray-500 mt-5 ">
                    stock index is a good indicative measure of market
                    performance. Indices such as the FTSE 100 and DJIA Index are
                    baskets of blue chip stocks listed on the exchange and are
                    generally a good measure of the current market sentiment. A
                    change in the performance of any constituent stock in an
                    index is reflected in a change in the overall value of that
                    index.
                  </p>
                  <p className="text-gray-500 mt-5 ">
                    Indices have the advantage of allowing traders to take a
                    wider view of a basket of stocks rather than taking a view
                    on one individual stock alone. Online CFD and futures based
                    indices are offered on all platforms.
                  </p>
                </div>
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
              <div className="md:col-span-4 p-6 text-gray-500">
                <div className="bg-slate-950 rounded-xl w-full p-4 ">
                  <h6 className="text-xs font-bold text-gray">Indices </h6>
                  <h3 className="font-semibold text-lg sm:text-3xl">Facts</h3>
                  <hr className="border-gray-900 my-3" />
                  <div>
                    <div className="flex items-start text-[10px] font-bold">
                      <div>
                        <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      </div>
                      <div>
                        <p className="mb-3">25 Indices to trade from</p>
                        <div className="flex items-center text-[10px] mt-2 font-bold"></div>
                      </div>
                    </div>

                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      Leverage up to 1:200{" "}
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      Spreads as low as 0.4 pips
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold w-full">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      Deep Liquidity
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold w-full">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      No commissions
                    </div>
                    <hr className="border-gray-900 my-3" />
                    <div className="flex items-center text-[10px] font-bold w-full">
                      <FaCircleCheck className="text-hBlue me-2 text-xs" />
                      All platforms
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
              (Spot) Equity Indices Spreads
            </h3>
            <div className=" my-4">
              <p className="text-sm mt-2">
                IC Markets Global offers competitive spreads across all of our
                cash Indices, including the E-mini S&P 500 Index from 0.4
                points, the FTSE 100 Index from 1 point, Xetra DAX Index from 1
                point and S&P 200 Index from 1 point.
              </p>
            </div>
            <h3 className="font-bold text-xl md:text-start sm:text-3xl  w-full ">
              Futures Indices
            </h3>
            <div className=" my-4">
              <p className="text-sm mt-2">
                In addition to Equity Indices, IC Markets Global also offers
                Futures Indices: ICE Dollar Index and VIX Index.
              </p>
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
                  How to determine if a client is entitled dividend from Index
                  AUS200?
                </h1>
                <p className="text-gray my-2 ">
                  From the above example, let us assume that the ex-dividend
                  date for Index AUS200 is on the of 18th August 2016.
                  Therefore, a client must have an open position for Index
                  AUS200 before the 18th of August 2016 and it must remain open
                  until the 18th August 2016, in order to have the dividend
                  adjustment of $2.44 per lot. To determine if the dividend
                  adjustment is added or deducted to the client’s account, will
                  depend on whether it is a SELL or BUY on AUS200. If the client
                  has 1 lot of BUY for AUS200, the client will be entitled $2.44
                  per lot. However, if it is a SELL of AUS200, the client will
                  be deducted $2.44 per lot. The amount $2.44 per lot will be
                  converted to the client’s base currency, before it is being
                  deducted.
                </p>
                <p className="text-gray my-2 text-start">
                  Since this is from index AUS200, the dividend adjustment will
                  be AUD$2.44 per lot. Alternatively, if the index is US500, the
                  dividend adjustment would be USD$2.44 per lot. IC Markets
                  Global EX- Dividends Excel sheet shows the expected Indices
                  that will have their index points adjusted for the given week
                  and the actual ex-dividend adjustment amount for each indices
                  will be updated regularly on our blog, Ex- Dividends
                  Adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-slate-900 py-5 sm:py-20">
          <div className="sm:my-10 text-gray-600 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mx-2">
              <h3 className="font-bold text-xl text-center sm:text-start sm:text-3xl w-full ">
                Indices example
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
                <p className="text-xs mt-1">4951</p>
                <hr className="border-gray-900 my-2" />
                <p className="text-sm font-bold mt-3">Closing Price</p>
                <p className="text-xs mt-1">4970</p>
                <hr className="border-gray-900 my-2" />
                <p className="text-sm font-bold mt-3">Difference</p>
                <p className="text-xs mt-1">19</p>
                <hr className="border-gray-900 my-2" />
                <p className="text-sm font-bold mt-3">Gross Profit on Trade</p>
                <p className="text-xs mt-1">
                  19.00 points x 2 contracts ($2 per point) = AUD $38.00
                </p>
                <hr className="border-gray-900 my-2" />
              </div>
              <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
                <h6 className="font-bold">Opening the Position</h6>
                <p className="text-sm mt-3">
                  The price of the Australia 200 Index is 4950.00/4951.00. You
                  are of the view that blue-chip stocks are undervalued so you
                  decide to buy 2 contracts at 4951.00. (One contract is equal
                  to $1 per index point). No commission is charged on Indices.
                </p>
              </div>
              <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
                <h6 className="font-bold">Closing the Position</h6>
                <p className="text-sm mt-3">
                  Four days later, the Australia 200 Index has risen to
                  4970.00/4971.00 and you decide to take your profit. You close
                  your position by selling 2 contracts at 4970.00.
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
                  {Stock.map((Dct, index) => (
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
              {Stock.map((Dct, index) => (
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

export default indices;

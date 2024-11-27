import Hero from "/forex/hero.webp";
import Strength from "/forex/strength-bg.webp";

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
import { Exotic } from "../constants";
import { Minor } from "../constants";
import { Major } from "../constants";
import { Link } from "react-router-dom";
import Dropdown from "../components/ui/drop";
import { config } from "../constants";

const forex = () => {
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

      <div className="bg-black relative py-2 items-center justify-center">
        <ul className="items-center hidden md:flex gap-4  md:gap-8 text-xs font-extrabold text-gray-600 justify-center bg-black ">
          <li>
            <Link to="/forex" className="text-hBlue">
              FOREX
            </Link>{" "}
          </li>
          <li>
            <Link to="/funding" className="">
              FUNDING
            </Link>{" "}
          </li>
          <li>
            <Link to="/withdrawal" className="">
              WITHDRAWAL
            </Link>{" "}
          </li>
          <li>
            <Link to="/trading" className="">
              TRADING
            </Link>{" "}
          </li>
          <li>
            <Link to="/digitalcurrency" className="">
              DIGITAL CURRENCY
            </Link>{" "}
          </li>
          <li>
            <Link to="/range-of-markets" className="">
              RANGE OF MARKET
            </Link>{" "}
          </li>
        </ul>

        <Dropdown />
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
                Open 24 hours a day 5 days a week, the foreign exchange market
                is the largest and most liquid market in the world with volumes
                of over $4 trillion a day surpassing any exchange based market.
              </h6>

              <p className="text-gray-500 leading-loose mt-5 text-xs">
                Foreign exchange trading involves trading one currency pair
                against another, predicting that one currency will rise or fall
                against another. Currencies are traded in pairs, like the Euro
                versus the US Dollar (EUR/USD).
              </p>
            </div>
          </div>
          <div className="md:col-span-4 p-6 text-gray-500">
            <div className="bg-slate-950 rounded-xl w-full h-full p-4 ">
              <h6 className="text-xs font-bold text-gray">Forex</h6>
              <h3 className="font-semibold text-lg sm:text-3xl">Facts</h3>
              <hr className="border-gray-900 my-3" />
              <div>
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Over 61 currency pairs
                </div>
                <hr className="border-gray-900 my-3" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Tight spreads from 0.0 pips
                </div>
                <hr className="border-gray-900 my-3" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Up to 1:1000 leverage
                </div>
                <hr className="border-gray-900 my-3" />
                <div className="flex items-center text-[10px] font-bold">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Deep liquidity
                </div>
                <hr className="border-gray-900 my-3" />
                <div className="flex items-center text-[10px] font-bold w-full">
                  <FaCircleCheck className="text-hBlue me-2 text-xs" />
                  Trade 24 hours a day, five days a week
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
        <div className="max-w-5xl mx-auto grid gap-4 -lg:gap-8 grid-cols-1 md:grid-cols-12 p-2 sm:p-4">
          <div className="col-span-6 w-full justify-center md:justify-start">
            <img src={Forex} alt="" />
          </div>
          <div className="col-span-6 h-full flex items-center py-20">
            <div className="mx-auto max-w-5xl text-gray-500 flex flex-col items-center">
              <h1 className="font-bold text-center md:!text-start w-full text-4xl sm:text-3xl">
                Forex Spreads{" "}
              </h1>
              <h6 className="text-gray my-4 ">
                IC Markets Global offers Forex traders some of the tightest
                spreads out of all Forex exchange brokers globally with our
                EUR/USD spread averaging 0.1 pips. Tight spreads combined with
                our low latency enterprise grade hardware makes IC Markets
                Global the ideal choice for active day traders and those using
                Expert Advisors. The table at the bottom of this page shows our
                minimum and average spreads across all of the major currency
                pairs.``
              </h6>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-slate-900 py-5 sm:py-20">
        <div className="my-10 text-gray-600 max-w-5xl mx-auto">
          <div className="md:flex justify-between items-center ">
            <h3 className="font-bold text-lg sm:text-3xl w-full ">
              Forex Trading Examples
            </h3>
            <button className="bg-hBlue my-5 py-1.5 hover:bg-gray-300 px-4 rounded hover:text-hBlue text-gray-800 flex items-center w-auto font-bold">
              <span>Selling:</span> <span className="">EUR/USD </span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 w-full">
            <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
              <h6 className="font-bold">
                The gross profit on your trade is calculated as follows:
              </h6>
              <p className="text-sm font-bold mt-3">opening price</p>
              <p className="text-xs mt-1">€200,000 x 1.33623 = USD $267,246</p>
              <hr className="border-gray-900 my-2" />
              <p className="text-sm font-bold mt-3">Closing Price</p>
              <p className="text-xs mt-1">€200,000 x 1.32129 = USD $264,258</p>
              <hr className="border-gray-900 my-2" />
              <p className="text-sm font-bold mt-3">Gross Profit on Trade</p>
              <p className="text-xs mt-1">$2988</p>
              <hr className="border-gray-900 my-2" />
            </div>
            <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
              <h6 className="font-bold">Opening the Position</h6>
              <p className="text-sm mt-3">
                The price of the Euro against the US Dollar (EUR/USD) is
                1.33623/1.33624 and you decide to sell 2 standard lots (the
                equivalent of €200,000) at 1.33623.
              </p>
            </div>
            <div className="bg-slate-950 p-4 h-fit rounded-[8px]">
              <h6 className="font-bold">Closing the Position</h6>
              <p className="text-sm mt-3">
                One week later the Euro has fallen against the US Dollar to
                1.32128/1.32129 and you decide to take your profit by buying
                back 2 standard lots at 1.32129.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* tabs */}

      <div className="max-w-5xl mx-auto">
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Major"
          />
          <div
            role="major"
            className="tab-content py-10 min-w-40 w-full overflow-x-auto "
          >
            <div>
              <div className="w-full bg-slate-800- rounded-xl ">
                <Table className="text-gray-500">
                  <TableHeader className="rounded-3xl sticky top-0 w-full bg-slate-900">
                    <TableRow className="divide-gray-900 border-gray-900 border-none bg-slate-900 hover:bg-slate-900 rounded-2xl">
                      <TableHead>SYMBOL</TableHead>
                      <TableHead>DESCRIPTION</TableHead>
                      <TableHead>MIN</TableHead>
                      <TableHead>AVG</TableHead>
                      <TableHead>MIN</TableHead>
                      <TableHead>AVG</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="">
                    {Major.map((Major, index) => (
                      <TableRow key={index} className="text-sm border-gray-800">
                        <TableCell>{Major.SYMBOL}</TableCell>
                        <TableCell>{Major.DESCRIPTION}</TableCell>
                        <TableCell>{Major.MIN}</TableCell>
                        <TableCell>{Major.AVG}</TableCell>
                        <TableCell>{Major.MIN2}</TableCell>
                        <TableCell>{Major.AVG2}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Minor"
            defaultChecked
          />
          <div
            role="Minor"
            className="tab-content py-10 min-w-40 w-full overflow-x-auto "
          >
            <div className="w-full bg-slate-800- rounded-xl ">
              <Table className="text-gray-500">
                <TableHeader className="rounded-3xl sticky top-0 w-full bg-slate-900">
                  <TableRow className="divide-gray-900 border-gray-900 border-none bg-slate-900 hover:bg-slate-900 rounded-2xl">
                    <TableHead>SYMBOL</TableHead>
                    <TableHead>DESCRIPTION</TableHead>
                    <TableHead>MIN</TableHead>
                    <TableHead>AVG</TableHead>
                    <TableHead>MIN</TableHead>
                    <TableHead>AVG</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody className="">
                  {Minor.map((Minor, index) => (
                    <TableRow key={index} className="text-sm border-gray-800">
                      <TableCell>{Minor.SYMBOL}</TableCell>
                      <TableCell>{Minor.DESCRIPTION}</TableCell>
                      <TableCell>{Minor.MIN}</TableCell>
                      <TableCell>{Minor.AVG}</TableCell>
                      <TableCell>{Minor.MAX}</TableCell>
                      <TableCell>{Minor.MAXAVG}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Exotic"
          />
          <div
            role="Exotic"
            className="tab-content py-10 min-w-40 w-full overflow-x-auto "
          >
            <div className="w-full bg-slate-800- rounded-xl ">
              <Table className="text-gray-500">
                <TableHeader className="rounded-3xl sticky top-0 w-full bg-slate-900">
                  <TableRow className="divide-gray-900 border-gray-900 border-none bg-slate-900 hover:bg-slate-900 rounded-2xl">
                    <TableHead>SYMBOL</TableHead>
                    <TableHead>DESCRIPTION</TableHead>
                    <TableHead>MIN</TableHead>
                    <TableHead>AVG</TableHead>
                    <TableHead>MIN</TableHead>
                    <TableHead>AVG</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody className="">
                  {Exotic.map((exotic, index) => (
                    <TableRow key={index} className="text-sm border-gray-800">
                      <TableCell>{exotic.SYMBOL}</TableCell>
                      <TableCell>{exotic.DESCRIPTION}</TableCell>
                      <TableCell>{exotic.MIN}</TableCell>
                      <TableCell>{exotic.AVG}</TableCell>
                      <TableCell>{exotic.MAX}</TableCell>
                      <TableCell>{exotic.MAXAVG}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>{" "}
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
          <div className="max-w-2xl">
            <h1 className="text-gray-300 md:text-4xl sm:text-3xl text-2xl font-extrabold text-center">
              Forex{" "}
            </h1>
            <p className="text-xl md:text-2xl font-bol text-gray-400 text-center mt-5">
              global markets today!
            </p>
            <div className="my-10 flex flex-col sm:flex-row w-full items-center gap-4 justify-center">
              <Link to={config.login_url} className="hover:bg-hBlue w-full sm:w-auto border-hBlue border text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded hover:transf transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap bg-hBlue">
                Open Trading Account
              </Link>
              <Link to={config.signup_url} className=" border border-[#2955FF] hover:bg-hBlue w-full sm:w-auto text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded hover:transf transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap">
                Try a Free Demo{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default forex;

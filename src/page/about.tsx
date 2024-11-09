import { useState } from "react";
import { Navbar } from "../components";
import video from "/bg/video.webm";
// import { FocusCardsDemo } from "../components/ui/whyChooseUsCard";
import {
  Live_Prices_FX,
  Live_Prices_Indices,
  Live_Prices_Commodities,
  Live_Prices_Cryptocurrencies,
  meta_4_standard,
  meta_4_pro,
  meta_5_standard,
  meta_5_pro,
} from "../constants";
import { GiCheckMark } from "react-icons/gi";
import { TiArrowUpThick } from "react-icons/ti";
import Meta4 from "/metatrader-4.png";
import Meta5 from "/metatrader-5.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import ColorChangingTextOrBg from "../components/ui/bgColor";
import { Why_trade_with_us } from "../constants";

const about = () => {
  const [isPro, setIsPro] = useState(false);
  const meta4 = isPro ? meta_4_pro : meta_4_standard;
  const meta5 = isPro ? meta_5_pro : meta_5_standard;

  return (
    <div className="text-6xl-  bg-slate-800-">
      <Navbar />
      <div className="relative h-screen overflow-hidden">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full absolute max-h-screen h-full object-cover top-0 left-0 "
        />
        <div className="relative z-10 flex-col flex items-center justify-center h-full bg-black/70">
          <h1 className="text-white lg:text-7xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-center">
            Unlock Your <br /> Trading Potential
          </h1>
          <p className="text-xs md:text-xl text-center mt-10">
            Experience Effortless Trading with Our Competitive Spreads – Trade{" "}
            <br />
            with Confidence and Maximise Your Earnings.
          </p>
          <div className="my-10 flex items-center gap-4 justify-center md:justify-end">
            <a
              href="#"
              className="bg-slate-900 text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Start Trading
            </a>
            <a
              href="#"
              className="bg-hBlue text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Try a Demo For Free
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-10 sm:py-16 md:py-24">
      <div className=" w-full my-10">
          <h1 className="text-xl sm:text-2xl text-center md:text-3xl text-hBlue">
          Why trade with us?
          </h1>
          <hr className="bg-hBlue border-hBlue h-0.5 w-20 mt-5 mb-8 mx-auto" />
          <p className="text-gray-600 text-center  max-w-2xl mx-auto">At our core, we're dedicated to creating a trading environment that meets the diverse needs of traders, ranging from seasoned professionals to newcomers. Dive in to discover why trading with us is the right choice for you.

          </p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Why_trade_with_us.map((Why_trade) => (
              <div className="group min-h-44 h-full [perspective:1500px]">
                <div className="relative h-full w-full rounded-2xl shadow-lg transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front side of the card  */}
                  <div className="absolute- inset-0- h-full w-full rounded-xl bg-slate-900 shadow-lg flex flex-col items-center justify-center [backface-visibility:hidden] py-20 px-8">
                    <ColorChangingTextOrBg
                      type="bg"
                      className="my-4 w-12  h-12 rounded-full text-gray-300 grid place-content-center text-2xl"
                    >
                      <Why_trade.Icon />
                    </ColorChangingTextOrBg>
                    <p className="text-xl text-blue-700 font-bold text-center">
                      {Why_trade.title}
                    </p>
                  </div>

                  {/* Back side of the card */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-900 shadow-lg flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] px-2 sm:px-4">
                    <p className="text-gray-600">{Why_trade.description}</p>
                  </div>
                </div>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </div>
      {/* Live Prices  */}
      <div className="overflow-hidden">
        <div className="mx-auto max-w-5xl p-4 sm:p-10">
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="live-prices"
              role="tab"
              className="tab mx-4"
              aria-label="FX"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content py-10">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
                {/* Map over Live_Prices_FX array */}
                {Live_Prices_FX.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-full bg-slate-800 rounded-xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2 text-gray-700 font-semibold p-4 max-w-96  mx-auto"
                  >
                    <div className="flex items-center justify-center gap-2 my-2">
                      <img
                        src={item.img1}
                        className="max-w-10 h-5 rounded"
                        alt=""
                      />
                      <img
                        src={item.img2}
                        className="max-w-10 h-5 rounded"
                        alt=""
                      />
                    </div>
                    <div className="px-4 ">
                      <h1 className="text-xl text-blue-700 font-bold text-center">
                        {item.title}
                      </h1>
                    </div>
                    <hr className="w-10/12 mx-auto bg-gray-600 border-gray-600 my-4" />
                    <div className="flex items-start justify-between my-4">
                      <div>
                        <p className="text-gray-500 text-sm">Bid: </p>
                        <p className="text-green-600 flex items-center">
                          {" "}
                          {item.Bid} <TiArrowUpThick />{" "}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Ask: </p>
                        <p className="text-green-600 flex items-center">
                          {" "}
                          {item.ask} <TiArrowUpThick />{" "}
                        </p>
                      </div>
                    </div>
                    <hr className="w-10/12 mx-auto bg-gray-600 border-gray-600 my-4" />
                    <div className="flex items-center justify-center text-gray-500 gap-4 my-4">
                      <p className=" text-sm">Spread </p>
                      <p className="flex items-center"> {item.Spread}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="live-prices"
              role="tab"
              className="tab mx-4"
              aria-label="Indices"
            />
            <div role="tabpanel" className="tab-content py-10">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4  gap-4">
                {/* Map over Live_Prices_Indices array */}
                {Live_Prices_Indices.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-slate-800 rounded-xl text-gray-700 font-semibold p-4 max-w-96  mx-auto"
                  >
                    <div className="flex items-center justify-center gap-2 my-2"></div>
                    <div className=" ">
                      <h1 className="text-xl text-blue-700 font-bold text-center">
                        {item.title}
                      </h1>
                    </div>
                    <hr className="w-10/12 mx-auto bg-gray-600 border-gray-600 my-4" />
                    <div className="flex items-start justify-between my-4">
                      <div>
                        <p className="text-gray-500 text-sm">Bid: </p>
                        <p className="text-green-600 flex items-center">
                          {" "}
                          {item.Bid} <TiArrowUpThick />{" "}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Ask: </p>
                        <p className="text-green-600 flex items-center">
                          {" "}
                          {item.ask} <TiArrowUpThick />{" "}
                        </p>
                      </div>
                    </div>
                    <hr className="w-10/12 mx-auto bg-gray-600 border-gray-600 my-4" />
                    <div className="flex items-center justify-center text-gray-500 gap-4 my-4">
                      <p className=" text-sm">Spread </p>
                      <p className="flex items-center"> {item.Spread}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="live-prices"
              role="tab"
              className="tab mx-4"
              aria-label="Commodities"
            />
            <div role="tabpanel" className="tab-content py-10">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4  gap-4">
                {/* Map over Live_Prices_Commodities array */}
                {Live_Prices_Commodities.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-slate-800 rounded-xl text-gray-700 font-semibold p-4 max-w-96  mx-auto"
                  >
                    <div className="flex items-center justify-center gap-2 my-2"></div>
                    <div className=" ">
                      <h1 className="text-xl text-blue-700 font-bold text-center">
                        {item.title}
                      </h1>
                    </div>
                    <hr className="w-10/12 mx-auto bg-gray-600 border-gray-600 my-4" />
                    <div className="flex items-start justify-between my-4">
                      <div>
                        <p className="text-gray-500 text-sm">Bid: </p>
                        <p className="text-green-600 flex items-center">
                          {" "}
                          {item.Bid} <TiArrowUpThick />{" "}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Ask: </p>
                        <p className="text-green-600 flex items-center">
                          {" "}
                          {item.ask} <TiArrowUpThick />{" "}
                        </p>
                      </div>
                    </div>
                    <hr className="w-10/12 mx-auto bg-gray-600 border-gray-600 my-4" />
                    <div className="flex items-center justify-center text-gray-500 gap-4 my-4">
                      <p className=" text-sm">Spread </p>
                      <p className="flex items-center"> {item.Spread}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="live-prices"
              role="tab"
              className="tab mx-4"
              aria-label="Cryptocurrencies"
            />
            <div role="tabpanel" className="tab-content py-10">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4  gap-4">
                {/* Map over Live_Prices_Cryptocurrencies array */}
                {Live_Prices_Cryptocurrencies.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-slate-800 rounded-xl text-gray-700 font-semibold p-4 max-w-96  mx-auto"
                  >
                    <div className="flex items-center justify-center gap-2 my-2"></div>
                    <div className=" ">
                      <h1 className="text-xl text-blue-700 font-bold text-center">
                        {item.title}
                      </h1>
                    </div>
                    <hr className="w-10/12 mx-auto bg-gray-600 border-gray-600 my-4" />
                    <div className="flex items-start justify-between my-4">
                      <div>
                        <p className="text-gray-500 text-sm">Bid: </p>
                        <p className="text-green-600 flex items-center">
                          {" "}
                          {item.Bid} <TiArrowUpThick />{" "}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Ask: </p>
                        <p className="text-green-600 flex items-center">
                          {" "}
                          {item.ask} <TiArrowUpThick />{" "}
                        </p>
                      </div>
                    </div>
                    <hr className="w-10/12 mx-auto bg-gray-600 border-gray-600 my-4" />
                    <div className="flex items-center justify-center text-gray-500 gap-4 my-4">
                      <p className=" text-sm">Spread </p>
                      <p className="flex items-center"> {item.Spread}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto p-2">
        <div className="bg-slate-900 w-full h-full flex items-stretch rounded-2xl py-20 px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full ">
            <div className="flex justify-items-center items-center lg:ps-10 h-full lg:col-span-5 max-w-xl mx-auto ">
              <div>
                <div className=" w-full">
                  <h1 className="text-xl sm:text-2xl text-center lg:text-start  md:text-3xl text-hBlue">
                    Award Winning Platforms
                  </h1>
                  <hr className="bg-hBlue border-hBlue h-0.5 w-20 mt-5 mb-8 mx-auto lg:mx-0" />
                </div>
                <div>
                  <p className="text-gray-600 ">
                    Trade on one of the world's most popular platforms,
                    accessible on your device anytime and anywhere.
                  </p>
                  <div className="flex justify-center w-full items-center mt-8 gap-4">
                    <a href="#">
                      <div className="shadow bg-[#020817] py-4 px-6 rounded-2xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <img src={Meta4} className="mx-auto max-h-14" alt="" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="shadow bg-[#020817] py-4 px-6 rounded-2xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <img src={Meta5} className="mx-auto max-h-14" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="flex my-10 flex-wrap justify-between">
                    <div>
                      <p className="font-semibold- text-xs px-4 py-2 rounded-xl bg-[#020817] text-">
                        Windows
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold- text-xs px-4 py-2 rounded-xl bg-[#020817] text-">
                        Web Browser
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold- text-xs px-4 py-2 rounded-xl bg-[#020817] text-">
                        Android
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold- text-xs px-4 py-2 rounded-xl bg-[#020817] text-">
                        Mac
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold- text-xs px-4 py-2 rounded-xl bg-[#020817] text-">
                        iOS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:block justify-items-center w-full lg:col-span-7 ps-20 hidden">
              <img
                src="/award.webp"
                className="justify-self-end w-full h-full object-left object-cover relative "
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-20 p-2 sm:p-4 md:p-8">
        <div className=" w-full">
          <h1 className="text-xl sm:text-2xl text-center md:text-3xl text-hBlue">
            Experience Low-Cost Trading in Global Markets
          </h1>
          <hr className="bg-hBlue border-hBlue h-0.5 w-20 mt-5 mb-8 mx-auto" />
          <p className="text-gray-600  max-w-2xl mx-auto">
            We provide Contracts for Difference (CFDs) on a wide range of
            assets, including Forex, Indices, Metals, Commodities, and
            Cryptocurrencies, all with highly competitive pricing, starting at
            an ultra-low spread of 0.0. Take full advantage of these
            opportunities by opening an account with MYFX Markets.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6  md:gap-10">
            <div className="lg:col-span-5">
              <div className="">
                <svg
                  className="sm:pe-20 w-[450px]"
                  height="300"
                  viewBox="0 0 500 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <!-- Background Chart --> */}
                  <rect
                    x="130"
                    y="50"
                    width="220"
                    height="140"
                    fill="#eef2ff"
                    stroke="#333"
                    stroke-width="2"
                  />

                  {/* <!-- Candlestick Chart with Pulse Animation --> */}
                  <rect x="160" y="100" width="20" height="60" fill="#e63946">
                    <animate
                      attributeName="height"
                      values="60;65;60"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <line
                    x1="170"
                    y1="80"
                    x2="170"
                    y2="160"
                    stroke="#e63946"
                    stroke-width="2"
                  >
                    <animate
                      attributeName="y1"
                      values="80;75;80"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </line>

                  <rect x="200" y="80" width="20" height="80" fill="#4caf50">
                    <animate
                      attributeName="height"
                      values="80;85;80"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <line
                    x1="210"
                    y1="60"
                    x2="210"
                    y2="160"
                    stroke="#4caf50"
                    stroke-width="2"
                  >
                    <animate
                      attributeName="y1"
                      values="60;55;60"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </line>

                  <rect x="240" y="110" width="20" height="50" fill="#e63946">
                    <animate
                      attributeName="height"
                      values="50;55;50"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <line
                    x1="250"
                    y1="90"
                    x2="250"
                    y2="160"
                    stroke="#e63946"
                    stroke-width="2"
                  >
                    <animate
                      attributeName="y1"
                      values="90;85;90"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </line>

                  {/* <!-- Character with Moving Coin --> */}
                  <circle cx="70" cy="120" r="30" fill="#ffd1dc" />
                  <rect x="50" y="150" width="40" height="90" fill="#e7eaf6" />

                  {/* <!-- Coin held by character with Up-Down Animation --> */}
                  <circle cx="70" cy="80" r="20" fill="#ffc107">
                    <animate
                      attributeName="cy"
                      values="80;75;80"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <text x="65" y="85" font-size="12" fill="#333">
                    $
                  </text>

                  {/* <!-- Wallet Sliding Animation --> */}
                  <rect
                    x="320"
                    y="120"
                    width="100"
                    height="60"
                    rx="10"
                    ry="10"
                    fill="#c5cae9"
                    stroke="#333"
                    stroke-width="2"
                  >
                    <animate
                      attributeName="x"
                      values="320;330;320"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <circle cx="360" cy="150" r="8" fill="#6d78dc" />

                  {/* <!-- Coins with Rotation Animation --> */}
                  <circle cx="320" cy="200" r="15" fill="#ffc107">
                    <text x="314" y="205" font-size="12" fill="#333">
                      $
                    </text>
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 320 200"
                      to="360 320 200"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <circle cx="350" cy="190" r="10" fill="#ffc107">
                    <text x="346" y="193" font-size="8" fill="#333">
                      $
                    </text>
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 350 190"
                      to="360 350 190"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
              <div className=" w-full ">
                <h1 className="text-xl  text-hBlue">
                  Trade with the most competitive fees.
                </h1>
                <hr className="bg-hBlue border-hBlue h-0.5 w-20 mt-5 mb-8" />

                <p className="text-gray-600 ">
                  MYFX Markets offers competitive fees and a diverse range of
                  trading instruments in Forex and CFDs, making it a top choice
                  for cost-conscious traders. With a commitment to transparency
                  and quality, MYFX Markets empowers traders to seize
                  opportunities across global markets while keeping their
                  trading costs in check.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="max-w-7xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="item-1"
                    className="border-gray-500 border-0"
                  >
                    <AccordionTrigger className="text-gray-500 bg-slate-900 rounded-2xl px-4 my-4">
                      Forex
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500">
                      The forex market stands as the largest financial market
                      globally, offering opportunities to trade currencies. At
                      MYFX Markets, you gain access to premium trading
                      conditions and the highest levels of liquidity accessible
                      to brokerage services.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="border-gray-500 border-0"
                  >
                    <AccordionTrigger className="text-gray-500 bg-slate-900 rounded-2xl px-4 my-4">
                      Indices{" "}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500">
                      Access prominent global equity indices representing a
                      country's economic performance, an exchange, or a specific
                      market sector through MYFX Markets.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="border-gray-500 border-0"
                  >
                    <AccordionTrigger className="text-gray-500 bg-slate-900 rounded-2xl px-4 my-4">
                      Metals & Commodities
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500">
                      Unlock profitable opportunities by trading popular
                      commodities such as Gold, Silver, Crude Oil, and Brent Oil
                      on the MYFX Markets platform.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className="border-gray-500 border-0"
                  >
                    <AccordionTrigger className="text-gray-500 bg-slate-900 rounded-2xl px-4 my-4">
                      Cryptocurrencies
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500">
                      With the MYFX Markets platform, you can seize the moment
                      and trade the hottest crypto assets, including Bitcoin,
                      Bitcoin Cash, Litecoin, and many more, for maximum profit
                      potential.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="text-xl sm:text-2xl text-center md:text-3xl text-hBlue">
            Choose the Perfect Account for Your Trading Journey
          </h1>
          <hr className="bg-hBlue border-hBlue h-0.5 w-20 mt-5 mb-8 mx-auto" />
          <p className="text-gray-600  max-w-2xl mx-auto">
            We are committed to your trading success. Select the account that
            aligns with your trading style, strategy, and requirements.
          </p>

          <div className="flex justify-between mx-auto w-32 items-center gap-6 my-10">
            <p className="text-gray-600 font-semibold max-w-2xl mx-auto">
              Standard
            </p>
            <input
              type="checkbox"
              className="toggle toggle-success"
              checked={isPro}
              onChange={() => setIsPro(!isPro)}
            />
            <p className="text-gray-600 font-semibold max-w-2xl mx-auto">Pro</p>
          </div>
          <section className="max-w-7xl mx-auto my-20">
            <div className="grid grid-cols-1 gap-4 sm:gap-8  xl:grid-cols-2 px-2 sm:px-4">
              <div className="rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className=" flex justify-center items-center h-14 sm:h-16 md:h-20 rounded-t-2xl w-full">
                  <ColorChangingTextOrBg
                    className="w-full h-full grid place-content-center rounded-t-2xl"
                    type="bg"
                  >
                    <h1 className="text-xl sm:text-2xl font-gray-500 font-bold">
                      MetaTrader 4
                    </h1>
                  </ColorChangingTextOrBg>
                </div>
                <div>
                  <div className="py-5 px-10 gap-8 grid grid-cols-2">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">Spreads</h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          From {meta4.Spread}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">commission</h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          {" "}
                          {meta4.commission}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-5 px-10 gap-8 grid grid-cols-2">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">
                          Minimum Deposit Required
                        </h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          From {meta4.Deposit}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">
                          Minimum Trade Size
                        </h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          {" "}
                          {meta4.Trade_Size}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-5 px-10 gap-8 grid grid-cols-2">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">Markets</h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          From {meta4.market}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">Leverage</h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          {" "}
                          {meta4.leverage}
                        </p>
                        <p className="text-[8px] text-gray-500">
                          {meta4.balance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center py-10">
                  <a href="#" className="">
                    <ColorChangingTextOrBg
                      type="bg"
                      className="text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                      {meta4.button}
                    </ColorChangingTextOrBg>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className=" flex justify-center items-center h-12 sm:h-16 md:h-20 rounded-t-2xl w-full">
                  <ColorChangingTextOrBg
                    className="w-full h-full grid place-content-center rounded-t-2xl"
                    type="bg"
                  >
                    <h1 className="text-xl sm:text-2xl font-gray-500 font-bold">
                      MetaTrader 5
                    </h1>
                  </ColorChangingTextOrBg>
                </div>
                <div>
                  <div className="py-5 px-10 gap-8 grid grid-cols-2">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">Spreads</h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          From {meta5.Spread}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">commission</h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          {" "}
                          {meta5.commission} kk
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-5 px-10 gap-8 grid grid-cols-2">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">
                          Minimum Deposit Required
                        </h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          From {meta5.Deposit}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">
                          Minimum Trade Size
                        </h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          {" "}
                          {meta5.Trade_Size}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-5 px-10 gap-8 grid grid-cols-2">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">Markets</h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-4">
                          From {meta5.market}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-slate-900 text p-1.5">
                        {" "}
                        <GiCheckMark className="text-green-600" />
                      </div>
                      <div>
                        <h6 className="text-xs text-gray-700">Leverage</h6>
                        <p className="text-[#19195c] font-semibold sm:text-lg text-base flex items-center gap-6">
                          {" "}
                          Up to
                          {meta5.leverage}
                        </p>
                        <p className="text-[8px] text-gray-500">
                          {meta5.balance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center py-10">
                  <a href="#" className="">
                    <ColorChangingTextOrBg
                      type="bg"
                      className="text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                      {meta5.button}
                    </ColorChangingTextOrBg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section></section>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-10 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl text-hBlue">
              Something about MYFX Markets
            </h1>
            <hr className="bg-hBlue border-hBlue h-0.5 w-20 mt-5 mb-8" />
            <p className="text-gray-600  max-w-lg my-4 sm:my-6 ">
              At MYFX Markets, we're not just a platform; we're fellow traders
              who understand your priorities: ultra-competitive spreads,
              lightning-fast execution with minimal slippage, and unwavering
              customer support.
            </p>
            <p className="text-gray-600  max-w-lg my-4 sm:my-6 ">
              Whether you're just starting or a seasoned pro, our tailored
              solutions are designed for you. Dive into global markets,
              experience top-tier assistance, and trade with unwavering
              confidence.
            </p>
            <p className="text-gray-600  max-w-lg my-4 sm:my-6 ">
              Don't miss out on the MYFX Markets advantage – join us today and
              elevate your trading game.
            </p>
          </div>
          <div></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-2 sm:p-4 md:p-8 mt-10 md:mt-20">
        <div>
          <h1 className="text-xl sm:text-2xl text-center md:text-3xl text-hBlue">
            How to Start Trading with MYFX Markets
          </h1>
          <hr className="bg-hBlue border-hBlue h-0.5 w-20 mt-5 mb-8 mx-auto" />
          <p className="text-gray-600  max-w-lg my-4 sm:my-8 text-center mx-auto">
            Follow the 4 Simple steps to open an account in 3 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          <div className="rounded-3xl bg-slate-900 min-h-56- h-full w-full shadow shadow-black flex flex-col justify-between">
            <ColorChangingTextOrBg
              type="bg"
              className="rounded-br-3xl rounded-tl-3xl h-16 w-16 text-xl sm:text-2xl font-extrabold grid place-content-center"
            >
              1
            </ColorChangingTextOrBg>

            <div className="w-full h-56-">
              <img src="/Apply.png" className="mx-auto w--full" alt="" />
            </div>
            <div className="p-2 sm:p-8">
              <p className="text-gray-500">
                Complete a straightforward online registration form.
              </p>
            </div>
            <div className="py-4 w-full flex justify-center rounded-b-3xl  font-bold text-2xl bg-[#020817] text-gray-500">
              Apply
            </div>
          </div>
          <div className="rounded-3xl bg-slate-900 min-h-56- h-full w-full shadow shadow-black flex flex-col justify-between">
            <ColorChangingTextOrBg
              type="bg"
              className="rounded-br-3xl rounded-tl-3xl  h-16 w-16 text-xl sm:text-2xl font-extrabold grid place-content-center"
            >
              2
            </ColorChangingTextOrBg>

            <div className="w-full h-56-">
              <img src="/Verify.png" className="mx-auto w--full" alt="" />
            </div>
            <div className="p-2 sm:p-8">
              <p className="text-gray-500">
                Easily upload the necessary documents for account verification.
              </p>
            </div>
            <div className="py-4 w-full flex justify-center rounded-b-3xl  font-bold text-2xl bg-[#020817] text-gray-500">
              Verify
            </div>
          </div>
          <div className="rounded-3xl bg-slate-900 min-h-56- h-full w-full shadow shadow-black flex flex-col justify-between">
            <ColorChangingTextOrBg
              type="bg"
              className="rounded-br-3xl rounded-tl-3xl  h-16 w-16 text-xl sm:text-2xl font-extrabold grid place-content-center"
            >
              3
            </ColorChangingTextOrBg>

            <div className="w-full h-56-">
              <img src="/Fund.png" className="mx-auto w--full" alt="" />
            </div>
            <div className="p-2 sm:p-8">
              <p className="text-gray-500">
                Fund your trading account with your choice of multiple deposit
                options.
              </p>
            </div>
            <div className="py-4 w-full flex justify-center rounded-b-3xl  font-bold text-2xl bg-[#020817] text-gray-500">
              Fund
            </div>
          </div>
          <div className="rounded-3xl bg-slate-900 min-h-56- h-full w-full shadow shadow-black flex flex-col justify-between">
            <ColorChangingTextOrBg
              type="bg"
              className="rounded-br-3xl rounded-tl-3xl  h-16 w-16 text-xl sm:text-2xl font-extrabold grid place-content-center"
            >
              4
            </ColorChangingTextOrBg>

            <div className="w-full h-56-">
              <img src="/Trade.png" className="mx-auto w--full" alt="" />
            </div>
            <div className="p-2 sm:p-8">
              <p className="text-gray-500">
                Begin trading on your live account, gaining access to over 50
                instruments.
              </p>
            </div>
            <div className="py-4 w-full flex justify-center rounded-b-3xl  font-bold text-2xl bg-[#020817] text-gray-500">
              Trade
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <a
            href="#"
            className="bg-hBlue text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Open a Live Account
          </a>
        </div>
      </section>

      <section className="max-w-2xl mx-auto p-2 sm:p-4 md:p-8 mt-5 ">
        <div>
          <h1 className="text-xl sm:text-2xl text-center md:text-3xl text-hBlue">
            What is the Latest News{" "}
          </h1>
          <hr className="bg-hBlue border-hBlue h-0.5 w-20 mt-5 mb-8 mx-auto" />
          <p className="text-gray-600 my-4 sm:my-8 text-center mx-auto">
            Our vision is to make global market access more accessible, quicker,
            and more cost-effective than current market offerings.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a href="#">
            <div className=" flex flex-wrap  justify-between bg-slate-900 py-4 px-8 rounded-3xl transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <p className="text-gray-600 ">Daylight Saving Ends in 2024</p>
              <p className="text-gray-600">24th Oct 2024</p>
            </div>
          </a>
          <a href="#">
            <div className=" flex flex-wrap  justify-between bg-slate-900 py-4 px-8 rounded-3xl transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <p className="text-gray-600 ">
                Deposits now available with Apple Pay and Google Pay!
              </p>
              <p className="text-gray-600">8th Oct 2024</p>
            </div>
          </a>
          <a href="#">
            <div className=" flex flex-wrap  justify-between bg-slate-900 py-4 px-8 rounded-3xl transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <p className="text-gray-600 ">
                CN Double Ninth Festival Schedule 2024
              </p>
              <p className="text-gray-600">4th Oct 2024</p>
            </div>
          </a>
          <a href="#">
            <div className=" flex flex-wrap  justify-between bg-slate-900 py-4 px-8 rounded-3xl transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <p className="text-gray-600 ">CN National Day Schedule 2024</p>
              <p className="text-gray-600">24th Sep 2024</p>
            </div>
          </a>
          <a href="#">
            <div className=" flex flex-wrap  justify-between bg-slate-900 py-4 px-8 rounded-3xl transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <p className="text-gray-600 ">
                New Maximum Leverage 1:1000 Unlocked!
              </p>
              <p className="text-gray-600">16th Sep 2024</p>
            </div>
          </a>
          <a href="#">
            <div className=" flex flex-wrap  justify-between bg-slate-900 py-4 px-8 rounded-3xl transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <p className="text-gray-600 ">CN Moon Festival Schedule 2024</p>
              <p className="text-gray-600">10th Sep 2024</p>
            </div>
          </a>

          <a href="#">
            <div className=" flex flex-wrap  justify-between bg-slate-900 py-4 px-8 rounded-3xl transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <p className="text-gray-600 ">US Labour Day Schedule 2024</p>
              <p className="text-gray-600">29th Aug 2024</p>
            </div>
          </a>
          <a href="#">
            <div className=" flex flex-wrap  justify-between bg-slate-900 py-4 px-8 rounded-3xl transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <p className="text-gray-600 ">
                UK Summer Bank Holiday Schedule 2024
              </p>
              <p className="text-gray-600">19th Aug 2024</p>
            </div>
          </a>
          <a href="#">
            <div className=" flex flex-wrap  justify-between bg-slate-900 py-4 px-8 rounded-3xl transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <p className="text-gray-600 ">
                Notice of closure of old Client Office
              </p>
              <p className="text-gray-600">2nd Aug 2024</p>
            </div>
          </a>
          <a href="#">
            <div className=" flex flex-wrap  justify-between bg-slate-900 py-4 px-8 rounded-3xl transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <p className="text-gray-600 ">Customer Survey 2024</p>
              <p className="text-gray-600">17th Jul 2024</p>
            </div>
          </a>
        </div>
      </section>
      <section className="max-w-7xl mx-auto my-10">
        <div>
          <div className="border border-[#080d1b] shadow-md shadow-slate-900 my-4 py-10 px-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h1 className="text-xl sm:text-2xl text-center md:text-start md:text-3xl text-hBlue">
                  Ready to Start Trading?
                </h1>
                <p className="text-gray-600 my-8 md:my-4 text-center mx-auto md:text-start ">
                  Open an account in 3 minutes and receive your login details
                  instantly.
                </p>
              </div>
              <div className="h-full flex items-center gap-4 justify-center md:justify-end">
                <a
                  href="#"
                  className="bg-hBlue text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                >
                  Try a Demo
                </a>
                <a
                  href="#"
                  className="bg-slate-900 text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                >
                  Start Trading
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex min-h-screen items-center justify-center bg-slate-100">
          <div className="group h-96 w-80 [perspective:1500px]">
            <div className="relative h-full w-full rounded-xl shadow-lg transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front side of the card  */}
              <div className="absolute inset-0 h-full w-full rounded-xl bg-orange-800 shadow-lg flex items-center justify-center [backface-visibility:hidden]">
                <p className="text-white font-bold text-xl">Front Side</p>
              </div>

              {/* Back side of the card */}
              <div className="absolute inset-0 h-full w-full rounded-xl bg-green-800 shadow-lg flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-white font-bold text-xl">Back Side</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;

// import React from "react";
import { config } from "../constants";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { SiTimescale } from "react-icons/si";
import { Everything_you_need_to_trade_smarter } from "../constants";
import { FaArrowRightLong } from "react-icons/fa6";
import { mobile_trading } from "../constants";
import { TfiCup } from "react-icons/tfi";
import { Accordion } from "../components/ui/accordion";
import { AccordionItem } from "../components/ui/accordion";
import { AccordionTrigger } from "../components/ui/accordion";
import { AccordionContent } from "../components/ui/accordion";
import { offers } from "../constants";
import Navbar from "../components/home/navigation/navbar";
const trading = () => {
  return (
    <>
      <Navbar />
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto pb-10">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="p-4 pb-10  mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-20">
              <h2 className="text-3xl lg:text-4xl text-gray-400 font-semibold mt-6">
                A broker you can trust
              </h2>
              <p className="my-5 text-base text-gray-400 text-foreground/80 sm:mt-6 text-start">
                Over the past 25 years, we have built up a stellar reputation
                for our:
              </p>

              <div className="flex items-center py-4">
                <div className="w-8">
                  <FaLaptopCode className="text-[#0063A6] text-2xl text-left-" />
                </div>
                <p className="text-sm  text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                  Award-winning platforms*
                </p>
              </div>
              <div className="flex items-center py-4">
                <div className="w-10">
                  <RiGraduationCapFill className="text-[#0063A6] text-2xl text-left-" />
                </div>
                <p className="text-sm  text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80 px-2">
                  Innovative trading education
                </p>
              </div>
              <div className="flex items-center py-4">
                <div className="w-8">
                  <SiTimescale className="text-[#0063A6] text-2xl text-left-" />
                </div>
                <p className="text-sm  text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                  Transparent pricing
                </p>
              </div>

              <div className="my-10 flex flex-col sm:flex-row w-full items-center gap-4 justify-center">
                <button className="hover:bg-hBlue w-full sm:w-auto border-hBlue border text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded hover:transf transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap bg-hBlue">
                  Create Account{" "}
                </button>
                <button className=" border border-[#2955FF] hover:bg-hBlue w-full sm:w-auto text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded hover:transf transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap">
                  Start Trading
                </button>
              </div>
            </div>
            <div className="">
              <img
                src="/trader/01_hero.webp"
                className="h- w-full- object-cover"
                alt="im"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Everything you need  */}
      <section>
        <div className=" w-full my-10">
          <h1 className="text-xl sm:text-2xl text-center md:text-3xl text-hBlue">
            Everything you need to trade smarter
          </h1>
          <hr className="bg-hBlue border-hBlue h-0.5 w-20 mt-5 mb-8 mx-auto" />
          <p className="text-gray-600 text-center  max-w-2xl mx-auto">
            Our powerful analysis tools, tight spreads on forex pairs, and low
            commissions for online forex trading and crypto trades give you the
            edge to help you trade smarter.
          </p>
        </div>
        <div>
          <div className=" max-w-7xl mx-auto p-2 sm:p-4 md:p-8 mb-5 sm:mb-10">
            <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-3 group-hover: lg:gap-8">
              {Everything_you_need_to_trade_smarter.map(
                (Everything_you_need_to_trade_smarter) => {
                  return (
                    <div
                      key={Everything_you_need_to_trade_smarter.title}
                      className="flex w-full rounded-2xl  overflow-hidden- bg-slate-900 px-2 sm:px-4 md:px-8 group hover:bg-slate-800 justify-between relative hover:scale-105 transition-all duration-300 ease-in-ou"
                    >
                      <div className="flex items-center h-full">
                        <div className="text-[#0A0A0A] md:pb-16 gap-y-4">
                          <div className="my-4">
                            <img
                              src={Everything_you_need_to_trade_smarter.img}
                              className="mx-auto"
                              alt=""
                            />
                          </div>
                          <h1 className="text-base text-center group-hover:text-gray-200 my-1 font-bold text-gray-500">
                            {Everything_you_need_to_trade_smarter.title}
                          </h1>
                          <p
                            className=" text-gray-500 group-hover:text-gray-400 dark:text-gray-300
                                 lg:text-base text-center text-foreground/80 sm:my-6"
                          >
                            {Everything_you_need_to_trade_smarter.description}
                          </p>
                          <a
                            href={Everything_you_need_to_trade_smarter.url}
                            className="flex justify-center group text-gray-500 items-center gap-3 transition-transform duration-300 ease-in-out transform hover:gap-4"
                          >
                            <p className="group-hover:underline">
                              {Everything_you_need_to_trade_smarter.linkTitle}
                            </p>
                            <p>
                              <FaArrowRightLong className="text-blue-900" />
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Forex trading */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto py-10">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="">
              <img
                src="/trader/forex_trading.webp"
                className="h- w-full- object-cover"
                alt="im"
              />
            </div>
            <div className="p-4 pb-10  mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-8 md:px-20-">
              <h2 className="text-3xl lg:text-4xl text-gray-400 font-semibold mt-6">
                Forex trading
              </h2>
              <p className="my-5 text-base text-gray-400 text-foreground/80 sm:mt-6 text-start">
                Trading forex is one of the most popular trading options. This
                is why you’ll need a cutting-edge and reliable trading platform
                that allows you to trade tight spreads on major and minor
                currency pairs. Choose from our standard or premium forex
                pricing modules - whatever’s best for, your forex trading needs.
              </p>
              <div className="my-10 flex flex-col sm:flex-row w-full items-center gap-4 justify-center md:justify-start">
                <button className="hover:bg-hBlue w-full sm:w-auto border-hBlue border text-gray-200 font-bold py-3 sm:py-4 px-8  rounded hover:transf transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap bg-hBlue">
                  View all trading instruments{" "}
                </button>
                <button className=" border border-[#2955FF] hover:bg-hBlue w-full sm:w-auto text-gray-200 font-bold py-3 sm:py-4 px-8  rounded hover:transf transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap">
                  View all margin rates
                </button>
              </div>

              <p className="my-5 text-base text-gray-400 text-foreground/80 sm:mt-6 text-start">
                Margin requirement will depend on the amount of leverage
                allowed. The maximum leverage allowed is determined by the
                regulators and may differ depending upon the instrument.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Crypto trading */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto ">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="p-4 pb-20  mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-8 lg:ps-20">
              <h2 className="text-3xl lg:text-4xl text-gray-400 font-semibold mt-6">
                Crypto trading
              </h2>
              <p className="my-5 text-base text-gray-400 text-foreground/80 sm:mt-6 text-start">
                We’ve partnered with Paxos and their itBit exchange so you can
                spot trade popular cryptocurrencies such as Bitcoin, Ethereum,
                Litecoin and more . Enjoy competitive commissions and spreads on
                popular crypto with two-way streaming prices on our online
                trading platform.
              </p>
              <div className="flex w-full my-10 gap-4">
                <a
                  href={config.login_url}
                  target="_blank"
                  className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 md:ease-linear max-w-60 text-center align-center py-4 border-radius"
                >
                  Start crypto trading
                </a>
              </div>
              <div className="bg-[#1A1A1A] p-2 sm:p-4 border border-gray-500 rounded">
                <p className="text-xs text-gray-400 text-foreground/80  text-start">
                  OANDA CORPORATION IS A MEMBER OF NFA AND IS SUBJECT TO NFA'S
                  REGULATORY OVERSIGHT AND EXAMINATIONS. HOWEVER, YOU SHOULD BE
                  AWARE THAT NFA DOES NOT HAVE REGULATORY OVERSIGHT AUTHORITY
                  OVER UNDERLYING OR SPOT VIRTUAL CURRENCY PRODUCTS OR
                  TRANSACTIONS OR VIRTUAL CURRENCY EXCHANGES, CUSTODIANS OR
                  MARKETS.
                </p>

                <p className="text-xs text-gray-400 text-foreground/80 sm:mt-6 text-start">
                  All digital asset transactions occur on the Paxos Trust
                  Company exchange. Any positions in digital assets are
                  custodied solely with Paxos and held in an account in your
                  name outside of OANDA Corporation. Digital assets held with
                  Paxos are not protected by SIPC. Paxos is not an NFA member
                  and is not subject to the NFA’s regulatory oversight and
                  examinations.
                </p>
              </div>
            </div>
            <div className=" overflow-hidden">
              <img
                src="/trader/crypto-trading.webp"
                className="h-full lg:h-[130%] w-f object-cover"
                alt="im"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ready to start trading? */}
      <section className="justify-center flex bg-slate-900">
        <div className="p-4 pb-20  mx-auto w-full max-w-screen-2xl- px-2 sm:px-4 md:px-8 lg:ps-20">
          <h2 className="text-3xl text-center lg:text-4xl text-gray-400 font-semibold mt-6">
            Ready to start trading?
          </h2>
          <p className="my-5 text-base  text-gray-400 text-foreground/80 sm:mt-6 text-center">
            Open an account in minutes.
          </p>
          <div className="my-10 flex flex-col sm:flex-row w-full items-center gap-4 justify-center ">
            <button className="hover:bg-hBlue w-full sm:w-auto border-hBlue border text-gray-200 font-bold py-3 sm:py-4 px-8  rounded hover:transf transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap bg-hBlue">
              Create account
            </button>
            <button className=" border border-[#2955FF] hover:bg-hBlue w-full sm:w-auto text-gray-200 font-bold py-3 sm:py-4 px-8  rounded hover:transf transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap">
              Try Demo Account{" "}
            </button>
          </div>
        </div>
      </section>

      {/* Already have a live trading account? */}
      <section className="justify-center flex mx-auto  bg-slate-500">
        <div className="p-4 pb-20  mx-auto w-full max-w-4xl  px-2 sm:px-4 md:px-8 lg:ps-20">
          <h2 className="text-3xl text-center lg:text-4xl text-gray-400 font-semibold mt-6">
            Already have a live trading account?
          </h2>
          <p className="my-5 text-base  text-gray-400 text-foreground/80 sm:mt-6 text-center">
            It's easy to fund your trading account using one of the following
            payment methods. Pick the payment option that works best for you,
            whether it’s debit card, bank wire transfer, or ACH deposit.
          </p>
          <div className="flex justify-center flex-wrap">
            <img
              src="/trader/visa.png"
              className="max-w-40 my-2"
              alt="visa card image"
            />
            <img
              src="/trader/debit.png"
              className="max-w-40 my-2"
              alt="visa card image"
            />
            <img
              src="/trader/transfer.png"
              className="max-w-40 my-2"
              alt="visa card image"
            />
            <img
              src="/trader/clearing_house.png"
              className="max-w-40 my-2"
              alt="visa card image"
            />
          </div>
          <div className="flex justify-center w-full my-5 sm:my-10 gap-4">
            <a
              href={config.login_url}
              target="_blank"
              className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 md:ease-linear max-w-60 text-center align-center py-4 border-radius"
            >
              Fund your account
            </a>
          </div>
        </div>
      </section>

      {/* Forex trading engineered for speed */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto ">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="p-4 pb-20  mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-8 lg:ps-20">
              <h2 className="text-3xl lg:text-4xl text-gray-400 font-semibold mt-6">
                Forex trading engineered for speed
              </h2>
              <p className="my-5 text-base text-gray-400 text-foreground/80 sm:mt-6 text-start">
                Forex trading prices can move quickly, especially during
                volatile market conditions. Our award-winning online trading
                platform:
              </p>
              <div className="ps-5 sm:ps-10">
                <ul className="list-disc text-gray-400">
                  <li>
                    Is engineered for reliability and speed, making it great for
                    high volatility trading
                  </li>
                  <li className="my-4">
                    Helps to ensure you never miss out on the forex or online
                    trading price you want
                  </li>
                  <li>
                    Is accessible through our web-based or mobile apps for extra
                    convenience
                  </li>
                </ul>
              </div>
              <div className="flex w-full my-10 gap-4">
                <a
                  href={config.login_url}
                  target="_blank"
                  className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 md:ease-linear max-w-60 text-center align-center py-4 border-radius"
                >
                  See all trading platforms
                </a>
              </div>
            </div>
            <div className=" overflow-hidden">
              <img
                src="/trader/speed.webp"
                className="h-full- mx-auto w-f object-cover"
                alt="im"
              />
            </div>
          </div>
        </div>
      </div>

      {/* OANDA mobile trading apps */}
      <section className="justify-center flex bg-gray-900">
        <div className="p-4 pb-20  mx-auto max-w-4xl w-full  px-2 sm:px-4 md:px-8 lg:ps-20">
          <h2 className="text-3xl text-center lg:text-4xl text-gray-400 font-semibold mt-6">
            OANDA mobile trading apps{" "}
          </h2>
          <p className="my-5 text-base  text-gray-400 text-foreground/80 sm:mt-6 text-center">
            Trade on the go using our customizable interface, alert and price
            signal notifications, mobile charts and more. Our{" "}
            <a href="#" className="underline">
              mobile trading apps
            </a>{" "}
            give you access to more than 50 technical tools, including 32
            overlay indicators, 11 drawing tools and nine charts.
          </p>
          <div className="flex justify-center w-full my-10 gap-4">
            <a
              href={config.login_url}
              target="_blank"
              className="w-full shadow-[#191d2e] shadow-xl relative font-bold rounded-md text-white transition duration-200 md:ease-linear max-w-44 text-center align-center border-radius"
            >
              <img src="/Apple_Store.webp" className="w-full" alt="" />
            </a>
            <a
              href={config.login_url}
              target="_blank"
              className="w-full shadow-[#191d2e] shadow-xl relative font-bold rounded-md text-white transition duration-200 md:ease-linear max-w-44 text-center align-center border-radius"
            >
              <img src="/Google_Play.webp" className="w-full" alt="" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className=" max-w-7xl mx-auto p-2 sm:p-4 md:p-8 mb-5 sm:mb-10">
            <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-2 group-hover: lg:gap-10">
              {mobile_trading.map((mobile_trading) => {
                return (
                  <div
                    key={mobile_trading.title}
                    className="flex w-full rounded-2xl  overflow-hidden- bg-slate-900 px-2 sm:px-4 md:px-8 group hover:bg-slate-800 justify-between relative hover:scale-105 transition-all duration-300 ease-in-ou"
                  >
                    <div className="flex items-center h-full">
                      <div className="text-[#0A0A0A] md:pb-16 gap-y-4">
                        <div className="my-4">
                          <img
                            src={mobile_trading.img}
                            className="mx-auto"
                            alt=""
                          />
                        </div>
                        <h1 className="text-base text-center group-hover:text-gray-200 my-1 font-bold text-gray-500">
                          {mobile_trading.title}
                        </h1>
                        <p
                          className=" text-gray-500 group-hover:text-gray-400 dark:text-gray-300
                                 lg:text-base text-center text-foreground/80 sm:my-6"
                        >
                          {mobile_trading.description}
                        </p>
                        <a
                          href={mobile_trading.url}
                          className="flex justify-center group text-gray-500 items-center gap-3 transition-transform duration-300 ease-in-out transform hover:gap-4"
                        >
                          <p className="group-hover:underline">
                            {mobile_trading.linkTitle}
                          </p>
                          <p>
                            <FaArrowRightLong className="text-blue-900" />
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-slate-900">
          <div className="max-w-7xl mx-auto ">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="p-4 pb-20  mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:ps-20">
                <h2 className="text-3xl lg:text-4xl text-gray-400 font-semibold mt-12">
                  Unlock more opportunities with our Elite Trader Program**
                </h2>
                <p className="my-5 text-base text-gray-400 text-foreground/80 sm:mt-6 text-start">
                  The Elite Trader Program is for high-volume traders who want
                  an even better trading experience. Get personalized access to
                  premium forex trading tools, expert market analyst insights
                  and more.
                </p>

                <div className="flex items-center py-4">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Volume-based rebates
                  </p>
                </div>

                <div className="flex items-center py-4">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Exclusive discounts on third-party platforms, such as
                    TradingView
                  </p>
                </div>
                <div className="flex items-center py-4">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    VIP content and events
                  </p>
                </div>
                <div className="flex items-center py-4">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                </div>
                <div className="flex w-full mt-5 gap-4">
                  <a
                    href={config.login_url}
                    target="_blank"
                    className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 md:ease-linear md:w-60 text-center align-center py-4 border-radius"
                  >
                    Become an Elite Trader
                  </a>
                </div>
                <p className="text-sm my-5 text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                  **Subjected to meeting the criteria set out in the account
                  package offering.
                </p>
              </div>
              <div className="">
                <img
                  src="/trader/trader_program.png"
                  className="h-full object-cover"
                  alt="im"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="my-10 sm:my-20">
          <div className="max-w-7xl mx-auto ">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="ms:ps-20">
                <img
                  src="/trader/award-wining.webp"
                  className="h-full object-cover"
                  alt="image"
                />
              </div>
              <div className="p-4 pb-  mx-auto w-full max-w-screen-2xl px-2 sm:px-4 ">
                <h2 className="text-3xl lg:text-4xl text-gray-400 font-semibold ">
                  An award-winning online broker
                </h2>
                <p className="my-8 text-base text-gray-400 text-foreground/80 sm:mt-6 text-start">
                  Over 25 years of experience in trading has made us one of the
                  most recognized{" "}
                  <a href="#" className="underline">
                    online trading brokers
                  </a>{" "}
                  . Here are some of the awards we’ve received:
                </p>

                <div className="flex items-center py-4">
                  <div className="w-8">
                    <TfiCup className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Voted Most Popular Broker three years in a row (TradingView
                    Awards 2022, 2021, 2020).
                  </p>
                </div>

                <div className="flex items-center py-5">
                  <div className="w-8">
                    <TfiCup className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Named Best in Class for Research and Ease of Use
                    (ForexBrokers.com 2023 Annual Awards).
                  </p>
                </div>
                <div className="flex items-center py-5">
                  <div className="w-8">
                    <TfiCup className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Voted Best US Forex Broker (Compare Forex Brokers Awards
                    2023).
                  </p>
                </div>
                <div className="flex items-center py-5">
                  <div className="w-8">
                    <TfiCup className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm ps-2 md:ps-0 text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Voted Best Low Cost Broker (ADVFN International Financial
                    Awards 2023).
                  </p>
                </div>
                <div className="flex items-center py-5">
                  <div className="w-8">
                    <TfiCup className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm ps-2 md:ps-0 text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Voted Best Forex Broker two years in a row (TradingView
                    Broker Awards 2021, 2020).
                  </p>
                </div>
                <div className="flex items-center py-5">
                  <div className="w-8">
                    <TfiCup className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm ps-2 text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Awarded highest client satisfaction for mobile platform/app
                    (Investment Trends 2021 US Leverage Trading Report, Margin
                    Forex).
                  </p>
                </div>
                <div className="flex items-center py-5">
                  <div className="w-8">
                    <TfiCup className="text-[#0063A6] text-2xl " />
                  </div>
                  <p className="text-sm ps-2 text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Awarded highest overall client satisfaction (Investment
                    Trends 2021 US Leverage Trading Report, Margin Forex).
                  </p>
                </div>
                <div className="flex items-center py-5">
                  <div className="w-8">
                    <TfiCup className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm ps-2 md:ps-0 text-gray-400 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Best Trading Tools winner (Online Personal Wealth Awards
                    2021).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-4 pb-20  mx-auto max-w-4xl w-full  px-2 sm:px-4 md:px-8 lg:ps-20">
          <h2 className="text-3xl text-center lg:text-4xl text-gray-400 font-semibold mt-6">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-gray-500 border-0">
              <AccordionTrigger className="text-gray-500 bg-slate-900 rounded-2xl px-4 my-4">
                What are OANDA's hours of operation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 px-4">
                Our hours of operation coincide with the global financial
                markets. In the US, trading is available from approximately 5pm
                Sunday to 5pm Friday (New York time). Please note: these times
                are subject to change during daylight savings time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-gray-500 border-0">
              <AccordionTrigger className="text-gray-500 bg-slate-900 rounded-2xl px-4 my-4">
                What are the deposit options to fund my OANDA account for forex
                trading?{" "}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 px-4">
                Our deposit options vary based on the OANDA division with which
                you hold your account. Please check the relevant{" "}
                <a href="#" className="underline">
                  deposit funds
                </a>{" "}
                section for more details on how to fund your account.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-gray-500 border-0">
              <AccordionTrigger className="text-gray-500 bg-slate-900 rounded-2xl px-4 my-4">
                Which forex currency pairs and spreads can I trade?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 px-4">
                You can find a comprehensive list of available{" "}
                <a href="#" className="underline">
                  currency pairs and current spreads
                </a>{" "}
                .
                <br />
                To add pairs to your Rate list on the OANDA trading platform, go
                to Tools &gt; User Preferences &gt; Rates. To view all pairs on
                your MT4 platform, right-click any of the symbols listed in
                Market Watch section and choose "Show All".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-gray-500 border-0">
              <AccordionTrigger className="text-gray-500 bg-slate-900 rounded-2xl px-4 my-4">
                Can’t find what you’re looking for?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 px-4">
                See our{" "}
                <a href="#" className="underline">
                  full list of frequently asked questions.
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Everything you need  */}
        <section>
          <div className=" w-full my-10">
            <h1 className="text-xl sm:text-2xl text-center md:text-3xl text-hBlue">
              What our trading platform offers you
            </h1>
            <hr className="bg-hBlue border-hBlue h-0.5 w-20 mt-5 mb-8 mx-auto" />
            <p className="text-gray-600 text-center  max-w-2xl mx-auto">
              There are many reasons why you should choose OANDA. The benefits
              of our online trading platform include:
            </p>
          </div>
          <div>
            <div className=" max-w-7xl mx-auto p-2 sm:p-4 md:p-8 mb-5 sm:mb-10">
              <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-3 group-hover: lg:gap-8">
                {offers.map((offers) => {
                  return (
                    <div
                      key={offers.title}
                      className="flex w-full rounded-2xl  overflow-hidden- bg-slate-900 px-2 sm:px-4 md:px-8 group hover:bg-slate-800 justify-between relative hover:scale-105 transition-all duration-300 ease-in-ou"
                    >
                      <div className="flex items-center h-full">
                        <div className="text-[#0A0A0A] md:pb-16 gap-y-4">
                          <div className="my-4">
                            <img src={offers.img} className="mx-auto" alt="" />
                          </div>
                          <h1 className="text-base text-center group-hover:text-gray-200 my-1 font-bold text-gray-500">
                            {offers.title}
                          </h1>
                          <p
                            className=" text-gray-500 group-hover:text-gray-400 dark:text-gray-300
                                 lg:text-base text-center text-foreground/80 sm:my-6"
                          >
                            {offers.description}
                          </p>
                          <a
                            href={offers.url}
                            className="flex justify-center group text-gray-500 items-center gap-3 transition-transform duration-300 ease-in-out transform hover:gap-4"
                          >
                            <p className="group-hover:underline">
                              {offers.linkTitle}
                            </p>
                            <p>
                              <FaArrowRightLong className="text-blue-900" />
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default trading;

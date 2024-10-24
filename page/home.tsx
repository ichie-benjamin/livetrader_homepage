import Container from "./components/global/container";
import { ChevronRight } from "lucide-react";
import { FlipWords } from "./components/sourceFiles/FlipWords";
import Apple from "/icons/asset-apple.svg";
import Fb from "/icons/asset-fb.svg";
import Google from "/icons/asset-google.svg";
import Donald from "/icons/asset-mcdonalds.svg";
import Tesla from "/icons/asset-tesla.svg";
import Hero from "/images/ebu_bg.png";
import { Wrapper } from "./components";
import { TabsDemo } from "./components/ui/tabDemo";
import { cn } from "./lib/utils";
import {
  // reviews,
  config,
  WHY_CHOOSE_LIVETRADING,
  HOW_TO_GET_STARTED,
  TESTIMONIALS,
  MISSION_VISION_VALUES,
  liveTraders,
  Steps,
} from "./constants";
import SectionBadge from "./components/ui/section-badge";
import { GiCheckMark } from "react-icons/gi";
// import { EconomicCalendar, MarketOverview } from "react-ts-tradingview-widgets";
// import AssetTable from "./components/home/AssetTable";
// import { TabsDemo } from "./components/ui/tabDemo";
// import Keyimg from "/public/key.png"
// import { GiCheckMark } from "react-icons/gi";
import Marquee from "./components/ui/marquee";
import { UserIcon } from "lucide-react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TableDemo } from "./components/ui/benefits";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
// import Label
// import { SelectLabel } from "./components/ui/select";
// import { Button } from "./components/ui/button";
function App() {
  const firstTestimonial = TESTIMONIALS.slice(0, TESTIMONIALS.length / 2);
  const secondTestimonial = TESTIMONIALS.slice(TESTIMONIALS.length / 2);
  const words = ["Crypto Future", "CFD Trading", "Buying Crypto"];

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-2 md:px-0 py-8 text-[#A8A8A8]">
      {/* hero */}

      <div className="lg:ps-20">
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

        <Container className="w-full">
          <div className="flex flex-col items-center justify-center lg:py-20 py-2 h-full">
            <button className="group relative grid overflow-hidden mb-4 rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                {/* <img
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="w-4 h-4 md:mb-4"
                /> */}
                <span className="text-xl">✨</span>
                Welcome to {config.site_name}
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>

            <div className="h-full relative- grid grid-cols-1 gap-8 gap-y-10  lg:grid-cols-12">
              <div className="col-span-6 sm:my-6 md:px-10 sm:px-4 px-2 sm:py-4">
                <div className="text-3xl w-full md:text-6xl lg:text-6xl md:!leading-tight font-extrabold text-start bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                  All-in-one platform for
                  <FlipWords words={words} />
                </div>
                <div className="mt-2 sm:mt-8 w-full">
                  <div className="mt-4 flex  items-center gap-6 w-full">
                    <a
                      target="_blank"
                      href={config.login_url}
                      className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF] text-center py-3 rounded-xl bg-[#0070f3] font-bold text-white transition duration-200 lg:text-xl md:ease-linear md:w-60"
                    >
                      Open account
                    </a>
                  </div>
                </div>

                <section className="flex flex-wrap pt-10 lg:pt-40 items-end gap-x-4  sm:my-6 gap-y-4 bg-">
                  <div className="flex flex-row items-center">
                    <span className="h-12 w-12 rounded-full">
                      <img
                        alt="profile imgimg"
                        src={Apple}
                        width={80}
                        height={80}
                      />
                    </span>
                    <span className="h-12 w-12 -ms-4 rounded-full">
                      <img
                        alt="profile imgimg"
                        src={Fb}
                        width={80}
                        height={80}
                      />
                    </span>
                    <span className="h-12 w-12 -ms-4 rounded-full">
                      <img
                        alt="profile imgimg"
                        src={Google}
                        width={80}
                        height={80}
                      />
                    </span>
                    <span className="h-12 w-12 -ms-4 rounded-full">
                      <img
                        alt="profile imgimg"
                        src={Donald}
                        width={80}
                        height={80}
                      />
                    </span>
                    <span className="h-12 w-12 -ms-4 rounded-full">
                      <img
                        alt="profile imgimg"
                        src={Tesla}
                        width={80}
                        height={80}
                      />
                    </span>
                    <span className="ms-4">
                      <h4 className="text-lg text-white font-bold items-end">
                        +100 <span className="">assets</span>
                      </h4>
                      <p className="text-sm text-[#A8A8A8]">
                        Providing you with the opportunity to invest, in more
                        than 100 assets for continuous income
                      </p>
                    </span>
                  </div>
                </section>

                <div></div>
              </div>
              <div className="col-span-6 lg:absolute- w-full lg:right-0 rounded-lg">
                <img
                  className="h-full object-left object-cover"
                  alt="hero imgimg"
                  src={Hero}
                  width={1500}
                  height={1500}
                />
              </div>
            </div>

            <section className="w-full">
              <div className="flex flex-col text-[20px] sm:text-xl lg:text-2xl items-center mt-12 max-w-7xl- md:w-full"></div>
            </section>
          </div>
        </Container>
      </div>

      <Wrapper>
        <Container>
          <section className="w-full">
            <div className="flex flex-col text-[20px] sm:text-xl lg:text-2xl items-center mt-12 max-w-7xl- md:w-full ">
              <h1 className="text-[#fff] my-1 font-bold">
                Why Choose {config.site_name}?
              </h1>
              <p className="max-w-3xl text-base md:text-lg text-foreground/80 sm:mt-6 text-start sm:text-center">
                Join 1M+ traders who choose {config.site_name} as their go-to
                trading platform. Start buying Crypto or trading Crypto Futures,
                CFDs, and more today.
              </p>
              <div className="w-full mt-3">
                <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-3 group-hover: lg:gap-8">
                  {WHY_CHOOSE_LIVETRADING.map((item) => {
                    return (
                      <div
                        key={item.title}
                        className="flex w-full rounded-2xl  overflow-hidden- bg-gray-50 px-2 sm:px-4 group hover:bg-[#212121] justify-between relative"
                      >
                        <div className="flex items-center h-full">
                          <div className="text-[#0A0A0A] md:py-8 gap-y-4">
                            <h1 className="group-hover:text-gray-200 text-center my-1 font-bold">
                              {item.title}
                            </h1>
                            <p
                              className="text-xs  text-gray-600 dark:text-gray-300
                                 lg:text-base text-foreground/80 sm:mt-6- text-start"
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Wrapper>

      <div className="my-5 sm:my-10 md:my-16 lg:my-28 flex flex-col md:flex-row gap-4 lg:justify-between justify-center lg:gap-8 text-white md:divide-y-0  divide-y md:divide-x divide-[#2e2d2d] w-full">
        <div className="mx-auto w-full">
          <h2 className=" text-3xl text-white text-center lg:text-6xl ">
            {" "}
            24/7
          </h2>
          <p className="max-w-3xl text-base text-center md:text-lg text-foreground/80 sm:mt-6 sm:text-center">
            Human support
          </p>
        </div>
        <div className="mx-auto w-full">
          <h2 className=" text-3xl text-white text-center lg:text-6xl "> 0%</h2>
          <p className="max-w-3xl text-base text-center md:text-lg text-foreground/80 sm:mt-6 sm:text-center">
            Fees from{" "}
          </p>
        </div>
        <div className="mx-auto w-full">
          <h2 className=" text-3xl text-white text-center lg:text-6xl ">
            {" "}
            $20,000
          </h2>
          <p className="max-w-3xl text-base text-center md:text-lg text-foreground/80 sm:mt-6 sm:text-center">
            Compensation Fund per user
          </p>
        </div>
        <div className="mx-auto w-full">
          <h2 className=" text-3xl text-white text-center lg:text-6xl ">
            {" "}
            100%
          </h2>
          <p className="max-w-3xl text-base text-center md:text-lg text-foreground/80 sm:mt-6 sm:text-center">
            Human support
          </p>
        </div>
      </div>

      {/*  */}
      <Wrapper>
        <Container>
          <section id="market" className="w-full">
            <div className="w-full  flex justify-between md:p-8">
              <div className="w-full px-1 md:p-5 py-20 md:py-32 bg-white rounded-2xl ">
                <div className="">
                  <a
                    href="#"
                    className="text-[#0A0A0A] text-center max-w-3xl mx-auto"
                  >
                    <h1 className="my-1 text-2xl md:text-4xl lg:text-5xl font-bold ">
                      Trade your{" "}
                      <span className="text-[#3760FF]">
                        {" "}
                        favourite markets{" "}
                      </span>
                    </h1>
                    <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-base text-foreground/80 my-6">
                      Want to buy Bitcoin outright or trade CFDs on Gold or
                      EUR/USD? We’ve got you covered with access to 100+ global
                      markets on one platform.
                    </p>
                  </a>
                  <TabsDemo />
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Wrapper>

      {/* section 2 */}
      <Wrapper>
        <section className="w-full">
          <div className="flex flex-col text-[20px] sm:text-xl lg:text-2xl items-center mt-12 max-w-7xl- md:w-full ">
            <h1 className="text-[#fff] my-1 font-bold">Select your product</h1>
            <p className="max-w-3xl text-base md:text-lg text-foreground/80 sm:mt-6 text-start sm:text-center">
              Join 1M+ traders who choose PrimeXBT as their go-to trading
              platform. Start buying Crypto or trading Crypto Futures, CFDs, and
              more today.
            </p>
            <div className="w-full">
              <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-2 group-hover: lg:gap-8">
                <div className="flex w-full rounded-2xl  overflow-hidden- bg-gray-50 px-2 sm:px-4 group hover:bg-[#212121] justify-between relative">
                  <div className="flex items-center h-full">
                    <a href="#" className="text-[#0A0A0A] md:py-8 gap-y-4">
                      <h1 className="group-hover:text-gray-200 my-1 font-bold">
                        CFDs and Forex
                      </h1>
                      <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-base text-foreground/80 sm:mt-6- text-start">
                        Trade 100+ markets like EUR/USD & SP500.
                      </p>
                    </a>
                  </div>
                  <div>
                    <div className="max-w-40 pt-2 md:pt-8">
                      <img
                        className=" bottom-0 right-0 object-cover h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-44  group-hover:h-[1] group-hover:sm:h-[131px] group-hover:lg:w-[147px] transition-all duration-300 ease-in-out"
                        src="/assets/product-cdfsforex.webp"
                        alt="image"
                        height={200}
                        width={200}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full rounded-2xl  overflow-hidden bg-gray-50 px-4 group hover:bg-[#212121] justify-between relative hover:shadow-lg transition-all duration-300 ease-in-out">
                  <div className="flex items-center h-full">
                    <a href="#" className="text-[#0A0A0A] gap-y-4">
                      <h1 className="group-hover:text-gray-200 my-1 font-bold">
                        Buy Crypto
                      </h1>
                      <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:font-semibold md:text-base text-foreground/80 sm:mt-6- text-start">
                        Easily buy Crypto with Visa or Mastercard.
                      </p>
                    </a>
                  </div>
                  <div>
                    <div className="max-w-40 pt-2 md:pt-8">
                      <img
                        className=" bottom-0 right-0 object-cover h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-44  group-hover:h-[1] group-hover:sm:h-[131px] group-hover:lg:w-[147px] transition-all duration-300 ease-in-out"
                        src="/assets/product-cryptofutures.webp"
                        alt="image"
                        height={200}
                        width={200}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full rounded-2xl  overflow-hidden- bg-gray-50 px-4 group hover:bg-[#212121] justify-between relative">
                  <div className="flex items-center h-full">
                    <a href="#" className="text-[#0A0A0A] gap-y-4">
                      <h1 className="group-hover:text-gray-200 my-1 font-bold">
                        Crypto Futures
                      </h1>
                      <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-base text-foreground/80 sm:mt-6- text-start">
                        Trade Crypto Futures Contracts incl. BTC & ETH.
                      </p>
                    </a>
                  </div>
                  <div>
                    <div className="max-w-40  pt-2 md:pt-8">
                      <img
                        className=" bottom-0 right-0 object-cover h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-44  group-hover:h-[1] group-hover:sm:h-[131px] group-hover:lg:w-[147px] transition-all duration-300 ease-in-out"
                        src="/assets/product-cryptofutures.webp"
                        alt="image"
                        height={200}
                        width={200}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full rounded-2xl  overflow-hidden bg-gray-50 px-4 group hover:bg-[#212121] justify-between relative hover:shadow-lg transition-all duration-300 ease-in-out">
                  <div className="flex items-center h-full">
                    <a href="#" className="text-[#0A0A0A] gap-y-4">
                      <h1 className="group-hover:text-gray-200 my-1 font-bold">
                        Copy Trading
                      </h1>
                      <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:font-semibold md:text-base text-foreground/80 sm:mt-6- text-start">
                        Profit from the markets by following the experts.{" "}
                      </p>
                    </a>
                  </div>
                  <div>
                    <div className="max-w-40  pt-2 md:pt-8">
                      <img
                        className=" bottom-0 right-0 object-cover h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-44  group-hover:h-[1] group-hover:sm:h-[131px] group-hover:lg:w-[147px] transition-all duration-300 ease-in-out"
                        src="/assets/product-copytrading.webp"
                        alt="image"
                        height={200}
                        width={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full mt-16">
              <a
                href={config.login_url}
                target="_blank"
                className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 lg:text-xl md:ease-linear md:w-60 text-center align-center py-4 border-radius"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </Wrapper>

      {/* About us */}

      <Wrapper className="py-12">
        <Container>
          <section className="w-full" id="about">
            <div className="w-full  flex justify-between md:p-8">
              <div className="w-full px-1 md:p-5 py-20 md:py-32 bg-white rounded-2xl ">
                <div className="">
                  <a
                    href="#"
                    className="text-[#0A0A0A] text-center max-w-3xl mx-auto"
                  >
                    <h1 className="my-1 text-2xl md:text-4xl lg:text-5xl font-bold ">
                      About{" "}
                      <span className="text-[#3760FF]">
                        {" "}
                        {config.site_name}{" "}
                      </span>
                    </h1>
                    <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-base text-foreground/80 my-6">
                      {config.site_name} is a dynamic and forward-thinking
                      trading platform, designed with a focus on innovation,
                      security, and user experience.
                      <br />
                      We are committed to delivering a world-class trading
                      environment where users can trade a diverse range of
                      financial instruments, including cryptocurrencies, Forex,
                      commodities, and more.
                      <br />
                      Whether you are a seasoned trader or just starting,
                      <br />
                      {config.site_name} is here to support your trading journey
                      every step of the way
                    </p>
                  </a>

                  <div className="container mx-auto p-8">
                    {/* Mission and Vision Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Mission Box */}
                      <div className="bg-gray-100 rounded-2xl p-12 flex flex-col items-center text-center">
                        <h3 className="text-2xl text-[#3760FF] font-bold mb-2">
                          {MISSION_VISION_VALUES.mission.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {MISSION_VISION_VALUES.mission.description}
                        </p>
                      </div>

                      {/* Vision Box */}
                      <div className="bg-gray-100 rounded-2xl p-12 flex flex-col items-center text-center">
                        <h3 className="text-2xl text-[#3760FF] font-bold mb-2">
                          {MISSION_VISION_VALUES.vision.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {MISSION_VISION_VALUES.vision.description}
                        </p>
                      </div>
                    </div>

                    {/* Values Section */}
                    <div className="mt-12">
                      <h2 className="text-center text-[#0A0A0A] mb-8 text-2xl md:text-2xl lg:text-3xl font-bold ">
                        Our Values
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {MISSION_VISION_VALUES.values.map((value, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 rounded-2xl p-12 text-center"
                          >
                            <h3 className="text-xl text-[#3760FF] font-semibold mb-2">
                              {value.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {value.description}
                            </p>

                            <div className="py-6">
                              <img
                                className="h-full  object-center object-cover"
                                alt="hero image"
                                src={value.image}
                                width={500}
                                height={700}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Wrapper>

      {/* how it works */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Get started in minutes
            </h2>
            <p className="text-muted-foreground mt-6">
              Our clients love how fast and simple our sign-up is. It takes just
              a few minutes to get started!
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
              {HOW_TO_GET_STARTED.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
                >
                  {/*<div className="flex items-center justify-center">*/}
                  {/*  <perk.icon className="w-8 h-8" />*/}
                  {/*</div>*/}
                  <SectionBadge title={item.step} />

                  <h3 className="text-lg font-medium mt-4">{item.step}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      <Wrapper className="py-12">
        <Container>
          <section className="w-full" id="about">
            <div className="w-full  flex justify-between md:p-8">
              <div className="w-full px-1 md:p-5 py-10 md:py-32 bg-white rounded-2xl ">
                <div className="grid grid-cols-1 lg:grid-cols-12 ">
                  <div className="lg:col-span-8">
                    <div className="">
                      <div className=" bg-[#0063A6] py-2  px-2">
                        <p className="text-sm  text-gray-100 dark:text-gray-300 group-hover:font-semibold lg:text-base text-foreground/80 ">
                          Financial Services Compensation Scheme (FSCS){" "}
                        </p>
                      </div>
                      <div className="flex justify-between items-center border-x py-2  px-2">
                        <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-base text-foreground/80 w-5/6">
                          The Financial Services Compensation Scheme (FSCS) is
                          the UK’s safety net for customers of authorized
                          financial firms. If a company goes out of business or
                          stops trading, the FSCS might compensate its
                          customers. It covers businesses regulated by the
                          Financial Conduct Authority (FCA).
                          <br />
                          Clients of E-Bull Trading AI Inc. fall under the
                          ‘investments’ category. If there’s a problem with
                          segregated accounts (accounts where your money is kept
                          separate from the company’s funds), you’ll still be
                          eligible for compensation. If E-Bull Trading AI Inc.
                          went into liquidation, the money in segregated
                          accounts would be returned to clients after the costs
                          of managing the process. If there’s any missing money,
                          you might still be compensated through the FSCS.
                        </p>
                        <GiCheckMark className="text-[#66B849] text-xl " />
                      </div>
                      <div className="flex justify-between items-center border-x py-2 bg-[#BBBBBB] px-2">
                        <p className="text-sm  text-gray-600 dark:text-gray-300  lg:text-base text-foreground/80 w-5/6">
                          {config.site_name} uses its own funds for hedging. It
                          does not use client funds for this purpose
                        </p>
                        <GiCheckMark className="text-[#66B849] text-xl " />
                      </div>
                      <div className="flex justify-between items-center border-x py-2  px-2">
                        <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-base text-foreground/80 w-5/6">
                          {config.site_name} does not pass client funds through
                          to hedging counter-parties
                        </p>
                        <GiCheckMark className="text-[#66B849] text-xl " />
                      </div>
                      <div className="flex justify-between items-center border-x py-2 bg-[#BBBBBB] px-2">
                        <p className="text-sm  text-gray-600 dark:text-gray-300  lg:text-base text-foreground/80 w-5/6">
                          {config.site_name} does not initiate speculative
                          positions in the market
                        </p>
                        <GiCheckMark className="text-[#66B849] text-xl " />
                      </div>
                      <div className="flex justify-between items-center border-x py-2  px-2">
                        <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-base text-foreground/80 w-5/6">
                          {config.site_name} has no exposure to corporate or
                          sovereign debt
                        </p>
                        <GiCheckMark className="text-[#66B849] text-xl " />
                      </div>
                      <div className="flex justify-between items-center border-x py-2 bg-[#BBBBBB] px-2">
                        <p className="text-sm  text-gray-600 dark:text-gray-300  lg:text-base text-foreground/80 w-5/6">
                          {config.site_name} does not invest funds of retail
                          clients
                        </p>
                        <GiCheckMark className="text-[#66B849] text-xl " />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div>
                      <img
                        src="/key.png"
                        alt="An image of a key"
                        className="w-auto h-auto mx-auto my-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Wrapper>

      <Wrapper className="flex flex-col items-center justify-center py-4 relative">
        <div
          id="testimonials"
          className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"
        ></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Our Customers" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              What people are saying
            </h2>
            <p className="text-muted-foreground mt-6">
              Trusted by over 5,000,000 traders
            </p>
          </div>
        </Container>

        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstTestimonial.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.title}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.message}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none"
              >
                {secondTestimonial.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.title}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.message}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/*****************************
                                     ******************************
                                    
                            https://www.oanda.com/us-en/trading/elite-trader/

                                    ****************************** 
                                    ******************************/}
      <section className=" bg-[#D7D4C6] ">
        <section>
          <Container className="text-gray-600">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="p-4 pb-10 sm:py-10 md:py-20 mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-20">
                <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                  Become a live trader and unlock your true trading potential
                </h2>
                <p className="max-w-3xl- text-base md:text-xl text-foreground/80 sm:mt-6 text-start">
                  Designed exclusively for high-volume traders, our Elite Trader
                  program unlocks more benefits the more you trade.
                </p>
                <p className="max-w-3xl- text-base mb-4 md:text-xl text-foreground/80 sm:mt-6 text-start">
                  Sign up today to enjoy:
                </p>

                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80">
                    A reduction of your trading costs by up to 34% with cash
                    rebates
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-10">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80 px-2">
                    A dedicated relationship manager who will handle your
                    queries quickly. Access to exclusive discounts on
                    third-party platforms such as TradingView
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80">
                    Access to VIP content and events
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80">
                    Cash rebates from US$5 to US$17 per million
                  </p>
                </div>
                <div className="flex w-full mt-10">
                  <a
                    href={config.login_url}
                    target="_blank"
                    className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 lg:text-xl md:ease-linear md:w-60 text-center align-center py-4 border-radius"
                  >
                    Sign Up{" "}
                  </a>
                </div>
              </div>
              <div className="">
                <img
                  src={liveTraders[0].heroImage}
                  className="h-full w-full object-cover"
                  alt="im"
                />
              </div>
            </div>
          </Container>
        </section>
      </section>

      <section>
        <Wrapper>
          <Container>
            <section className="w-full">
              <div className="flex flex-col text-[20px] sm:text-xl lg:text-2xl items-center mt-12 max-w-7xl- md:w-full ">
                <h1 className="text-[#fff] my-1 font-bold">
                  Why Choose {config.site_name}?
                </h1>
                <p className="max-w-3xl text-base md:text-lg text-foreground/80 sm:mt-6 text-start sm:text-center">
                  Join 1M+ traders who choose {config.site_name} as their go-to
                  trading platform. Start buying Crypto or trading Crypto
                  Futures, CFDs, and more today.
                </p>
                <div className="w-full mt-3">
                  <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-3 group-hover: lg:gap-8">
                    {Steps.map((Steps) => {
                      return (
                        <div
                          key={Steps.title}
                          className="flex w-full rounded-2xl  overflow-hidden- bg-gray-50 px-2 sm:px-4 group hover:bg-[#212121] justify-between relative"
                        >
                          <div className="flex items-center h-full">
                            <div className="text-[#0A0A0A] md:pb-16 gap-y-4">
                              <div className="my-4">
                                <img src={Steps.img} alt="" />
                              </div>
                              <h1 className="group-hover:text-gray-200 my-1 font-bold text-gray-600">
                                {Steps.title}
                              </h1>
                              <p
                                className=" text-gray-600 hover:text-gray-400 dark:text-gray-300
                                 lg:text-lg text-foreground/80 sm:my-6 text-start"
                              >
                                {Steps.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </Wrapper>
      </section>
      <Wrapper>
        <Container>
          <section className="py-10 sm:py-28 w-full">
            <section className="w-full border">
              <TableDemo />
            </section>
          </section>
        </Container>
      </Wrapper>

      <section>
        <div className="max-w-4xl mx-auto text-gray-400">
          <h3 className="text-2xl font-bold mb-4 text-">
            Example of Rebate Payout
          </h3>
          <p className="text-lg">
            The total monthly trading volume for all sub-accounts associated
            with the username is US$150 million.
          </p>

          <p className="text-lg my-4">
            You earn US$7 for each US$1 million traded within the month.
          </p>
          <p className="text-lg">
            The rebate credited to your account amounts to US$1,050 (150 *
            US$7).
          </p>
        </div>
      </section>

      <section className="bg-[#0c1223e2] w-full py-10 sm:py-16 md:py-32 mt-5 sm:mt-10">
        <div className="max-w-4xl mx-auto text-gray-400 ">
          <h3 className="text-3xl md:text-4xl sm: font-bold mb-4 text-center">
            Interest on unused margin
          </h3>

          <p className="text-lg sm:text-xl text-center my-4 max-w-3xl mx-auto">
            As an added advantage, account holders have the opportunity to earn
            interest on any unused margin that exceeds $10,000. This means that
            with us, your funds continue to work for you and generate interest,
            even when they are not actively invested in the market. It’s a way
            to ensure that your money is always earning, giving you even more
            value for maintaining a balance with us. Please note, terms and
            conditions apply.
          </p>
          <div className="flex w-full mt-10">
            <a
              href={config.login_url}
              target="_blank"
              className="hover:bg-[#2955FF] mx-auto w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 lg:text-xl md:ease-linear md:w-60 text-center align-center py-4 border-radius"
            >
              Find out more{" "}
            </a>
          </div>
        </div>
      </section>
      <section className=" bg-[#D7D4C6] ">
        <section>
          <Container className="text-gray-600">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="max-h-fit">
                <img
                  src={liveTraders[0].benefitsImage}
                  className="h-auto w-full object-cover"
                  alt="im"
                />
              </div>
              <div className="p-4 pb-10 sm:py-10 md:pt-16 mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-20">
                <h2 className="text-3xl lg:text-4xl font-semibold">
                  Exclusive benefits
                </h2>

                <div className="flex items-center py-3 mt-4">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80">
                    Cash rebate
                  </p>
                </div>
                <p className="max-w-3xl- text-base mb-4 md:text-xl text-foreground/80 sm:mt-6 text-start">
                  Reduce your trading expenses by as much as 34% and receive up
                  to US$17 for every US$1 million traded.
                </p>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80">
                    Personalized support from a dedicated relationship manager.{" "}
                  </p>
                </div>
                <p className="max-w-3xl- text-base mb-4 md:text-xl text-foreground/80 sm:mt-6 text-start">
                  Exclusive support from a top-tier relationship manager, fully
                  dedicated to your trading account.
                </p>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80">
                    Discounts
                  </p>
                </div>
                <p className="max-w-3xl- text-base mb-4 md:text-xl text-foreground/80 sm:mt-6 text-start">
                  Discounted rates on premium third-party platforms such as
                  TradingView.{" "}
                </p>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80">
                    Exclusive VIP perks and benefits{" "}
                  </p>
                </div>
                <p className="max-w-3xl- text-base mb-4 md:text-xl text-foreground/80 sm:mt-6 text-start">
                  Exclusive access to premium content and special events
                  designed specifically for our top-tier traders.{" "}
                </p>
                <div className="flex w-full mt-10">
                  <a
                    href={config.login_url}
                    target="_blank"
                    className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 lg:text-xl md:ease-linear md:w-60 text-center align-center py-4 border-radius"
                  >
                    Sign up{" "}
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </section>

      <section className="bg-[#0c1223e2] w-full py-10 sm:py-16 md:py-32">
        <Wrapper>
          <div className="text-gray-400 ">
            <h3 className="text-3xl md:text-4xl sm: font-bold mb-4">
              {config.site_name} program information
            </h3>

            <ul className="list-disc list- pl-5">
              <li>
                <p className="text-lg sm:text-xl my-4">
                  The {config.site_name} tiers will be evaluated on a monthly
                  basis based on the trading volume (in USD) from the previous
                  month for all accounts associated with a specific username.
                </p>
              </li>
              <li>
                <p className="text-lg sm:text-xl my-4">
                  Rebates are typically credited within 15 business days after
                  the end of the following month.
                </p>
              </li>
              <li>
                <p className="text-lg sm:text-xl my-4">
                  OANDA clients who are referred by an introducing broker or who
                  receive benefits from specific third-party OANDA affiliates
                  may not qualify for this program.
                </p>
              </li>
              <li>
                <p className="text-lg sm:text-xl my-4">
                  Clients benefiting from spread or commission reductions linked
                  to previous promotions will not be eligible for rebates. If
                  you currently receive a pricing discount from a past offer and
                  want to learn how to become eligible for rebates, please
                  contact us at rm@oanda.com.
                </p>
              </li>
            </ul>
            <p className="text-lg sm:text-xl my-4">
              If you're a high-volume trader and want to learn more about the
              complete details of the {config.site_name} Program,
              <a href="#" className="underline ms-1">
                please click here.
              </a>
            </p>
          </div>
        </Wrapper>
      </section>

      <section className=" bg-[#D7D4C6]-">
        <section>
          <Container className="text-gray-600">
            <div className="grid xl:grid-cols-2 grid-cols-1">
              <div className="max-h-fit hidden xl:flex">
                <img
                  src={liveTraders[0].signalImage}
                  className="h-auto w-full object-cover"
                  alt="im"
                />
              </div>
              <div className="p-4 pb-10 sm:py-10 md:pt-16 mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-20">
                <div className="w-full items-center gap-1.5">
                  <label htmlFor="firstname">First Name</label>
                  <Input
                    type="text"
                    id="firstname"
                    placeholder="Enter Your First Name"
                    className="py-5 sm:py-7"
                  />
                </div>
                <div className="w-full items-center gap-1.5 mt-6">
                  <label htmlFor="Lastname">Last Name</label>
                  <Input
                    type="text"
                    id="Lastname"
                    placeholder="Enter Your Last Name"
                    className="py-5 sm:py-7"
                  />
                </div>
                <div className="w-full items-center gap-1.5 mt-6">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Youremail@gamil.com"
                    className="py-5 sm:py-7"
                  />
                </div>
                <div className="w-full items-center gap-1.5 mt-6">
                  <label htmlFor="phone">Contact Number</label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="+234"
                    className="py-5 sm:py-7"
                  />
                </div>

                <div className="grid w-full gap-1.5 mt-6">
                  <label htmlFor="comment">Additional comments:</label>
                  <Textarea
                    placeholder="Type your comment here."
                    id="comment"
                    className="h-40"
                  />
                  <p className="text-xs text-gr">Optional</p>
                </div>
                <div>
                  <p className="text-sm font-bold mt-4">
                    By clicking "Submit", I agree that OANDA may contact me to
                    provide information on its products and services, and
                    consent to the collection of my contact information by OANDA
                    for this purpose.
                  </p>
                </div>
                <div className="flex justify-end w-full mt-10">
                  <a
                    href={config.login_url}
                    target="_blank"
                    className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 lg:text-xl md:ease-linear md:w-60 text-center align-center py-4 border-radius"
                  >
                    Sign up{" "}
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </section>

      <section className=" bg-[#919295] ">
        <section>
          <Container className="text-gray-700">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="p-4 pb-10 sm:py-10 md:py-20 mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-20">
                <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                  More reasons to trade with {config.site_name}
                </h2>
                <p className="max-w-3xl- text-base md:text-xl text-foreground/80 sm:mt-6 text-start">
                  For over 20 years, we’ve delivered a variety of services and
                  benefits to our clients, ensuring lasting relationships and
                  customer satisfaction. These include:
                </p>
                <p className="max-w-3xl- text-base mb-4 md:text-xl text-foreground/80 sm:mt-6 text-start">
                  Sign up today to enjoy:
                </p>

                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-700 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80 px-2">
                  Our award-winning platforms provide innovative solutions that consistently deliver exceptional performance and value to our clients.
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-10">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-700 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80 px-2">We offer highly competitive spreads and margins, ensuring our clients get the best possible trading conditions.
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-700 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80 px-2">We provide innovative trading education, empowering our clients with the knowledge and skills needed to succeed in the markets.</p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-700 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80 px-2">
                  Our transparent pricing ensures that clients always know the true cost of their trades, with no hidden fees or surprises.                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-700 dark:text-gray-300 group-hover:font-semibold lg:text-lg text-foreground/80 px-2">    Our platform features powerful tools powered by TradingView, giving clients advanced charting and analysis capabilities for more informed trading decisions.          </p>
                </div>
               
                <div className="flex w-full mt-10">
                  <a
                    href={config.login_url}
                    target="_blank"
                    className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 lg:text-xl md:ease-linear md:w-60 text-center align-center py-4 border-radius"
                  >
                    Sign Up{" "}
                  </a>
                </div>
              </div>
              <div className="relative ">
                <img
                  src={liveTraders[0].reasonImage}
                  className="h-full w-full object-cover"
                  alt="im"
                />
                <div className="bg-black/40 w-full h-full absolute top-0"></div>
              </div>
            </div>
          </Container>
        </section>
      </section>
    </section>
  );
}

export default App;

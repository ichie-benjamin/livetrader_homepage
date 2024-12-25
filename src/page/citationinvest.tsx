import Navbar from "../components/home/navigation/navbar";
import VideoBg from "/citationinvest/hero_bg.mp4";
import Managed_portfolios from "/citationinvest/managed_portfolios.png";
import SEAMLESS_DEPOSIT from "/citationinvest/SEAMLESS_DEPOSIT.webp";
import TRADE_INSIGHTS from "/citationinvest/TRADE_INSIGHTS.gif";
import PRICING from "/citationinvest/PRICING.webp";
import ABOUT_PROWEBTRADER from "/citationinvest/ABOUT_PROWEBTRADER.webp";
import PlatformTabs from "../components/ui/platformTabs";
const citationinvest = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative h-screen w-full">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={VideoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75"></div>

        {/* Content */}

        <div className="max-w-7xl p-2 sm:p-5 mx-auto relative z-10 flex flex-col items-start  justify-center h-full text-start text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-[54px] font-bold lg:leading-tight">
              Join The Global Leader Of <br /> Financial Investments.
            </h1>
            <p className="mt-4 sm:mt-6 text-lg md:text-xl">
              Experience a world of opportunities for you to invest. <br />
              Low-cost access to the top globally traded stocks, bonds,
              currencies, futures, options, and mutual funds.
            </p>
            <div className="mt-6 sm:mt-8 flex gap-4">
              <button className="bg-hBlue px-6 py-2 rounded font-semibold text-white hover:bg-hBlue/70">
                Open Account
              </button>
              <button className="border-2 border-hBlue px-6 py-2 rounded font-semibold text-hBlue hover:bg-hBlue hover:text-white">
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-2 bg-white p-2 rounded">
            <img
              src="https://flagcdn.com/w320/gb.png"
              alt="English"
              className="w-6 h-4"
            />
            <span className="text-black text-sm font-medium">English</span>
          </div>
        </div>
      </div>
      <div className="bg-white py-10 sm:px-5">
        <div className="max-w-7xl mx-auto px-2 sm:px-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
            {/* Managed portfolios */}
            <div className="">
              <h3 className="text-hBlue font-bold text-lg">
                Managed portfolios
              </h3>
              <p className="text-gray-800">
                Investment and trading strategies are expertly executed on your
                behalf.
              </p>
            </div>
            {/* Seamless deposits & withdrawals */}
            <div>
              <h3 className="text-hBlue font-bold text-lg">
                Seamless deposits & withdrawals
              </h3>
              <p className="text-gray-800">
                Hassle-free deposit and withdrawal of funds anytime.
              </p>
            </div>
            {/* Free trading tools */}
            <div>
              <h3 className="text-hBlue font-bold text-lg">
                Free trading tools
              </h3>
              <p className="text-gray-800">
                Spot and analyze market opportunities, make clear decisions.
              </p>
            </div>
            {/* Trade insights */}
            <div>
              <h3 className="text-hBlue font-bold text-lg">Trade insights</h3>
              <p className="text-gray-800">
                Deep market research, cutting-edge resources to inform you.
              </p>
            </div>
          </div>
        </div>

        {/**********************************************
                    MANAGED PORTFOLIOS
        **********************************************/}

        <section>
          <div>
            <div className="max-w-7xl mx-auto grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-12 p-2 sm:p-4">
              <div className="col-span-6 h-full flex items-center py-20 order-2 md:order-1">
                <div className="mx-auto max-w-4xl text-gray-700 flex flex-col md:items-start">
                  <h1 className="font-bold mb-4 text-start w-full text-sm">
                    MANAGED PORTFOLIOS{" "}
                  </h1>
                  <h1 className="font-semibold text-gray-900 text-start w-full text-3xl sm:text-4xl ">
                    You own it, we expertly manage it
                  </h1>
                  <p className="text-gray text-lg sm:text-xl my-4 ">
                    Our dedicated portfolio managers will expertly make
                    investment decisions that are beneficial to you. Your needs,
                    goals, risk tolerance and asset size have top consideration
                    by the experts.
                  </p>
                  <div className="md:max-w-sm  ">
                    <h1 className="font-semibold mt-5 text-hBlue text-start w-full text-2xl sm:text-2xl">
                      Stocks ETF’s Bonds Mutual Funds Futures Advanced Products
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-span-6 w-full flex items-center order-1 md:order-2 justify-center md:justify-start">
                <img src={Managed_portfolios} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/**********************************************
                     DEPOSIT AND WITHDRAWAL
        **********************************************/}

        <section>
          <div>
            <div className="max-w-7xl mx-auto grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-12 p-2 sm:p-4">
              <div className="col-span-6 w-full flex items-center order-1 md:order-1 justify-center md:justify-start">
                <img src={SEAMLESS_DEPOSIT} alt="" />
              </div>
              <div className="col-span-6 h-full flex items-center py-20 order-1 md:order-2">
                <div className="mx-auto max-w-4xl text-gray-700 flex flex-col md:items-start">
                  <h1 className="font-bold mb-4 text-start w-full text-sm">
                    SEAMLESS DEPOSIT AND WITHDRAWAL
                  </h1>
                  <h1 className="font-semibold text-gray-900 text-start w-full text-3xl sm:text-4xl ">
                    You own it, we expertly manage it
                  </h1>
                  <p className="text-gray text-lg sm:text-xl my-4 ">
                    Our dedicated portfolio managers will expertly make
                    investment decisions that are beneficial to you. Your needs,
                    goals, risk tolerance and asset size have top consideration
                    by the experts.
                  </p>
                  <div className="md:max-w-sm  ">
                    <h1 className="font-semibold mt-5 text-hBlue text-start w-full text-2xl sm:text-2xl">
                      Stocks ETF’s Bonds Mutual Funds Futures Advanced Products
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**********************************************
                        Tabs
        **********************************************/}
        <section className="px-2 sm:px-5">
          <div>
          <h1 className="font-bold mb-3 sm:mt-10 md:mt-20 text-center w-full text-sm">
          FREE TRADING TOOLS
          </h1>
                  <h1 className="font-semibold text-gray-900 text-center w-full text-3xl sm:text-4xl ">
                  Free fire-power to conquer the markets
                  </h1>
                  <div className="flex justify-center mt-5">
                    <button className="md:max-w-sm  mx-auto border-2 border-hBlue px-6 py-2 rounded font-semibold text-hBlue hover:bg-hBlue hover:text-white">
                    Discover our platform
                    </button>
                  </div>
          </div><div className="max-w-6xl mx-auto border border-gray-100 py-5 my-5 sm:my-10">
          {" "}
          <PlatformTabs />
        </div>
        </section>
        
        {/**********************************************
                        TRADE INSIGHTS
        **********************************************/}

        <section>
          <div>
            <div className="max-w-7xl mx-auto grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-12 p-2 sm:p-4">
              <div className="col-span-6 w-full flex items-center justify-center md:justify-start">
                <img
                  src={TRADE_INSIGHTS}
                  alt="Inspiration Animation"
                  className="w-64- h-64- object-cover-"
                />{" "}
              </div>
              <div className="col-span-6 h-full flex items-center py-20">
                <div className="mx-auto max-w-4xl text-gray-700 flex flex-col md:items-start">
                  <h1 className="font-bold mb-4 text-start w-full text-sm">
                    TRADE INSIGHTS
                  </h1>
                  <h1 className="font-semibold text-gray-900 text-start w-full text-3xl sm:text-4xl ">
                    Real-time information to inspire your trading
                  </h1>
                  <p className="text-gray text-lg sm:text-xl my-4 ">
                    Get timely commentaries from finance professionals with
                    firsthand experience delivered to your screens. All that and
                    incisive articles, videos, and webinars that will inspire
                    your trading decisions and moves
                  </p>
                  <div className="md:max-w-sm  ">
                    <button className="border-2 border-hBlue px-6 py-2 rounded font-semibold text-hBlue hover:bg-hBlue hover:text-white">
                      Start Trading{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/**********************************************
                    PRICING
        **********************************************/}

        <section>
          <div>
            <div className="max-w-7xl mx-auto grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-12 p-2 sm:p-4">
              <div className="col-span-6 h-full flex items-center py-20 order-2 md:order-1">
                <div className="mx-auto max-w-4xl text-gray-700 flex flex-col md:items-start">
                  <h1 className="font-bold mb-4 text-start w-full text-sm">
                    PRICING{" "}
                  </h1>
                  <h1 className="font-semibold text-gray-900 text-start w-full text-3xl sm:text-4xl ">
                    No one comes close to our pricing
                  </h1>
                  <p className="text-gray text-lg sm:text-xl my-4 ">
                    Citation Invest offers the best spreads and the lowest
                    broker commissions obtainable across all our asset classes.
                    No inactivity fees. We don’t want to impact your returns
                    negatively
                  </p>
                  <div className="md:max-w-sm  ">
                    <button className="border-2 border-hBlue px-6 py-2 rounded font-semibold text-hBlue hover:bg-hBlue hover:text-white">
                      Start Trading{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-6 w-full flex items-center order-1 md:order-2 justify-center md:justify-start">
                <img src={PRICING} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/**********************************************
                        ABOUT PROWEBTRADER
        **********************************************/}

        <section>
          <div>
            <div className="max-w-7xl mx-auto grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-12 p-2 sm:p-4">
              <div className="col-span-6 w-full flex items-center justify-center md:justify-start">
                <img
                  src={ABOUT_PROWEBTRADER}
                  alt="Inspiration Animation"
                  className="w-64- h-64- object-cover-"
                />{" "}
              </div>
              <div className="col-span-6 h-full flex items-center py-20">
                <div className="mx-auto max-w-4xl text-gray-700 flex flex-col md:items-start">
                  <h1 className="font-bold mb-4 text-start w-full text-sm">
                    ABOUT PROWEBTRADER
                  </h1>
                  <h1 className="font-semibold text-gray-900 text-start w-full text-3xl sm:text-4xl ">
                    Your investment is safe with us
                  </h1>
                  <p className="text-gray text-lg sm:text-xl my-4 ">
                    In Citation Invest, you have found a broker that you can put
                    your trust. For 15 years we have used our experience to help
                    our investors to invest safely and correctly. That is our
                    reputation.
                  </p>
                  <div className="md:max-w-sm  ">
                    <button className="border-2 border-hBlue px-6 py-2 rounded font-semibold text-hBlue hover:bg-hBlue hover:text-white">
                      Discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="">
        <div className="bg-[url('/citationinvest/ready.webp')] bg-center bg-cover w-full">
          <div className="flex justify-between items-center py-10 sm:py-20 max-w-7xl mx-auto px-2 sm:px-5 ">
            <div>
              <h1 className="text-4xl md:text-[44px] font-bold lg:leading-tight">
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

export default citationinvest;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tab/tabDep";

const tabs = () => {
  return (
    <div>
      <Tabs defaultValue="aud" className="w-full p-2">
        <TabsList className="flex justify-center my-6 w-full gap-4 md:gap-10 h-full flex-wrap border-0">
          <TabsTrigger className="bg-slate-900" value="aud">
            AUD - Australian Dollar
          </TabsTrigger>
          <TabsTrigger className="bg-slate-900" value="USD">
            USD - United States Dollar
          </TabsTrigger>
          <TabsTrigger className="bg-slate-900" value="EUR">
            EUR - Euro
          </TabsTrigger>
          <TabsTrigger className="bg-slate-900" value="CAD">
            CAD - Canadian Dollar
          </TabsTrigger>
          <TabsTrigger className="bg-slate-900" value="GBP">
            GBP - British Pound (Sterling)
          </TabsTrigger>
          <TabsTrigger className="bg-slate-900" value="NZD">
          NZD - New Zealand Dollar
          </TabsTrigger>
          <TabsTrigger className="bg-slate-900" value="JPY">
          JPY - Japanese Yen
          </TabsTrigger>
          <TabsTrigger className="bg-slate-900" value="HKD">
            HKD - Hong Kong Dollar
          </TabsTrigger>
          <TabsTrigger className="bg-slate-900" value="SGD">
            SGD - Singapore Dollar
          </TabsTrigger>
        </TabsList>
        <TabsContent value="aud">
          <div className="w-full hover:shadow-2xl shadow-gray-700 text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 items-center p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Credit and Debit Cards
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/public/funding/Visa-MasterCard.png"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>

                    <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                      Deposit Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    PayPal
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/paypal.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="PayPal funding option"
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {[
                      "AUD",
                      "USD",
                      "JPY",
                      "EUR",
                      "NZD",
                      "SGD",
                      "GBP",
                      "CAD",
                      "HKD",
                      "CHF",
                    ].map((currency) => (
                      <a href="#" key={currency}>
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          {currency}
                        </h2>
                      </a>
                    ))}
                  </div>

                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center items-end">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-md">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* <!-- Top Section --> */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    Neteller
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="Neteller Funding Option Logo"
                    />
                  </div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2">
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      AUD
                    </span>
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      USD
                    </span>
                  </div>
                </div>

                {/* <!-- Bottom Section --> */}
                <div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Neteller VIP
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                    <div className="h-full w-full flex justify-center place-items-end">
                      <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                        Deposit Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Skrill
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/skrill.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {["AUD", "USD", "JPY", "EUR", "SGD", "GBP"].map(
                      (currency) => (
                        <a href="#" key={currency}>
                          <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                            {currency}
                          </h2>
                        </a>
                      )
                    )}
                  </div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Wire Transfer
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/wiretransfer.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      UnionPay{" "}
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/unionpay.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          RMB
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Bpay{" "}
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/bpay.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        12 - 48 hr
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Broker to Broker
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/broker.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CHF
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          HKD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        2-5 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      POLI{" "}
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/poli.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Rapidpay
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/rapidpay.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        It may take up to 2 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Vietnamese Internet Banking
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/bank.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        It may take up to 2 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="USD">
          <div className="w-full hover:shadow-2xl shadow-gray-700 text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 items-center p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Credit and Debit Cards
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/public/funding/Visa-MasterCard.png"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>

                    <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                      Deposit Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    PayPal
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/paypal.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="PayPal funding option"
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {[
                      "AUD",
                      "USD",
                      "JPY",
                      "EUR",
                      "NZD",
                      "SGD",
                      "GBP",
                      "CAD",
                      "HKD",
                      "CHF",
                    ].map((currency) => (
                      <a href="#" key={currency}>
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          {currency}
                        </h2>
                      </a>
                    ))}
                  </div>

                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center items-end">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-md">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* <!-- Top Section --> */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    Neteller
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="Neteller Funding Option Logo"
                    />
                  </div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2">
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      AUD
                    </span>
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      USD
                    </span>
                  </div>
                </div>

                {/* <!-- Bottom Section --> */}
                <div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Neteller VIP
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                    <div className="h-full w-full flex justify-center place-items-end">
                      <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                        Deposit Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Skrill
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/skrill.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {["AUD", "USD", "JPY", "EUR", "SGD", "GBP"].map(
                      (currency) => (
                        <a href="#" key={currency}>
                          <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                            {currency}
                          </h2>
                        </a>
                      )
                    )}
                  </div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Wire Transfer
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/wiretransfer.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Broker to Broker
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/broker.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CHF
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          HKD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        2-5 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Vietnamese Internet Banking
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/bank.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        It may take up to 2 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="EUR">
          <div className="w-full hover:shadow-2xl shadow-gray-700 text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 items-center p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Credit and Debit Cards
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/public/funding/Visa-MasterCard.png"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>

                    <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                      Deposit Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    PayPal
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/paypal.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="PayPal funding option"
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {[
                      "AUD",
                      "USD",
                      "JPY",
                      "EUR",
                      "NZD",
                      "SGD",
                      "GBP",
                      "CAD",
                      "HKD",
                      "CHF",
                    ].map((currency) => (
                      <a href="#" key={currency}>
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          {currency}
                        </h2>
                      </a>
                    ))}
                  </div>

                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center items-end">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-md">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* <!-- Top Section --> */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    Neteller
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="Neteller Funding Option Logo"
                    />
                  </div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2">
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      AUD
                    </span>
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      USD
                    </span>
                  </div>
                </div>

                {/* <!-- Bottom Section --> */}
                <div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Neteller VIP
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                    <div className="h-full w-full flex justify-center place-items-end">
                      <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                        Deposit Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Skrill
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/skrill.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {["AUD", "USD", "JPY", "EUR", "SGD", "GBP"].map(
                      (currency) => (
                        <a href="#" key={currency}>
                          <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                            {currency}
                          </h2>
                        </a>
                      )
                    )}
                  </div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Broker to Broker
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/broker.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CHF
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          HKD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        2-5 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="CAD">
          <div className="w-full hover:shadow-2xl shadow-gray-700 text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 items-center p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Credit and Debit Cards
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/public/funding/Visa-MasterCard.png"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>

                    <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                      Deposit Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    PayPal
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/paypal.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="PayPal funding option"
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {[
                      "AUD",
                      "USD",
                      "JPY",
                      "EUR",
                      "NZD",
                      "SGD",
                      "GBP",
                      "CAD",
                      "HKD",
                      "CHF",
                    ].map((currency) => (
                      <a href="#" key={currency}>
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          {currency}
                        </h2>
                      </a>
                    ))}
                  </div>

                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center items-end">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-md">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* <!-- Top Section --> */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    Neteller
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="Neteller Funding Option Logo"
                    />
                  </div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2">
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      AUD
                    </span>
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      USD
                    </span>
                  </div>
                </div>

                {/* <!-- Bottom Section --> */}
                <div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Neteller VIP
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                    <div className="h-full w-full flex justify-center place-items-end">
                      <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                        Deposit Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Skrill
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/skrill.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {["AUD", "USD", "JPY", "EUR", "SGD", "GBP"].map(
                      (currency) => (
                        <a href="#" key={currency}>
                          <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                            {currency}
                          </h2>
                        </a>
                      )
                    )}
                  </div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Broker to Broker
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/broker.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CHF
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          HKD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        2-5 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="GBP">
        <div className="w-full hover:shadow-2xl shadow-gray-700 text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 items-center p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Credit and Debit Cards
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/public/funding/Visa-MasterCard.png"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>

                    <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                      Deposit Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    PayPal
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/paypal.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="PayPal funding option"
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {[
                      "AUD",
                      "USD",
                      "JPY",
                      "EUR",
                      "NZD",
                      "SGD",
                      "GBP",
                      "CAD",
                      "HKD",
                      "CHF",
                    ].map((currency) => (
                      <a href="#" key={currency}>
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          {currency}
                        </h2>
                      </a>
                    ))}
                  </div>

                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center items-end">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-md">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* <!-- Top Section --> */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    Neteller
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="Neteller Funding Option Logo"
                    />
                  </div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2">
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      AUD
                    </span>
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      USD
                    </span>
                  </div>
                </div>

                {/* <!-- Bottom Section --> */}
                <div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Neteller VIP
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                    <div className="h-full w-full flex justify-center place-items-end">
                      <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                        Deposit Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Skrill
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/skrill.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {["AUD", "USD", "JPY", "EUR", "SGD", "GBP"].map(
                      (currency) => (
                        <a href="#" key={currency}>
                          <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                            {currency}
                          </h2>
                        </a>
                      )
                    )}
                  </div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Wire Transfer
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/wiretransfer.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      UnionPay{" "}
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/unionpay.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          RMB
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Bpay{" "}
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/bpay.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        12 - 48 hr
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Broker to Broker
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/broker.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CHF
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          HKD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        2-5 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      POLI{" "}
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/poli.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Rapidpay
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/rapidpay.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        It may take up to 2 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Vietnamese Internet Banking
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/bank.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        It may take up to 2 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="SGD">
          <div className="w-full hover:shadow-2xl shadow-gray-700 text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    PayPal
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/paypal.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="PayPal funding option"
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {[
                      "AUD",
                      "USD",
                      "JPY",
                      "EUR",
                      "NZD",
                      "SGD",
                      "GBP",
                      "CAD",
                      "HKD",
                      "CHF",
                    ].map((currency) => (
                      <a href="#" key={currency}>
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          {currency}
                        </h2>
                      </a>
                    ))}
                  </div>

                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center items-end">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-md">
                    Deposit Now
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Wire Transfer
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/wiretransfer.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className=" py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Broker to Broker
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/broker.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CHF
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          HKD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        2-5 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="HKD">
          <div className="w-full hover:shadow-2xl shadow-gray-700 text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ">
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    PayPal
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/paypal.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="PayPal funding option"
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {[
                      "AUD",
                      "USD",
                      "JPY",
                      "EUR",
                      "NZD",
                      "SGD",
                      "GBP",
                      "CAD",
                      "HKD",
                      "CHF",
                    ].map((currency) => (
                      <a href="#" key={currency}>
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          {currency}
                        </h2>
                      </a>
                    ))}
                  </div>

                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center items-end">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-md">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Broker to Broker
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/broker.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CHF
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          HKD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        2-5 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="JPY">
          <div className="w-full hover:shadow-2xl shadow-gray-700 text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 items-center p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Credit and Debit Cards
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/public/funding/Visa-MasterCard.png"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>

                    <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                      Deposit Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    PayPal
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/paypal.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="PayPal funding option"
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {[
                      "AUD",
                      "USD",
                      "JPY",
                      "EUR",
                      "NZD",
                      "SGD",
                      "GBP",
                      "CAD",
                      "HKD",
                      "CHF",
                    ].map((currency) => (
                      <a href="#" key={currency}>
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          {currency}
                        </h2>
                      </a>
                    ))}
                  </div>

                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center items-end">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-md">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* <!-- Top Section --> */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    Neteller
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="Neteller Funding Option Logo"
                    />
                  </div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2">
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      AUD
                    </span>
                    <span className="bg-slate-950 rounded-2xl font-bold px-2 py-1 text-xs">
                      USD
                    </span>
                  </div>
                </div>

                {/* <!-- Bottom Section --> */}
                <div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Neteller VIP
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/neteller.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                    <div className="h-full w-full flex justify-center place-items-end">
                      <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                        Deposit Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Skrill
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/skrill.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {["AUD", "USD", "JPY", "EUR", "SGD", "GBP"].map(
                      (currency) => (
                        <a href="#" key={currency}>
                          <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                            {currency}
                          </h2>
                        </a>
                      )
                    )}
                  </div>
                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Wire Transfer
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/wiretransfer.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Broker to Broker
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/broker.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CHF
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          HKD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        2-5 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Vietnamese Internet Banking
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/bank.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        It may take up to 2 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="NZD">
          <div className="w-full hover:shadow-2xl shadow-gray-700 text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center-  place-items-center">
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 items-center p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div className="">
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Credit and Debit Cards
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/public/funding/Visa-MasterCard.png"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>

                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>

                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900  rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                    </div>

                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border  border-gray-950 group-hover:border-gray-700 p-4 rounded-3xl- bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>

                    <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                      Deposit Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out">
                {/* Top Section */}
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                    PayPal
                  </h2>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/paypal.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt="PayPal funding option"
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div>
                  <h2 className="font-bold text-[10px] text-center mb-6">
                    Accepted Currencies:
                  </h2>
                  <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                    {[
                      "AUD",
                      "USD",
                      "JPY",
                      "EUR",
                      "NZD",
                      "SGD",
                      "GBP",
                      "CAD",
                      "HKD",
                      "CHF",
                    ].map((currency) => (
                      <a href="#" key={currency}>
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          {currency}
                        </h2>
                      </a>
                    ))}
                  </div>

                  <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                    Approx Processing Time
                  </h1>
                  <div className="flex justify-center">
                    <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                      INSTANT
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="h-full w-full flex justify-center items-end">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-md">
                    Deposit Now
                  </button>
                </div>
              </div>

             
              <div className="bg-slate-900 group hover:bg-slate-950 shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Wire Transfer
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/wiretransfer.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        INSTANT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 group hover:bg-slate-950 mx-auto shadow-lg py-4 flex flex-col justify-between hover:border-t border-gray-600 p-4 sm:py-5 sm:px-4 hover:shadow-gray-800 rounded-xl transition duration-700 ease-in-out h-full">
                <div>
                  <h1 className="text-gray-700 muted text-center">
                    Funding option
                  </h1>
                  <div>
                    <h2 className="text-center mb-2 mt-4 text-xl text-gray-600 font-bold">
                      Broker to Broker
                    </h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/funding/broker.webp"
                      className="mx-auto my-4 max-h-14 h-full w-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[10px] text-center mb-6">
                      Accepted Currencies:
                    </h2>
                    <div className="flex flex-wrap justify-center mt-2 gap-2 transition duration-700 ease-in-out">
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          AUD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          USD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          JPY
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          EUR
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          NZD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          SGD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          GBP
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CAD
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          CHF
                        </h2>
                      </a>
                      <a href="#">
                        <h2 className="bg-slate-950 group-hover:bg-slate-900 rounded-2xl font-bold px-2 py-1 text-xs transition duration-700 ease-in-out">
                          HKD
                        </h2>
                      </a>
                    </div>
                    <h1 className="text-center text-sm tracking-[0.2rem] font-semibold my-6">
                      Approx Processing Time
                    </h1>
                    <div className="flex justify-center">
                      <button className="rounded-2xl py-1 mb-6 border border-gray-950 group-hover:border-gray-700 p-4 bg-gray-800 text-xs text-gray-500 mx-auto transition duration-700 ease-in-out">
                        2-5 business days
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="py-2 w-full bg-hBlue text-center text-gray-200 font-bold rounded-[4px]">
                    Deposit Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default tabs;

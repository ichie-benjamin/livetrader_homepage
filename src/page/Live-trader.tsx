import { Container } from "../components";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { config, liveTraders, Steps } from "../constants";
import { Wrapper } from "../components";
import { TableDemo } from "../components/ui/benefits";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { buttonVariants } from "../components/ui/button";

const LiveTrader = () => {
  return (
    <>
    <div className="w-full hidden sm:flex items-center bg-[#F3F7F9] text-black justify-end">
<ul className="flex items-center justify-center divide-x-2 text-sm py-2">
  <li className="text-center pe-4 hover:text-black text-gray-700 text-semibold">
    <a href="#">
    Offers
    </a>
  </li>
  <li className="text-center px-4 hover:text-black text-gray-700 text-semibold">
    <a href="#">
    New York Red Bull
    </a>
  </li>
  <li className="text-center px-4 hover:text-black text-gray-700 text-semibold">
    <a href="#">
Legal
    </a>
  </li>
</ul>
    </div>
        <header className="px-4 h-14 md:h-20 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-gray-800 z-50">
          <Container reverse>
            <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
              {/* Logo Section */}
              <div className="flex items-center">
                <a href="/" className="flex items-center gap-2">
                  <img
                    src={config.logo}
                    alt="✨"
                    width={124}
                    height={24}
                    className="object-contain"
                  />
                </a>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#services"
                  className="hover:text-foreground/80 text-sm"
                >
                  Our Services
                </a>
                <a
                  href="/LiveTrader"
                  className="hover:text-foreground/80 text-sm"
                >
                  LiveTrader
                </a>
                <a href="#market" className="hover:text-foreground/80 text-sm">
                  Market
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-foreground/80 text-sm"
                >
                  Testimonials
                </a>
              </nav>

              {/* Buttons Section */}
              <div className="flex items-center gap-4">
                <a
                  href={config.login_url}
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Login
                </a>
                <a
                  href={config.signup_url}
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden md:flex ",
                  })}
                >
                  Start free trial
                </a>
                
              </div>
            </div>
          </Container>
        </header>
      {/* <div className="text-2xl font-bold text-center bg-[#F4F8FA] text-black">mab admnan danamm adjnm</div> */}
      <section className=" bg-[#D7D4C6] ">

        <section>
          <Container className="text-gray-600">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="p-4 pb-10  mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-20">
                <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                  Become a live trader and unlock your true trading potential
                </h2>
                <p className="max-w-3xl- text-base text-foreground/80 sm:mt-6 text-start">
                  Designed exclusively for high-volume traders, our Elite Trader
                  program unlocks more benefits the more you trade.
                </p>
                <p className="max-w-3xl- text-base mb-4 text-foreground/80 sm:mt-6 text-start">
                  Sign up today to enjoy:
                </p>

                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    A reduction of your trading costs by up to 34% with cash
                    rebates
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-10">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold text-foreground/80 px-2">
                    A dedicated relationship manager who will handle your
                    queries quickly. Access to exclusive discounts on
                    third-party platforms such as TradingView
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Access to VIP content and events
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-600 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Cash rebates from US$5 to US$17 per million
                  </p>
                </div>
                <div className="flex w-full mt-10">
                  <a
                    href={config.login_url}
                    target="_blank"
                    className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 md:ease-linear md:w-48 text-center align-center py-4 border-radius"
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
                Start {config.site_name} in three easy steps
                </h1>
              
                <div className="w-full mt-3">
                  <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-3 group-hover: lg:gap-8">
                    {Steps.map((Steps) => {
                      return (
                        <div
                          key={Steps.title}
                          className="flex w-full rounded-2xl  overflow-hidden- bg-gray-50 px-2 sm:px-4 group hover:bg-[#212121] justify-between relative group"
                        >
                          <div className="flex items-center h-full">
                            <div className="text-[#0A0A0A] md:pb-16 gap-y-4">
                              <div className="my-4">
                                <img src={Steps.img} alt="" />
                              </div>
                              <h1 className="text-base group-hover:text-gray-200 my-1 font-bold text-gray-600">
                                {Steps.title}
                              </h1>
                              <p
                                className=" text-gray-600 group-hover:text-gray-400 dark:text-gray-300
                                 lg:text-base text-foreground/80 sm:my-6 text-start"
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
          <h3 className="text-base font-bold mb-4 text-">
            Example of Rebate Payout
          </h3>
          <p className="text-base">
            The total monthly trading volume for all sub-accounts associated
            with the username is US$150 million.
          </p>

          <p className="text-base my-4">
            You earn US$7 for each US$1 million traded within the month.
          </p>
          <p className="text-base">
            The rebate credited to your account amounts to US$1,050 (150 *
            US$7).
          </p>
        </div>
      </section>

      <section className="bg-[#0c1223e2] w-full py-10 sm:py-16 md:py-32 mt-5 sm:mt-10">
        <div className="max-w-4xl mx-auto text-gray-400 ">
          <h3 className="text-3xl  sm: font-bold mb-4 text-center">
            Interest on unused margin
          </h3>

          <p className="text-base text-center my-4 max-w-3xl mx-auto">
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
              className="hover:bg-[#2955FF] mx-auto w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 lg:text-xl md:ease-linear md:w-48 text-center align-center py-4 border-radius"
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
                <h2 className="text-3xl font-semibold">
                  Exclusive benefits
                </h2>

                <div className="flex items-center py-3 mt-4">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-base  text-gray-600 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Cash rebate
                  </p>
                </div>
                <p className="text-base mb-4 text-foreground/80 sm:mt-6 text-start">
                  Reduce your trading expenses by as much as 34% and receive up
                  to US$17 for every US$1 million traded.
                </p>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-base  text-gray-600 dark:text-gray-300 group-hover:font-semibold text-foreground/80">
                    Personalized support from a dedicated relationship manager.{" "}
                  </p>
                </div>
                <p className="max-w-3xl- text-base mb-4 text-foreground/80 sm:mt-6 text-start">
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
                <p className="max-w-3xl- text-base mb-4 text-foreground/80 sm:mt-6 text-start">
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
                <p className="max-w-3xl- text-base mb-4 text-foreground/80 sm:mt-6 text-start">
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

            <ul className="list-disc  pl-5">
              <li>
                <p className=" my-4">
                  The {config.site_name} tiers will be evaluated on a monthly
                  basis based on the trading volume (in USD) from the previous
                  month for all accounts associated with a specific username.
                </p>
              </li>
              <li>
                <p className=" my-4">
                  Rebates are typically credited within 15 business days after
                  the end of the following month.
                </p>
              </li>
              <li>
                <p className=" my-4">
                  OANDA clients who are referred by an introducing broker or who
                  receive benefits from specific third-party OANDA affiliates
                  may not qualify for this program.
                </p>
              </li>
              <li>
                <p className=" my-4">
                  Clients benefiting from spread or commission reductions linked
                  to previous promotions will not be eligible for rebates. If
                  you currently receive a pricing discount from a past offer and
                  want to learn how to become eligible for rebates, please
                  contact us at rm@oanda.com.
                </p>
              </li>
            </ul>
            <p className=" my-4">
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
                  <label htmlFor="firstname" className="text-xs font-bold">First Name</label>
                  <Input
                    type="text"
                    id="firstname"
                    placeholder="Enter Your First Name"
                    className="py-5 sm:py-7"
                  />
                </div>
                <div className="w-full items-center gap-1.5 mt-6">
                  <label htmlFor="Lastname" className="text-xs font-bold">Last Name</label>
                  <Input
                    type="text"
                    id="Lastname"
                    placeholder="Enter Your Last Name"
                    className="py-5 sm:py-7"
                  />
                </div>
                <div className="w-full items-center gap-1.5 mt-6">
                  <label htmlFor="email" className="text-xs font-bold">Email</label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Youremail@gamil.com"
                    className="py-5 sm:py-7"
                  />
                </div>
                <div className="w-full items-center gap-1.5 mt-6">
                  <label htmlFor="phone" className="text-xs font-bold">Contact Number</label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="+234"
                    className="py-5 sm:py-7"
                  />
                </div>

                <div className="grid w-full gap-1.5 mt-6">
                  <label htmlFor="comment" className="text-xs font-bold">Additional comments:</label>
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
                <p className="text-base text-foreground/80 sm:mt-6 text-start">
                  For over 20 years, we’ve delivered a variety of services and
                  benefits to our clients, ensuring lasting relationships and
                  customer satisfaction. These include:
                </p>
                <p className="max-w-3xl- text-base mb-4 text-foreground/80 sm:mt-6 text-start">
                  Sign up today to enjoy:
                </p>

                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-700 dark:text-gray-300 group-hover:font-semibold text-foreground/80 px-2">
                    Our award-winning platforms provide innovative solutions
                    that consistently deliver exceptional performance and value
                    to our clients.
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-10">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-700 dark:text-gray-300 group-hover:font-semibold text-foreground/80 px-2">
                    We offer highly competitive spreads and margins, ensuring
                    our clients get the best possible trading conditions.
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl" />
                  </div>
                  <p className="text-sm  text-gray-700 dark:text-gray-300 group-hover:font-semibold text-foreground/80 px-2">
                    We provide innovative trading education, empowering our
                    clients with the knowledge and skills needed to succeed in
                    the markets.
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-700 dark:text-gray-300 group-hover:font-semibold text-foreground/80 px-2">
                    Our transparent pricing ensures that clients always know the
                    true cost of their trades, with no hidden fees or surprises.{" "}
                  </p>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-8">
                    <IoMdCheckmarkCircleOutline className="text-[#0063A6] text-2xl text-left-" />
                  </div>
                  <p className="text-sm  text-gray-700 dark:text-gray-300 group-hover:font-semibold text-foreground/80 px-2">
                    {" "}
                    Our platform features powerful tools powered by TradingView,
                    giving clients advanced charting and analysis capabilities
                    for more informed trading decisions.{" "}
                  </p>
                </div>

                <div className="flex w-full mt-10">
                  <a
                    href={config.login_url}
                    target="_blank"
                    className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 lg:text-xl md:ease-linear md:w-48 text-center align-center py-4 border-radius"
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
    </>
  );
};

export default LiveTrader;

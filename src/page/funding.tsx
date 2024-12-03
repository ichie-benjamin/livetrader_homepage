import { Navbar } from "../components";
import Tabs from "../components/ui/tabs";
import Hero from "/funding/account_funding_bg.webp";
import Strength from "/forex/strength-bg.webp";
import { Link } from "react-router-dom";
import { config } from "../constants";

const funding = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-[60vh]  overflow-hidden">
        <img
          src={Hero}
          alt="hero image"
          className="w-full absolute h-full object-cover top-0 left-0 "
        />
        <div className="relative z-10 flex-col flex items-center justify-center h-full bg-black/70-">
          <div className="max-w-2xl px-3 sm:px-8">
            <h1 className="text-gray-300 md:text-4xl sm:text-3xl text-2xl font-extrabold text-center">
              Account Funding
            </h1>
            <p className="text-xs md:text-base text-gray-400 text-center mt-10">
              IC Markets Global offers over 15 flexible funding options in 10
              different base currencies. Deposit instantly and for free using a
              range of methods.
            </p>
            <div className="my-10 flex items-center gap-4 justify-center">
              <a
                href="#"
                className="bg-hBlue text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Fund Your Account
              </a>
            </div>
          </div>
        </div>
      </div>
     
      <div className="max-w-4xl mx-auto mb-20">
        <Tabs />
      </div>
      <section className="bg-slate-900">
        <div className="max-w-4xl mx-auto text-gray-600 py-5 sm:py-14 px-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Payment process</h1>
            <p className="text-sm font-semibold mt-2">
              For faster processing we recommend that all account holders
              deposit funds into their trading account from inside their Secure
              Client Area. From your Secure Client Area you will be able to fund
              your account in real time using one of the instant funding
              methods. In certain instances, it may take up to an hour for
              deposits to be processed into the designated trading account. Such
              cases are outside of IC Markets Global control, and we shall not
              be held liable for any losses or additional losses.
            </p>
            <p className="text-sm font-semibold my-2 sm:my-4">
              If you do not yet have access to our{" "}
              <a href="#" className="text-hBlue">
                Access Instructions
              </a>{" "}
              please follow the Access Instructions.
            </p>
          </div>

          <div className="my-5 md:my-7">
            <h1 className="text-xl sm:text-2xl font-bold">Security of Funds</h1>
            <p className="text-sm font-semibold mt-2">
              When funding your trading account, client money is held in
              Segregated Client Money Accounts with Top-Tier International
              Banks. Electronic payments are processed using SSL (Secure Socket
              Layer) technology and are encrypted to ensure security. All
              payment information is confidential and used only for the purpose
              of funding your trading account with IC Markets Global.
            </p>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Bank Fees</h1>
            <p className="text-sm font-semibold mt-2">
              IC Market Global does not charge any additional fees for deposits
              or withdrawals. You should however be aware that you may incur
              fees, such as intermediary fees, on payments to and from some
              international banking institutions. IC Markets Global accepts no
              responsibility for any such bank fees.
            </p>
          </div>
          <div className="my-5 md:my-7">
            <h1 className="text-xl sm:text-2xl font-bold">
              Third Party Payments
            </h1>
            <p className="text-sm font-semibold mt-2">
              IC Markets Global does not accept payments from third parties.
              Please ensure that all deposits into your trading account come
              from a bank account in your name. Payments from Joint Bank
              Accounts / Credit Cards are accepted if the trading account holder
              is one of the parties on the Bank Account / Credit Card.
            </p>
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
              Start trading with
            </h1>
            <p className="text-xl md:text-2xl font-bol text-gray-400 text-center mt-5">
              a regulated Forex CFD provider today
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
    </div>
  );
};

export default funding;

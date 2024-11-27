import { Navbar } from "../components";
import Hero from "/digitalcurrency/btc-banner.webp";
import { FaCheckCircle } from "react-icons/fa";
import Strength from "/forex/strength-bg.webp";
import { Link } from "react-router-dom";
import Dropdown from "../components/ui/drop";
import { config } from "../constants";
const withdrawal = () => {
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
          <div className="max-w-2xl px-2">
            <h1 className="text-gray-300 md:text-4xl sm:text-3xl text-2xl font-extrabold text-center">
              Funds Withdrawal
            </h1>
            <p className="text-xs md:text-base text-gray-400 text-center mt-10">
              For faster processing all account holders are now required to
              submit withdrawal requests from inside their Secure Client Area.
              If you do not yet have access to your Secure Client Area please
              follow the Access Instructions.
            </p>
            <div className="my-10 flex items-center gap-4 justify-center">
              <a
                href="#"
                className="bg-hBlue text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Withdrawer form
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black relative py-2 items-center justify-center">
        <ul className="items-center hidden md:flex gap-4  md:gap-8 text-xs font-extrabold text-gray-600 justify-center bg-black ">
          <li>
            <Link to="/forex" className="">
              FOREX
            </Link>{" "}
          </li>
          <li>
            <Link to="/funding" className="">
              FUNDING
            </Link>{" "}
          </li>
          <li>
            <Link to="/withdrawal" className="text-hBlue">
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
      <div className="max-w-4xl mx-auto text-gray-500 my-5 sm:my-14 px-2">
        <h6 className="mb-5 sm:mb-9">
          If you do not yet have access to your Secure Client Area please follow
          the{" "}
          <a href="#" className="text-hBlue">
            Access Instructions{" "}
          </a>{" "}
          .
        </h6>{" "}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2 sm:mb-5">
            Important Notes:
          </h2>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Withdrawal requests cut off time is 12:00 AEST/AEDT. If your
            withdrawal is submitted before this time it will be processed on the
            day of receipt. If your withdrawal is submitted after this time it
            will be processed on the following business day.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            IC Markets Global does not charge additional fees for deposits
            and/or withdrawals. However, you should be aware that additional
            fees may occur at some banking institutions. IC Markets Global is
            not responsible for any additional bank charges.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Funds in your trading account(s) are intended solely for trading
            purposes. Therefore, a processing fee may be applied to your
            withdrawal if your deposits have not been utilised for trading.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            International Bank Wire Transfers may take up to 14 days and incur
            additional intermediary and/or beneficiary fees.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Credit / Debit Card withdrawals* are processed free of charge. Once
            processed, Credit / Debit Card withdrawals may take 3-5 business
            days to reach you credit card. You should however be aware that in
            some rare occasions, this may sometimes take up to 10 business days
            depending on the banks end.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto"></div>
          <p className="text-[13px]">
            *Please note Credit card withdrawals may not be available for all
            countries
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Should you wish to withdraw an amount in excess of the sum deposited
            by Verified by Visa /MasterCard Secure Credit / Debit Card, you will
            be required to utilize another deposit method used earlier or a bank
            wire option.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Should you wish to withdraw an amount in excess of the sum deposited
            by Verified by Visa /MasterCard Secure Credit / Debit Card, you will
            be required to utilize another deposit method used earlier or a bank
            wire option.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Paypal / Neteller / Skrill withdrawals must be made from the same
            account from where the funds were sent initially. These transactions
            are processed free of charge and are instant once processed.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            If your uploaded credit / debit card has already expired, please
            upload the new card in your client area to continue using the
            deposit and withdrawals services without any interruptions. If the
            new card’s number is different to the expired card’s number, you
            would need to submit a letter issued from the old card’s issuer bank
            confirming that the new card has been issued in replacement of the
            old card.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            If your uploaded credit / debit card has been lost / stolen /
            damaged / cancelled, you would need to submit a letter issued from
            the old card’s issuer bank confirming that the old card is no longer
            valid.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            If the newly uploaded card has not been used for funding prior to
            requesting a withdrawal, you would need to deposit a small amount to
            activate withdrawal facility on this card.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            IC Markets Global, at its own discretion, may ask you to submit
            supporting documentation (for example, deposit receipts for the
            payments processed via old card or card statement showing deposit
            transactions) before releasing funds to the new card.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            To withdraw an amount more than the sum deposited by Verified by
            Visa / MasterCard Secure Credit / Debit Card, you will be required
            to use another deposit method that has been used earlier or a bank
            wire transfer option.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Webmoney transactions are processed by Ingenico ePayments (Formerly
            Global Collect). Ingenico ePayments (Formerly Global Collect) does
            not permit Webmoney refunds. All Webmoney deposits must be withdrawn
            by bank transfer which may incur additional charges. Webmoney
            transactions once processed via bank transfer may take 3-5 business
            days to reach your bank account.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Accounts funded by Fasapay, are withdrawn via bank wire transfers
            which may incur additional charges. Once processed via bank
            transfer, the funds may take 3-5 business days to reach your bank
            account.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Accounts funded by Poli / Bpay are withdrawn via bank wire transfers
            and do not incur any additional bank charges if withdrawn to a
            domestic bank account. Domestic Bank Transfers within Australia will
            usually reach your bank within 2-3 business days.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Accounts funded by Rapidpay are withdrawn via bank wire transfers
            which may incur additional charges. Once processed via bank
            transfer, the funds may take 3-5 business days to reach your bank
            account.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            Accounts funded by Klarna are withdrawn via bank wire transfers
            which may incur additional charges. Once processed via bank
            transfer, the funds may take 3-5 business days to reach your bank
            account.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            For first Wire transfer withdrawals we require that you provide us
            with a supporting copy of the bank statement related to your
            registered bank account.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            For first Vietnamese Internet banking withdrawals, we require that
            you provide us with a supporting copy of the bank statement related
            to your registered bank account.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            If you are withdrawing your funds deposited via Thai Internet
            Banking option to a Thai bank account, you will require to upload a
            clear picture or a coloured scan copy of your bank book. Once
            processed, the funds may take one business day to reach your
            account.
          </p>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 my-5">
          <div className="w-4 h-auto">
            <FaCheckCircle className="text-hBlue w-3 sm:w-4" />
          </div>

          <p className="text-[13px]">
            IC Markets Global does not process payments to third parties. Please
            ensure that all withdrawal requests from your trading account go to
            a bank account or a source in your name. Payments to Joint Bank
            Accounts / Credit Cards are accepted if the trading account holder
            is one on the parties on the Bank Account / Credit Card.
          </p>
        </div>
      </div>
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
              a regulated Forex CFD Provider today
            </p>
            <div className="my-10 flex flex-col sm:flex-row w-full items-center gap-4 justify-center">
            <Link to={config.login_url} className=" bg-hBlue w-full sm:w-auto text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap">
                Open Trading Account
              </Link>

              <Link to={config.signup_url} className="hover:bg-hBlue w-full sm:w-auto border-hBlue border text-gray-200 font-bold py-3 sm:py-4 px-8 sm:px-14 rounded transition-transform duration-300 ease-in-out transform hover:scale-105- whitespace-nowrap">
                Try a Free Demo{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withdrawal;

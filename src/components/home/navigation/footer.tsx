// import Icons from "../../global/icons";
// import { Heart } from "lucide-react";
// import { Link } from "react-router-dom";
import { config } from "../../../constants";

const Footer = () => {
  return (
    <footer className="flex  flex-col relative items-center justify-center border-t border-border border-gray-800 pt-16 pb-8 px-6 lg:px-8 w-full max-w-8xl mx-auto lg:pt-32">
      {/* <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div> */}

      <div className="flex flex-col xl:flex-row justify-between w-full gap-8">
        {/* Description Section */}
        <div className="xl:w-1/2 flex flex-col items-start justify-start">
          <p className="text-gray-500 mt-4 text-sm text-start">
            We are dedicated to providing a transparent and customer-centric
            trading experience. Our team of experts is constantly working to
            improve our platform, introduce new features, and ensure that
            Ebultrading remains at the forefront of the trading industry.
          </p>
        </div>

        {/* Links Section */}
        <div className="xl:w-1/2 mt-16 xl:mt-0 flex flex-col">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-medium text-white">Resources</h3>
              <ul className="mt-4 text-sm text-gray-500">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Our services
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Why {config.site_name}
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Economic Calendar
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-base font-medium text-white">Company</h3>
              <ul className="mt-4 text-sm text-gray-500">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    About Us
                  </a>
                </li>
                {/* <li className="mt-2">
                  <a
                    to="#"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Privacy Policy
                  </a>
                </li> */}
                {/* <li className="mt-2">
                  <a
                    to="#"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Terms & Conditions
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border text-gray-500 mt-14 border-gray-800 rounded-xl p-4 text-sm text-left">
        <p className="text-gray-500">
          Engaging in trading through Ebultrading, including following, copying,
          or replicating the actions of other traders, involves significant
          risks.
          <br />
          These include the potential risks of basing your trading decisions on
          the activities of traders who may lack experience, knowledge, or whose
          financial situations may differ from your own.
          <br />
          Past performance of an Ebultrading trader is not a reliable indicator
          of future performance.
        </p>

        <p className="mt-4 font-bold">Risk Warning</p>

        <p>
          Before using this website and the services provided through it, you
          should thoroughly review all relevant Terms & Conditions, policies,
          and accompanying documentation that govern the use of Ebultrading
          products and services.
        </p>

        <p>
          Crypto Futures and CFDs are complex financial instruments with a high
          risk of losing money rapidly due to leverage. These products may not
          be suitable for all investors. You should carefully consider whether
          you understand how leveraged products work and whether you can afford
          the high risk of losing your money.
        </p>

        <p>
          Virtual assets are highly volatile, and their value can fluctuate
          significantly, resulting in potential gains or significant losses.
          Returns or profits may be subject to capital gains tax. If you do not
          fully understand the risks involved or have any questions about
          Ebultrading products, it is recommended that you seek independent
          financial and/or legal advice.
        </p>

        <p className="mt-4">
          Information regarding past performance is not a reliable indicator of
          future performance.
        </p>
      </div>

      <div className="mt-8 border-t border-gray-800 border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-gray-500 mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} {config.site_name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

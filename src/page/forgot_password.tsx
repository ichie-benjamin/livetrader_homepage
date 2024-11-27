import { Container } from "../components";
import { Input } from "../components/ui/input";
import { config } from "../constants";
import { Link } from "react-router-dom";

const forgot_password = () => {
  return (
    <div>
    <section className=" bg-[#D7D4C6]-">
      <section className="p-4">
        <Container className="text-gray-600 max-w-xl mx-auto px-3 bg-slate-900 h-[90vh] rounded-xl ">
          
            <div className="p-4 pb-10 sm:py-10 md:pt-16 mx-auto w-full  px-2 md:px-10">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={config.logo}
                alt="✨"
                width={124}
                height={24}
                className="object-contain mx-auto"
              />
            </Link>
             <div className="w-full   sm:text-lg font-bold text-gray-500">
              <h2 className="text-center">Reset Password
              </h2>
              <p className=" text-gray-700 font-semibold mt-4 text-center">We'll email you instructions to reset your password.

</p>
             </div>
              <div className="w-full items-center gap-1.5 mt-6">
                <label htmlFor="email" className="text-xs font-bold">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Youremail@gamil.com"
                  className="py-5 sm:py-7"
                />
              </div>


              
              
              <div className="flex justify-end w-full mt-10">
                <Link
                  to={config.login_url}
                  target="_blank"
                  className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 lg:text-xl md:ease-linear  text-center align-center py-4 border-radius"
                >
                  CONTINUE
                </Link>
              </div>
            </div>
        </Container>
      </section>
    </section>
  </div>
  )
}

export default forgot_password
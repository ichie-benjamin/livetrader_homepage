import { Container } from "../components";
import { Input } from "../components/ui/input";
import { config } from "../constants";
import Navbar from "../components/home/navigation/navbar";
import { Link } from "react-router-dom";
const resgister = () => {
  return (

     <div>
  <Navbar />
      <section className=" bg-[#D7D4C6]-">
        <section className="p-4">
        <Container className="text-gray-600 max-w-xl mx-auto px-3 bg-slate-900  rounded-xl ">
           
              <div className="p-4 pb-10 sm:pb-10 md:pt-16- mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-20">
               
              <section className=" bg-[#D7D4C6]-">
        <section>
          <Container className="text-gray-600">
             
              <div className="p-4 pb-10 sm:py-10  mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-0">
                <div className="w-full items-center gap-1.5">
                  <label htmlFor="firstname" className="text-xs font-bold">
                    First Name
                  </label>
                  <Input
                    type="text"
                    id="firstname"
                    placeholder="Enter Your First Name"
                    className="py-5 sm:py-7"
                  />
                </div>
                <div className="w-full items-center gap-1.5 mt-6">
                  <label htmlFor="Lastname" className="text-xs font-bold">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    id="Lastname"
                    placeholder="Enter Your Last Name"
                    className="py-5 sm:py-7"
                  />
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
                <div className="w-full items-center gap-1.5 mt-6">
                  <label htmlFor="phone" className="text-xs font-bold">
                    Contact Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="+234"
                    className="py-5 sm:py-7"
                  />
                </div>

               
                
              </div>
           
          </Container>
        </section>
      </section>
                
                <div className="flex justify-end w-full mt-5">
                  <Link
                    to={config.login_url}
                    target="_blank"
                    className="hover:bg-[#2955FF] w-full shadow-[#191d2e] shadow-xl relative border-[#2955FF]  bg-[#0070f3] font-bold rounded-md text-white transition duration-200 lg:text-xl md:ease-linear  text-center align-center py-4 border-radius"
                  >
                    SIGN UP
                  </Link>
                </div>
              </div>
          </Container>
        </section>
      </section>
    </div>
   
  );
};

export default resgister;

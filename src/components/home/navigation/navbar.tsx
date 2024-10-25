import Container from "../../global/container";
import { buttonVariants } from "../../ui/button";
import { config } from "../../../constants";

const Navbar = () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-gray-800 z-50">
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
            <a href="#services" className="hover:text-foreground/80 text-sm">
              Our Services
            </a>
            <a href="/LiveTrader" className="hover:text-foreground/80 text-sm">
            LiveTrader
            </a>
            <a href="#market" className="hover:text-foreground/80 text-sm">
              Market
            </a>
            <a href="#testimonials" className="hover:text-foreground/80 text-sm">
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
              className={buttonVariants({ size: "sm", className: "hidden md:flex" })}
            >
              Start free trial
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Footer from "./components/home/navigation/footer.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen bg-blend-darken bg-slate-950 bg-[#020817]- text-foreground antialiased max-w-full overflow-x-hidden- text-gray-100">
      <App />
      <Footer />
    </div>
  </StrictMode>
);

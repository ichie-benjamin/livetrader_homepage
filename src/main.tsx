import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import Navbar from './components/home/navigation/navbar.tsx'
import Footer from './components/home/navigation/footer.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen bg-blend-darken bg-backgroundp bg-[#020817] text-foreground antialiased max-w-full overflow-x-hidden- text-gray-100'>
    {/* <Navbar /> */}
      <App />
    <Footer />
    </div>
   
  </StrictMode>
)

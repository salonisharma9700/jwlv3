// App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Ytvid from './Components/Ytvid';
import Navbar from './Components/Navbar';
import KnowMore from './Components/KnowMore';
import Faq from './Components/Faq';
import About from './Components/About';
import UploadVideoPage from './Components/Uploadvid';
import Form from './Components/Form';
import Contact from './Components/Contact';
import FormVidPin from './Components/FormVidPin';
import IconFooter from './Components/IconFooter';
import IconGrid from './Components/IconGrid';
import Footer from './Components/Footer';
import ThankYouModal from './Components/ThankYouModal';
import SubmittingModal from './Components/SubModal';

const App = () => {
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ytvid" element={<Ytvid />} />
        <Route path="/knowmore" element={<KnowMore />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload" element={<UploadVideoPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/upvid" element={<FormVidPin />} />
        <Route path="/iconsfoot" element={<IconFooter />} />
        <Route path="/thankyou" element={<ThankYouModal/>}/>
        <Route path="/submit" element={<SubmittingModal/>}/>
      </Routes>
      {location.pathname === '/' && (isSmallScreen ? <IconGrid /> : <IconFooter />)}
      <Footer />
    </div>
  );
};

export default App;
    
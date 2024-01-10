// src/components/Main.js


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/LandingPage/Home';
import Benefits from './routes/Benefits/Benefits';
import Products from './routes/Products/Products';
import Treatments from './routes/Treatments/Treatments';
import Technology from './routes/Technology/Technology';
import Services from './routes/Services/Services';
import BookForm from './routes/BookForm/BookForm';



// import ContactUs from './routes/Home/ContactUs';
// import Faq from './Faq';
// import Popup from './Popup';
// import ContactUs from './ContactUs';



import './Main.css';


export default function Main(){
  return (
  <>
    <Router>
      <div>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/benefits' element={<Benefits />} />
          <Route path='/products' element={<Products />} />
          <Route path="/treatmentS" element={<Treatments />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/services" element={<Services />} />
          <Route path="/form-LHR" element={<BookForm />} />

          {/* <Route path="/contact" Component={ContactUs}></Route> */}
          
        </Routes>
      </div>
    </Router>
    </>
  );
}

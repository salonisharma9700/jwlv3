// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../cssfiles/style.css';

// const Home = () => {
//   return (
//     <div className="container-fluid home-container">
//       {/* Background Image */}
//       <div className="row">
//         <div className="col-12">
//           <Link to='/ytvid'>
//             <img src="phonehome.jpeg" alt="Background" className="home-background-image img-fluid d-block d-md-none" />
//             <img src="homenew.jpeg" alt="Background" className="home-background-image img-fluid d-none d-md-block" />
//           </Link>
//         </div>
//       </div>
      
//       {/* Icon Grid */}
//       <div className="icon-grid">
//         <div className="row text-center">
//           <div className="col-6 col-md-3 mb-4">
//             <Link to="/ytvid" className="footer-link d-flex flex-column align-items-center">
//               <strong>Know More</strong>
//               <img src="/vidicon.png" className="footer-icons mt-2" alt="About Icon" />
//             </Link>
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <Link to="/faq" className="footer-link d-flex flex-column align-items-center">
//               <strong>FAQ</strong>
//               <img src="images/faq.png" className="footer-icons mt-2" alt="FAQ Icon" />
//             </Link>
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <Link to="/upvid" className="footer-link d-flex flex-column align-items-center">
//               <strong>Upload Video</strong>
//               <img src="images/upload.png" className="footer-icons mt-2" alt="Upload Icon" />
//             </Link>
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <Link to="/contact" className="footer-link d-flex flex-column align-items-center">
//               <strong>Contact Us</strong>
//               <img src="images/contact-us.png" className="footer-icons mt-2" alt="Contact Icon" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import '../cssfiles/style.css';

const Home = () => {
  return (
    <div className="container-fluid home-container">
  
      <div className="row">
        <div className="col-12">
          <Link to='/ytvid'>
            <img src="phonehome.jpeg" alt="Background" className="home-background-image img-fluid d-block d-md-none" />
            <img src="homenew.jpeg" alt="Background" className="home-background-image img-fluid d-none d-md-block" />
          </Link>
        </div>
      </div>
     
      
    </div>
  );
}

export default Home;

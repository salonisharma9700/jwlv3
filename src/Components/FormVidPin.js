
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../cssfiles/VideoUpload.css';
// import ThankYouModal from './ThankYouModal';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const apiUrl = process.env.REACT_APP_API_URL;

// const FormVidPin = () => {
//   const [formData, setFormData] = useState({
//     childName: '',
//     age: '',
//     gender: 'Male',
//     fathersName: '',
//     fathersContact: '',
//     fathersEmail: '',
//     mothersName: '',
//     mothersContact: '',
//     mothersEmail: '',
//     message: '',
//     primaryContact: '',
//   });

//   const [file, setFile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [showThankYouModal, setShowThankYouModal] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     if (submitted) {
//       // If already submitted, disable file input
//       document.getElementById('file').setAttribute('disabled', true);
//     }
//   }, [submitted]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     validateField(name, value);
//   };

//   const validateField = (name, value) => {
//     let error = '';
//     if (name === 'fathersEmail' || name === 'mothersEmail') {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(value)) {
//         error = 'Please enter a valid email.';
//       }
//     } else if (name.includes('Contact')) {
//       const contactRegex = /^\d{10}$/;
//       if (!contactRegex.test(value)) {
//         error = 'Please enter a valid 10-digit contact number.';
//       }
//     } else if (name === 'age') {
//       if (value <= 0) {
//         error = 'Please enter a valid age.';
//       }
//     } else if (!value.trim()) {
//       error = 'This field is required.';
//     }
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let formValid = true;
//     let newErrors = {};

//     // Validate form fields
//     Object.keys(formData).forEach((field) => {
//       validateField(field, formData[field]);
//       if (errors[field]) {
//         formValid = false;
//         newErrors[field] = 'This field is required.';
//       }
//     });

//     // If form is valid and file is selected, proceed
//     if (formValid && file) {
//       try {
//         // Construct FormData object to send to backend
//         const formDataToSubmit = { ...formData }; // Ensure all form data fields are included
//         const formDataObj = new FormData();

//         // Append each field to FormData object
//         Object.keys(formDataToSubmit).forEach((key) => {
//           formDataObj.append(key, formDataToSubmit[key]);
//         });
//         formDataObj.append('file', file); // Append file object

//         // Send FormData object to backend API
//         const mediaResponse = await axios.post(`${apiUrl}/api/media`, formDataObj, {
//           headers: {
//             'Content-Type': 'multipart/form-data', // Set content type for FormData
//           },
//         });

//         // Log success and update UI state
//         console.log('Success:', mediaResponse.data);
//         setShowThankYouModal(true);

//         // // Reset form state after successful submission
//         // setFormData({
//         //   childName: '',
//         //   age: '',
//         //   gender: 'Male',
//         //   fathersName: '',
//         //   fathersContact: '',
//         //   fathersEmail: '',
//         //   mothersName: '',
//         //   mothersContact: '',
//         //   mothersEmail: '',
//         //   message: '',
//         //   primaryContact: '',
//         // });
//         // setFile(null); // Clear selected file
//         // setSubmitted(true); // Set submitted state to true

//       } catch (error) {
//         console.error('Error:', error);
//         setShowThankYouModal(true); // Show modal on error
//       }
//     } else {
//       setErrors(newErrors); // Update errors state if form is invalid
//       console.log('Please fix the errors before submitting.');
//     }
//   };

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const closeThankYouModal = () => {
//     setShowThankYouModal(false);
//     setErrors({});
//     window.location.href = '/'; // Redirect to home after closing modal
//   };
//   return (
//     <div className='up'>
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-9">
//           <div className="form-container">
//             <h4>Please upload a video of your child brushing his/her teeth.</h4>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="childName">Name of the Child:</label>
//                 <input
//                   type="text"
//                   id="childName"
//                   name="childName"
//                   className={`form-control ${errors.childName ? 'is-invalid' : ''}`}
//                   value={formData.childName}
//                   onChange={handleInputChange}
//                   placeholder="Enter your child's name"
//                   required
//                 />
//                 {errors.childName && <div className="invalid-feedback">{errors.childName}</div>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="age">Age:</label>
//                 <input
//                   type="number"
//                   id="age"
//                   name="age"
//                   className={`form-control ${errors.age ? 'is-invalid' : ''}`}
//                   value={formData.age}
//                   onChange={handleInputChange}
//                   placeholder="Enter your child's age"
//                   required
//                 />
//                 {errors.age && <div className="invalid-feedback">{errors.age}</div>}
//               </div>
//               <div className="form-group gender-group">
//                 <label>Gender:</label>
//                 <div className="form-check">
//                   <input
//                     type="radio"
//                     id="male"
//                     name="gender"
//                     value="Male"
//                     className="form-check-input"
//                     checked={formData.gender === 'Male'}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <label className="form-check-label" htmlFor="male">
//                     Male
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     type="radio"
//                     id="female"
//                     name="gender"
//                     value="Female"
//                     className="form-check-input"
//                     checked={formData.gender === 'Female'}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <label className="form-check-label" htmlFor="female">
//                     Female
//                   </label>
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="fathersName">Father's Name:</label>
//                 <input
//                   type="text"
//                   id="fathersName"
//                   name="fathersName"
//                   className={`form-control ${errors.fathersName ? 'is-invalid' : ''}`}
//                   value={formData.fathersName}
//                   onChange={handleInputChange}
//                   placeholder="Enter father's name"
//                   required
//                 />
//                 {errors.fathersName && <div className="invalid-feedback">{errors.fathersName}</div>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="fathersContact">Father's Contact Number:</label>
//                 <input
//                   type="tel"
//                   id="fathersContact"
//                   name="fathersContact"
//                   className={`form-control ${errors.fathersContact ? 'is-invalid' : ''}`}
//                   value={formData.fathersContact}
//                   onChange={handleInputChange}
//                   placeholder="Enter 10 Digit contact number"
//                   required
//                 />
//                 {errors.fathersContact && <div className="invalid-feedback">{errors.fathersContact}</div>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="fathersEmail">Father's Email ID:</label>
//                 <input
//                   type="email"
//                   id="fathersEmail"
//                   name="fathersEmail"
//                   className={`form-control ${errors.fathersEmail ? 'is-invalid' : ''}`}
//                   value={formData.fathersEmail}
//                   onChange={handleInputChange}
//                   placeholder="Enter father's email"
//                   required
//                 />
//                 {errors.fathersEmail && <div className="invalid-feedback">{errors.fathersEmail}</div>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="mothersName">Mother's Name:</label>
//                 <input
//                   type="text"
//                   id="mothersName"
//                   name="mothersName"
//                   className={`form-control ${errors.mothersName ? 'is-invalid' : ''}`}
//                   value={formData.mothersName}
//                   onChange={handleInputChange}
//                   placeholder="Enter mother's name"
//                   required
//                 />
//                 {errors.mothersName && <div className="invalid-feedback">{errors.mothersName}</div>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="mothersContact">Mother's Contact Number:</label>
//                 <input
//                   type="tel"
//                   id="mothersContact"
//                   name="mothersContact"
//                   className={`form-control ${errors.mothersContact ? 'is-invalid' : ''}`}
//                   value={formData.mothersContact}
//                   onChange={handleInputChange}
//                   placeholder="Enter 10 Digit contact number"
//                   required
//                 />
//                 {errors.mothersContact && <div className="invalid-feedback">{errors.mothersContact}</div>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="mothersEmail">Mother's Email ID:</label>
//                 <input
//                   type="email"
//                   id="mothersEmail"
//                   name="mothersEmail"
//                   className={`form-control ${errors.mothersEmail ? 'is-invalid' : ''}`}
//                   value={formData.mothersEmail}
//                   onChange={handleInputChange}
//                   placeholder="Enter mother's email"
//                 />
//                 {errors.mothersEmail && <div className="invalid-feedback">{errors.mothersEmail}</div>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="primaryContact">Primary Contact Number:</label>
//                 <input
//                   type="tel"
//                   id="primaryContact"
//                   name="primaryContact"
//                   className={`form-control ${errors.primaryContact ? 'is-invalid' : ''}`}
//                   value={formData.primaryContact}
//                   onChange={handleInputChange}
//                   placeholder="Enter 10 Digit contact number"
//                   required
//                 />
//                 {errors.primaryContact && <div className="invalid-feedback">{errors.primaryContact}</div>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Message/Feedback:</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   className="form-control"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Enter your message or feedback"
//                 ></textarea>
//               </div>
//               <div className="upload-container">
//                 <h3>Upload Video</h3>
//                 <p>Upload Video :</p>
//                 <label htmlFor="file" className="labelFile">
//                   <span>
//                     <svg
//                       viewBox="0 0 184.69 184.69"
//                       width="3.75rem"
//                       height="3.75rem"
//                     >
//                       <g>
//                         <g>
//                           <g>
//                             <path
//                               d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
//                               C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
//                               C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
//                               c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
//                               c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
//                               c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
//                               c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
//                               v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
//                               style={{ fill: '#010002' }}
//                             ></path>
//                           </g>
//                           <g>
//                             <path
//                               d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
//                               c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
//                               L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
//                               c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
//                               C104.91,91.608,107.183,91.608,108.586,90.201z"
//                               style={{ fill: '#010002' }}
//                             ></path>
//                           </g>
//                         </g>
//                       </g>
//                     </svg>
//                   </span>
//                   <p>Drag and drop your file here or click to select a file!</p>
//                 </label>
//                 <input
//                   className="input"
//                   name="file"
//                   id="file"
//                   type="file"
//                   onChange={handleFileChange}
//                   accept=".mp4, .avi"
//                   required
//                 />
//               </div>
//               <button type="submit" className="button">Submit</button>
//             </form>
//               {/* {showThankYouModal && <ThankYouModal onClose={closeThankYouModal} />} */}
//             </div>
//           </div>
//         </div>
      
//       </div>
//       <ThankYouModal show={showThankYouModal} onClose={closeThankYouModal} /> 
//     </div>
//   );
// }


// export default FormVidPin;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../cssfiles/VideoUpload.css';
import ThankYouModal from './ThankYouModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmittingModal from './SubModal';


const apiUrl = process.env.REACT_APP_API_URL;

const FormVidPin = () => {
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    gender: '',
    fathersName: '',
    fathersContact: '',
    fathersEmail: '',
    mothersName: '',
    mothersContact: '',
    mothersEmail: '',
    message: '',
    primaryContact: '',
  });

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showSubmittingModal, setShowSubmittingModal] = useState(false);
  const [videoUploading, setVideoUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    if (name === 'fathersEmail' || name === 'mothersEmail') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email.';
      }
    } else if (name.includes('Contact')) {
      const contactRegex = /^\d{10}$/;
      if (!contactRegex.test(value)) {
        error = 'Please enter a valid 10-digit contact number.';
      }
    } else if (name === 'age') {
      if (value <= 0) {
        error = 'Please enter a valid age.';
      }
    } else if (!value.trim()) {
      error = 'This field is required.';
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formValid = true;
    let newErrors = {};

    // Validate form fields
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) {
        formValid = false;
        newErrors[field] = 'This field is required.';
      }
    });

    // If form is valid and file is selected, proceed
    if (formValid && file) {
      setShowSubmittingModal(true);
      try {
        // Construct FormData object to send to backend
        const formDataToSubmit = { ...formData }; // Ensure all form data fields are included
        const formDataObj = new FormData();

        // Append each field to FormData object
        Object.keys(formDataToSubmit).forEach((key) => {
          formDataObj.append(key, formDataToSubmit[key]);
        });
        formDataObj.append('file', file); // Append file object

        // Send FormData object to backend API
        const mediaResponse = await axios.post(`${apiUrl}/api/media`, formDataObj, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type for FormData
          },
        });

        // Log success and update UI state
        console.log('Success:', mediaResponse.data);
        setShowThankYouModal(true);
        setShowSubmittingModal(false);

      } catch (error) {
        console.error('Error:', error);
        setShowThankYouModal(true); // Show modal on error
        setShowSubmittingModal(false);
      }
    } else {
      setErrors(newErrors); // Update errors state if form is invalid
      console.log('Please fix the errors before submitting.');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setVideoUploading(true); // Hide file input and show "Video uploading" message
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false);
    setErrors({});
    window.location.href = '/'; // Redirect to home after closing modal
  };
  
  


  return (
    <div className='up'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-9 ">
            <div className="form-container">
              <h4>Please upload a video of your child brushing his/her teeth.</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="childName">Name of the Child:</label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    className={`form-control ${errors.childName ? 'is-invalid' : ''}`}
                    value={formData.childName}
                    onChange={handleInputChange}
                    placeholder="Enter your child's name"
                    required
                  />
                  {errors.childName && <div className="invalid-feedback">{errors.childName}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter your child's age"
                    required
                  />
                  {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                </div>
                <div className="form-group gender-group">
                  <label>Gender:</label>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      className="form-check-input"
                      checked={formData.gender === 'Male'}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      className="form-check-input"
                      checked={formData.gender === 'Female'}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="fathersName">Father's Name:</label>
                  <input
                    type="text"
                    id="fathersName"
                    name="fathersName"
                    className={`form-control ${errors.fathersName ? 'is-invalid' : ''}`}
                    value={formData.fathersName}
                    onChange={handleInputChange}
                    placeholder="Enter father's name"
                    required
                  />
                  {errors.fathersName && <div className="invalid-feedback">{errors.fathersName}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="fathersContact">Father's Contact Number:</label>
                  <input
                    type="tel"
                    id="fathersContact"
                    name="fathersContact"
                    className={`form-control ${errors.fathersContact ? 'is-invalid' : ''}`}
                    value={formData.fathersContact}
                    onChange={handleInputChange}
                    placeholder="Enter 10 Digit contact number"
                    required
                  />
                  {errors.fathersContact && <div className="invalid-feedback">{errors.fathersContact}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="fathersEmail">Father's Email ID:</label>
                  <input
                    type="email"
                    id="fathersEmail"
                    name="fathersEmail"
                    className={`form-control ${errors.fathersEmail ? 'is-invalid' : ''}`}
                    value={formData.fathersEmail}
                    onChange={handleInputChange}
                    placeholder="Enter father's email"
                    required
                  />
                  {errors.fathersEmail && <div className="invalid-feedback">{errors.fathersEmail}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="mothersName">Mother's Name:</label>
                  <input
                    type="text"
                    id="mothersName"
                    name="mothersName"
                    className={`form-control ${errors.mothersName ? 'is-invalid' : ''}`}
                    value={formData.mothersName}
                    onChange={handleInputChange}
                    placeholder="Enter mother's name"
                    required
                  />
                  {errors.mothersName && <div className="invalid-feedback">{errors.mothersName}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="mothersContact">Mother's Contact Number:</label>
                  <input
                    type="tel"
                    id="mothersContact"
                    name="mothersContact"
                    className={`form-control ${errors.mothersContact ? 'is-invalid' : ''}`}
                    value={formData.mothersContact}
                    onChange={handleInputChange}
                    placeholder="Enter 10 Digit contact number"
                    required
                  />
                  {errors.mothersContact && <div className="invalid-feedback">{errors.mothersContact}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="mothersEmail">Mother's Email ID:</label>
                  <input
                    type="email"
                    id="mothersEmail"
                    name="mothersEmail"
                    className={`form-control ${errors.mothersEmail ? 'is-invalid' : ''}`}
                    value={formData.mothersEmail}
                    onChange={handleInputChange}
                    placeholder="Enter mother's email"
                  />
                  {errors.mothersEmail && <div className="invalid-feedback">{errors.mothersEmail}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="primaryContact">Primary Contact Number:</label>
                  <input
                    type="tel"
                    id="primaryContact"
                    name="primaryContact"
                    className={`form-control ${errors.primaryContact ? 'is-invalid' : ''}`}
                    value={formData.primaryContact}
                    onChange={handleInputChange}
                    placeholder="Enter 10 Digit contact number"
                    required
                  />
                  {errors.primaryContact && <div className="invalid-feedback">{errors.primaryContact}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message/Feedback:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-control"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message or feedback"
                  ></textarea>
                </div>
                <div className="form-group">
                {videoUploading ? (
                  <div className="form-group"><p>Video uploading</p></div>
                ) : (
                  <div className="form-group">
                    <label htmlFor="file" className="labelFile">
                      <span>
                        <svg
                          viewBox="0 0 184.69 184.69"
                          width="3.75rem"
                          height="3.75rem"
                        >
                          <g>
                            <g>
                              <g>
                            <path
                              d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
                              C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
                              C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
                              c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
                              c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
                              c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
                              c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
                              v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
                              style={{ fill: '#010002' }}
                            ></path>
                          </g>
                          <g>
                            <path
                              d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
                              c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
                              L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
                              c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
                              C104.91,91.608,107.183,91.608,108.586,90.201z"
                              style={{ fill: '#010002' }}
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <p>Drag and drop your file here or click to select a file!</p>
                </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className={`form-control-file ${errors.file ? 'is-invalid' : ''}`}
                      onChange={handleFileChange}
                      required
                    />
                    <input
                    className="input"
                    name="file"
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    accept=".mp4, .avi"
                    required
                  />
                </div>
                )}
              </div>
                <button type="submit" className="button">Submit</button>
                
              
              </form>
              
              <SubmittingModal show={showSubmittingModal}>
                
              </SubmittingModal>
            </div>
            
          </div>
        </div>
      </div>
      <ThankYouModal
        show={showThankYouModal}
        onClose={closeThankYouModal}
      />
    </div>
  );
};

export default FormVidPin;

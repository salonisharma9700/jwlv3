import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';
import '../cssfiles/play.css';
import ThankYouModal from './ThankYouModal';

const videoUrls = [
    'ciyvRFyt4as',
    'pu_jOLuinNs',
    'FgJr_L9ALm4',
];

const apiUrl = process.env.REACT_APP_API_URL;

const Ytvid = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isCheckedYes, setIsCheckedYes] = useState(false);
    const [isCheckedNo, setIsCheckedNo] = useState(false);
    const [videoResponses, setVideoResponses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showThankYouModal, setShowThankYouModal] = useState(false);
    const navigate = useNavigate();

    const onVideoEnd = () => {
        const response = isCheckedYes ? 'Yes' : 'No';
        saveResponseToBackend(videoUrls[currentVideoIndex], response);
    };

    const handleCheckYes = () => {
        setIsCheckedYes(!isCheckedYes);
        if (isCheckedNo) setIsCheckedNo(false);
    };

    const handleCheckNo = () => {
        setIsCheckedNo(!isCheckedNo);
        if (isCheckedYes) setIsCheckedYes(false);
    };

    const handleNextVideo = () => {
        const response = { videoId: videoUrls[currentVideoIndex], response: isCheckedYes ? 'Yes' : 'No' };
        const updatedResponses = [...videoResponses, response];
        setVideoResponses(updatedResponses);

        if (currentVideoIndex < videoUrls.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
            setIsCheckedYes(false);
            setIsCheckedNo(false);
        } else {
            setShowForm(true);
        }
    };

    // const handleSubmit = async (formData, file) => {
    //     const combinedData = {
    //         ...formData,
    //         videoResponses: videoResponses 
    //     };
    
    //     const formDataObject = new FormData();
    //     formDataObject.append('file', file);
    //     formDataObject.append('formData', JSON.stringify(combinedData));
    
    //     try {
    //         const response = await axios.post(`${apiUrl}/api/submitFormData`, formDataObject, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    
    //         console.log('Form data submitted successfully:', response.data);
    //         setShowForm(false);
    //         setShowThankYouModal(true);
    //         sendEmail(formData); // Optionally send an email after successful form submission
    //     } catch (error) {
    //         console.error('Error submitting form data:', error);
    //         if (error.response) {
    //             console.error('Server responded with:', error.response.data);
    //             console.error('Status:', error.response.status);
    //             console.error('Headers:', error.response.headers);
    //         } else if (error.request) {
    //             console.error('No response received:', error.request);
    //         } else {
    //             console.error('Error setting up the request:', error.message);
    //         }
    //     }
    // };

    // const sendEmail = (data) => {
    //     emailjs.send('service_v1786bs', 'template_cavtrlg', data, '3NQW95XFCjHuG4uZl')
    //         .then((response) => {
    //             console.log('Email sent successfully:', response.status, response.text);
    //         }, (error) => {
    //             console.error('Failed to send email:', error);
    //         });
    // };

    const saveResponseToBackend = (videoId, response) => {
        const data = { videoId, response };
        console.log("Saving response to backend:", data);

        axios.post(`${apiUrl}/api/saveVideoResponse`, data)
            .then(response => {
                console.log('Video response saved:', response.data);
            })
            .catch(error => {
                console.error('Error saving video response:', error);
            });
    };

    const getPlayerOpts = () => {
        if (window.innerWidth <= 480) {
            return { width: '100%', height: '200' };
        } else if (window.innerWidth <= 768) {
            return { width: '100%', height: '300' };
        } else {
            return { width: '900', height: '500' };
        }
    };

    const closeThankYouModal = () => {
        setShowThankYouModal(false);
        navigate('/'); // Navigate to homepage after closing the modal
    };

    return (
        <div className='ytvid'>
            <div className='row'>
                <div className='video1'>
                    {!showForm ? (
                        <>
                            <YouTube
                                videoId={videoUrls[currentVideoIndex]}
                                opts={getPlayerOpts()}
                                onEnd={onVideoEnd}
                            />
                            <div className='checkbox'>
                                <h4>My child is exhibiting behaviour as shown in the video</h4>
                                <div>
                                    <input
                                        type="radio"
                                        id="yes"
                                        checked={isCheckedYes}
                                        onChange={handleCheckYes}
                                    />
                                    <label htmlFor="yes">Yes</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="no"
                                        checked={isCheckedNo}
                                        onChange={handleCheckNo}
                                    />
                                    <label htmlFor="no">No</label>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                {(isCheckedYes || isCheckedNo) && (
                                                            <div className="text-center">
                            <button onClick={handleNextVideo} className="next-button">
                                {currentVideoIndex < videoUrls.length - 1 ? 'Next Video' : 'Submit'}
                            </button>
                        </div>

                                )}
                            </div>
                        </>
                    ) : (
                        <Form  videoResponses={videoResponses} />
                    )}
                </div>
            </div>
            <ThankYouModal show={showThankYouModal} onClose={closeThankYouModal} />
        </div>
    );
};

export default Ytvid;

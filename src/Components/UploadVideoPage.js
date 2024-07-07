import React, { useState } from 'react';
import FormVidPin from './FormVidPin';
import OTPVerification from './VerifyOTPForm';
import ThankYouModal from './ThankYouModal';

const UploadVideoPage = () => {
  const [step, setStep] = useState('form'); // Possible steps: 'form', 'otpVerification', 'thankYou'

  const renderStep = () => {
    switch (step) {
      case 'form':
        return <FormVidPin setStep={setStep} />;
      case 'otpVerification':
        return <OTPVerification formData={formData} file={file} setStep={setStep} />;
      case 'thankYou':
        return <ThankYouModal />;
      default:
        return null;
    }
  };

  return (
    <div className="upload-page">
      {renderStep()}
    </div>
  );
};

export default UploadVideoPage;

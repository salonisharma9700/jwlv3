import React from 'react';
import '../cssfiles/Footer.css';


const About = () => {
  return (
    <div className='about'>
    <div className="about-container">
      <h1 className="font-weight-bold">About  JoyWithLearning</h1>
      <div className="about-content">
        <p>Welcome to JoyWithLearning, a platform dedicated to providing support and resources for individuals with dyslexia and autism spectrum disorder (ASD). Our mission is to empower individuals, families, and educators by offering valuable information, practical strategies, and a supportive community.</p>
        
        <h2 className="font-weight-bold">Our Vision</h2>
        <p>At JoyWithLearning, we envision a world where individuals with dyslexia and autism are fully embraced and supported, where their unique strengths are celebrated, and where they have access to the resources and opportunities they need to thrive.</p>

        <h2 className="font-weight-bold">What We Offer</h2>
        <ul>
          <li><strong>Educational Resources:</strong> We provide comprehensive educational resources tailored to the needs of individuals with dyslexia and autism.</li>
          <li><strong>Supportive Community:</strong> Join our supportive community of individuals, families, educators, and professionals passionate about dyslexia and autism.</li>
          <li><strong>Expert Advice:</strong> Our platform features insights and advice from experts in the fields of dyslexia and autism.</li>
        </ul>

        <h2 className="font-weight-bold">Our Mission</h2>
        <p>Our mission is to foster understanding, acceptance, and empowerment for individuals with dyslexia and autism. Through advocacy, education, and community-building, we strive to break down barriers, challenge stereotypes, and promote inclusivity and accessibility for all.</p>

        <h2 className="font-weight-bold">Get Involved</h2>
        <p>Join us in our mission to create a more inclusive and supportive world for individuals with dyslexia and autism. Whether you're a parent, educator, advocate, or ally, there are many ways to get involved.</p>

        <h2 className="font-weight-bold">Contact Us</h2>
        <p>Have questions or suggestions? We'd love to hear from you! Feel free to reach out to us at <a href="mailto:info@joywithlearning.com ">info@joywithlearning.com </a> or through our contact form.</p>
      </div>
    </div>
    </div>
  );
};

export default About;

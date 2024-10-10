import React from 'react';
import { Link } from 'react-router-dom';
import {about} from  '../Images/Data'

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-[100px]">
      {/* About Us Section */}
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">About Us</h2>
      <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
        Welcome to <strong>Resume Builder</strong>, your go-to platform for creating professional resumes with ease. 
        We understand that building a standout resume can be overwhelming, which is why we’ve designed a tool that 
        streamlines the process for you.
      </p>

      {/* What We Offer and Our Mission Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Image on the left */}
        <div className="md:w-1/3">
          <img src={about} alt="What We Offer and Our Mission" className="w-full rounded-lg shadow-md" />
        </div>

        {/* Content on the right */}
        <div className="md:w-2/3">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">What We Offer</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-8">
            <li><strong>Choose from a variety of professionally designed templates</strong> – Select the resume style that fits your profession and personality.</li>
            <li><strong>Personalize with ease</strong> – Fill in essential details like personal information, work experience, education, skills, and more.</li>
            <li><strong>Instantly download your resume</strong> – Once completed, get your resume in a polished format with just one click.</li>
          </ul>

          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our goal is to help you create a resume that captures your unique qualifications and lands you that dream job. 
            Whether you're a seasoned professional or just starting your career, Resume Builder simplifies the process, 
            offering clean, well-structured templates that make an impact.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col md:flex-row justify-center text-sm gap-8 mb-20">
        <div className="border p-8 md:p-10 flex flex-col gap-5 rounded-lg shadow-sm bg-gray-50">
          <b className="text-lg">Simple and intuitive interface:</b>
          <p className="text-gray-600">Effortlessly create resumes with our user-friendly design, no tech skills required. Just follow the steps and you're good to go!</p>
        </div>
        <div className="border p-8 md:p-10 flex flex-col gap-5 rounded-lg shadow-sm bg-gray-50">
          <b className="text-lg">Professionally designed templates:</b>
          <p className="text-gray-600">Stand out with sleek, expert-designed templates tailored to make your resume shine.</p>
        </div>
        <div className="border p-8 md:p-10 flex flex-col gap-5 rounded-lg shadow-sm bg-gray-50">
          <b className="text-lg">Secure and private:</b>
          <p className="text-gray-600">Your data stays safe with us—fully encrypted, private, and only accessible to you.</p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="flex justify-center mt-8">
        <Link to={'/'}>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 text-lg font-semibold">
            Start Building Your Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;


import React, { useState, useEffect } from "react";

const projects = [
  { title: "Project 1", description: "Description of Project 1" },
  { title: "Project 2", description: "Description of Project 2" },
  { title: "Project 3", description: "Description of Project 3" },
];

const Devlopment = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
      );
    };
  return (
    <div className="w-full bg-white h-full flex flex-col items-center ">
        <div className="h-2/5 align-center -mt-12">
          <img src="public\asset\amazon_summer_School.png" alt="" />
        </div>
        <div className="w-full max-w-lg mx-auto relative overflow-hidden p-4">
        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4 border rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
            </div>
            ))}
        </div>
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">&#8592;</button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">&#8594;</button>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-2/5 font-title">
            <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg text-gray-900">
              <h1 className="text-4xl font-bold mb-6">
                Enhancing Face Recognition for Low-Quality CCTV Feeds: A Deep
                Learning Approach
              </h1>
              <p className="text-lg mb-4">
                Surveillance cameras are a vital part of modern security
                systems, helping monitor public spaces, workplaces, and homes.
                However, most CCTV footage suffers from poor image quality,
                making it difficult for conventional face recognition systems to
                identify individuals accurately. Issues like low resolution,
                motion blur, poor lighting, and compression artifacts make face
                recognition a challenging task, especially in real-world
                scenarios.
              </p>
              <p className="text-lg mb-4">
                At Inter IIT Technical Meet 11.0, our team at IIT Jodhpur took
                on this challenge and developed an advanced deep learning-based
                face recognition system specifically tailored for low-quality
                CCTV feeds. Our goal was to improve face recognition accuracy
                despite poor image quality—an essential requirement for
                surveillance and forensic applications.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Understanding the Problem: Why Low-Quality Footage Fails in Face
                Recognition
              </h2>
              <p className="text-lg mb-4">
                Most face recognition systems work well when dealing with
                high-quality images, such as those from passport photos or
                smartphone cameras. However, real-world CCTV footage presents
                several challenges:
              </p>
              <ul className="list-disc pl-6 text-lg mb-4">
                <li>
                  Low Resolution – Many surveillance cameras operate at 240p or
                  480p, making facial features pixelated and difficult to
                  distinguish.
                </li>
                <li>
                  Motion Blur – Moving subjects cause blurred frames, making it
                  harder to extract clear facial features.
                </li>
                <li>
                  Poor Lighting – Night-time and indoor CCTV footage often have
                  shadows, glare, or dim lighting, distorting facial structures.
                </li>
                <li>
                  Compression Artifacts – Many CCTV cameras compress footage to
                  save storage space, causing pixelation and loss of detail.
                </li>
              </ul>
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Step 1: Enhancing Low-Quality CCTV Images
              </h2>
              <p className="text-lg mb-4">
                Before identifying faces, we needed to restore lost details in
                the footage. We designed a novel image enhancement filter to
                clean up, sharpen, and improve low-quality frames.
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                How Image Enhancement Works
              </h3>
              <p className="text-lg mb-4">
                Think of image enhancement as an intelligent photo editing tool
                that automatically improves video frames using advanced AI
                techniques.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Step 2: Face Recognition Using Deep Learning (CNNs)
              </h2>
              <p className="text-lg mb-4">
                Once we had improved the image quality, the next challenge was
                identifying the person in the frame. For this, we used a deep
                learning model based on Convolutional Neural Networks (CNNs),
                one of the most powerful AI architectures for image processing.
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                How CNNs Work Step by Step
              </h3>
              <ul className="list-disc pl-6 text-lg mb-4">
                <li>
                  Convolution Layer – The first layer scans the image, detecting
                  simple features like edges, lines, and colors.
                </li>
                <li>
                  Pooling Layer – Reduces the image size while keeping essential
                  information, making processing more efficient.
                </li>
                <li>
                  Deeper Convolution Layers – Learns more complex features like
                  eyes, noses, and facial contours.
                </li>
                <li>
                  Fully Connected Layer – Combines extracted features and
                  matches them to known faces in a database.
                </li>
              </ul>
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Step 3: Training and Optimizing the Model
              </h2>
              <p className="text-lg mb-4">
                To ensure our model worked well in real-world scenarios, we
                trained it on large datasets from Kaggle, a platform for AI and
                machine learning research.
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                How We Optimized Our Model
              </h3>
              <ul className="list-disc pl-6 text-lg mb-4">
                <li>
                  Fine-Tuning Hyperparameters – Adjusted learning rates, filter
                  sizes, and layer configurations to enhance accuracy.
                </li>
                <li>
                  Data Augmentation – Trained on rotated, blurred, and low-light
                  images to make it more robust.
                </li>
                <li>
                  Testing on Real CCTV Footage – Ensured it worked beyond
                  controlled datasets by testing on actual CCTV video clips.
                </li>
              </ul>
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Final Thoughts: The Future of Face Recognition in Surveillance
              </h2>
              <p className="text-lg mb-4">
                Face recognition from low-quality CCTV footage is a complex but
                solvable problem. With advancements in deep learning, computer
                vision, and AI-powered image enhancement, we are moving closer
                to real-world solutions that can improve public safety and
                security.
              </p>
              <p className="text-lg mb-4">
                The next step? Integrating real-time processing and optimizing
                the system for edge computing so that face recognition can work
                instantly on surveillance cameras, reducing dependency on large
                cloud servers.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Devlopment
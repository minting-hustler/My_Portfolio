
import React, { useState, useEffect } from "react";

const machineLearningFiles = [
    { title: "ML File 1", description: "Description of ML File 1", image: "https://via.placeholder.com/400" },
    { title: "ML File 2", description: "Description of ML File 2", image: "https://via.placeholder.com/400" },
    { title: "ML File 3", description: "Description of ML File 3", image: "https://via.placeholder.com/400" },
    { title: "ML File 4", description: "Description of ML File 4", image: "https://via.placeholder.com/400" },
    { title: "ML File 5", description: "Description of ML File 5", image: "https://via.placeholder.com/400" },
    { title: "ML File 6", description: "Description of ML File 6", image: "https://via.placeholder.com/400" },
];

function MachineLearning() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % machineLearningFiles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % machineLearningFiles.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + machineLearningFiles.length) % machineLearningFiles.length
    );
  };

  return (
    
    <div className="w-full relative overflow-hidden p-4">
      <div className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`, width: `${(machineLearningFiles.length / visibleSlides) * 100}%` }}>
        {machineLearningFiles.map((file, index) => (
          <div key={index} className="w-1/4 flex-shrink-0 p-4 border rounded-lg shadow-lg text-center bg-white">
            <img src={file.image} alt={file.title} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{file.title}</h2>
              <p className="text-gray-600">{file.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">&#8592;</button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">&#8594;</button>
    </div>
  )
}

export default MachineLearning
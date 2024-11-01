// components/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
    
  return (
    
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #595DD2;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;

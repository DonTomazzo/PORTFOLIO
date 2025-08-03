// src/components/Toast.jsx
import React, { useState, useEffect } from 'react';

const Toast = ({ message, type = 'info', duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer); // Rensar timern om komponenten avmonteras
  }, [duration]);

  if (!isVisible) {
    return null;
  }

  const toastClasses = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    error: 'bg-red-500',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white font-bold
                  toast-slide-in ${toastClasses[type]} toast-fade-out`}
    >
      {message}
    </div>
  );
};

export default Toast;
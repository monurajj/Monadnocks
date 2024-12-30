import React, { useEffect, useState } from 'react';

const Toast = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300);
      }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`absolute bottom- top-14 right-4 bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg flex items-center justify-between space-x-4 z-50 transition-all transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDuration: '300ms', transitionTimingFunction: 'ease-out' }}
    >
      <div className="flex items-center space-x-2">
        <span className="text-lg font-semibold">🚧 Under Construction</span>
        <p>{message}</p>
      </div>
      <button
        onClick={onClose}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg focus:outline-none"
      >
        Close
      </button>
    </div>
  );
};

export default Toast;

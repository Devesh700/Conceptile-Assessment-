import React from 'react';

const ReminderModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-red-600 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Reminder</h2>
        <p className="mb-4">Please click on the reset button in the navbar section before closing the tab because this app uses your local storage. clicking on reset button will refresh the localStorage.</p>
        <button
          onClick={()=>onClose(false)}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-800 block mx-auto text-3xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ReminderModal;

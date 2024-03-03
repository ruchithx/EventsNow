import React from "react";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed z-10 inset-0 ">
      <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
      <div className="flex justify-center items-center h-full ">
        <div className="bg-white w-96 h-auto rounded-2xl relative flex flex-col shadow-normalComponent border-2 border-[#d47151]">
          <div className="absolute top-0 right-0 mt-4 mr-4 ">
            <button
              onClick={onClose}
              type="button"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="sm:flex sm:items-start flex-col p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from "react";

interface Details {
  name?: string;
}

export default function AdvanceDetails({ name }: Details) {
  const [editedName, setEditedName] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="border-gray border-2  w-full p-4 rounded-lg bg-custom-gray mt-5 ">
      <div className="flex justify-between items-end">
        <label className="" htmlFor="fname">
          {name}
        </label>
        <div className="flex     mr-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-custom-orange text-white px-4 py-1 rounded-lg"
            >
              save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className=" text-white px-4 py-2 rounded-lg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2038 10.7959L18.9998 8.99994C19.545 8.45469 19.8176 8.18207 19.9634 7.88797C20.2407 7.32842 20.2407 6.67146 19.9634 6.11191C19.8176 5.81782 19.545 5.54519 18.9998 4.99994C18.4545 4.45469 18.1819 4.18207 17.8878 4.03633C17.3282 3.75905 16.6713 3.75905 16.1117 4.03633C15.8176 4.18207 15.545 4.45469 14.9998 4.99994L13.1811 6.8186C14.145 8.4692 15.5311 9.84476 17.2038 10.7959ZM11.7267 8.27305L4.85615 15.1436C4.43109 15.5686 4.21856 15.7812 4.07883 16.0422C3.93909 16.3033 3.88015 16.5981 3.76226 17.1875L3.14686 20.2645C3.08034 20.5971 3.04708 20.7634 3.14168 20.858C3.23629 20.9526 3.4026 20.9194 3.73521 20.8529L6.81219 20.2375C7.40164 20.1196 7.69637 20.0606 7.95746 19.9209C8.21856 19.7812 8.43109 19.5686 8.85615 19.1436L15.7456 12.2542C14.1239 11.2385 12.7522 9.87622 11.7267 8.27305Z"
                  fill="#666666"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        {isEditing ? (
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            // value={firstName}
            // onChange={(e) => setFristName(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder=" Bank  "
          />
        ) : (
          <label
            className="border-gray border-2 w-full p-2 rounded-lg bg-white my-2"
            htmlFor="fname"
          >
            {/* {editedName} */}
          </label>
        )}
        {isEditing ? (
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            // value={firstName}
            // onChange={(e) => setFristName(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]"
            placeholder=" Bank  "
          />
        ) : (
          <label
            className="border-gray border-2 w-full p-2 rounded-lg bg-white my-2"
            htmlFor="fname"
          >
            {/* {editedName} */}
          </label>
        )}
      </div>
    </div>
  );
}

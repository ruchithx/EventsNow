import React, { useState } from "react";

interface Details {
  name: string;
}

export default function ProfileSettings({ name }: Details) {
  const [editedName, setEditedName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: any) => {
    setEditedName(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-settings flex flex-col sm:flex-row items-center justify-center w-full p-0 rounded-lg bg-white mt-5 relative">
      {/* Label */}
      <label
        htmlFor="fname"
        className="text-lg font-medium mb-2 sm:mb-0 whitespace-nowrap"
      >
        {name}
      </label>

      {/* Name Input/Display */}
      <div className="flex flex-grow w-full sm:ml-5 px-3 py-2">
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={handleInputChange}
            className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-blue-500"
          />
        ) : (
          <span className="border border-gray-300 px-3 py-2 rounded-lg w-full">
            {editedName}
          </span>
        )}
      </div>

      {/* Edit/Save Button */}
      <div className="flex items-center justify-end mt-4 sm:mt-0">
        {isEditing ? (
          <button
            onClick={handleSave}
            className=" bg-custom-orange text-white  px-4 py-2 rounded-lg"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className=" text-black bg-gray-100 hover:text-custom-orange px-4 py-2 rounded-lg"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

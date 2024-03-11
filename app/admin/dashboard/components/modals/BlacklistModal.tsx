import React from "react";
interface Blacklistprops {
  userId: String;
}
const BlacklistModalContent = ({ userId }: Blacklistprops) => {
  const blacklistUser = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/app/api/v1/blacklist/${userId}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to blacklist user");
      }

      const data = await response.json();
      
    } catch (error) {
      console.error("Error blacklisting user:", error);
    }
  };
  return (
    <div className="sm:flex sm:items-start mb-2">
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <div className="mt-2 mb-4">
          <div className="flex flex-col">
            <div className="mb-4">Add this user to blacklist ?</div>
            <div className="absolute right-4 bottom-4">
              <button
                onClick={blacklistUser}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Blacklist User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlacklistModalContent;

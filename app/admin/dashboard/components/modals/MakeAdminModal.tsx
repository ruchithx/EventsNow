import { User } from "@/app/admin/Type";
import { error, success } from "@/util/Toastify";
import React from "react";
interface MAkeAdminprops {
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
  userId: String;
  setMakeAdminModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const MakeAdminModalContent = ({
  userId,
  setMakeAdminModal,
  setUser,
}: MAkeAdminprops) => {
  const adminUser = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/makeAdmin`,
        {
          method: "PUT",
          body: JSON.stringify({ id: userId }),
        }
      );

      if (!response.ok) {
        error("Failed to make user an admin");
        return;
      }

      success("User is now an admin");
      setMakeAdminModal(false);
      setUser((user: User[]) => {
        const userChangers = user.map((user: User) => {
          if (user._id === userId) {
            user.role = "admin";
          }
          return user;
        });
        return userChangers;
      });

      // (user.find((user) => user._id === userId)?.role = "admin")
    } catch (error) {
      console.error("Error make admin user:", error);
    }
  };

  return (
    <div className="sm:flex sm:items-start mb-2">
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <div className="mt-2 mb-4">
          <div className="flex flex-col">
            <div className="mb-4">Make this user as a admin ?</div>
            <div className="absolute right-4 bottom-4">
              <button
                onClick={adminUser}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-700 text-base font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Admin User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdminModalContent;

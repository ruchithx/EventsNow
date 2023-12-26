import React from "react";
import { signOut } from "next-auth/react";

export default function page() {
  return (
    <div>
      <button
        type="submit"
        className="flex text-center p-1 justify-center w-full bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono"
        onClick={() => signOut()}
      >
        logout
      </button>
    </div>
  );
}

import { Session } from "next-auth";
import Image from "next/image";
import { User } from "./Post";
import { error } from "@/util/Toastify";
import { EventContextType, UseEventContext } from "../EventDashContext";
import { comment } from "postcss";

export default function CommentBtn({
  id,
  userImage,
  description,
}: {
  id: string;
  userImage: string;
  description: string;
}) {
  const { setAllComment } = UseEventContext() as EventContextType;

  const removeComment = async () => {
    const res = await fetch(`/api/v1/post/deleteComment/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      error("Error in deleting comment");
    }
    setAllComment((comment) => comment.filter((c) => c._id !== id));
  };
  return (
    <div className="flex justify-between">
      <div className="flex  gap-4">
        <Image
          src={userImage}
          alt="user-photo"
          width={35}
          height={35}
          className="rounded-full mt-1"
        />
        <div className=" text-black p-1 pl-2 pr-2 flex items-center">
          {description}
        </div>
      </div>
      <button onClick={removeComment} className="text-red-500 button">
        delete
      </button>
    </div>
  );
}

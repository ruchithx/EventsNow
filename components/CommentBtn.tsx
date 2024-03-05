import { Session } from "next-auth";
import Image from "next/image";
import { User } from "./Post";

export default function CommentBtn({
  userImage,
  description,
}: {
  userImage: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
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
  );
}

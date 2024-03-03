import { Session } from "next-auth";
import Image from "next/image";
import { User } from "./Post";

export default function CommentBtn({ user }: { user: User | Session }) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={user?.user?.image ?? ""}
        alt="user-photo"
        width={35}
        height={35}
        className="rounded-full mt-1"
      />
      <div className=" text-black p-1 pl-2 pr-2 flex items-center">
        it is a great event
      </div>
    </div>
  );
}

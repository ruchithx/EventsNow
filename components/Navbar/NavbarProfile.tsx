import Image from "next/image";
import React from "react";
import {
  AiOutlineClose,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from "react-icons/ai";
import { MdOutlineLogout, MdOutlineManageAccounts } from "react-icons/md";

interface NavbarProfileProps {
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
  showProfile: boolean;
  clickLogoutBtn: () => void;
  user: any;

  isOrganizationShowButton: boolean;
  setIsOrganizationShowButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarProfile({
  setShowProfile,
  showProfile,
  clickLogoutBtn,
  user,
  isOrganizationShowButton,
  setIsOrganizationShowButton,
}: NavbarProfileProps) {
  return <></>;
}

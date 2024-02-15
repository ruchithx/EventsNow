import { Modal } from "./OrgContext";

export type voidFunc = () => void;

export type OrgStatus =
  | "dashboard"
  | "myEvents"
  | "myTeam"
  | "report"
  | "setting";

export interface OrgContext {
  events: any[];
  handleSetting: voidFunc;
  isSlideBar: boolean;
  setIsSlideBar: React.Dispatch<React.SetStateAction<boolean>>;
  isDashboardOpen: boolean;
  setIsDashboardOpen: (value: boolean) => void;
  isLoading: boolean;
  isActive: boolean;
  revenue: number;
  modalUserName: string;
  setModalUserName: React.Dispatch<React.SetStateAction<string>>;
  ticketSold: number;
  status: string;
  handleDashboard: voidFunc;
  handleMyEvent: voidFunc;
  handleMyTeam: voidFunc;
  handleReport: voidFunc;
  organization: any;
  editedName: string;
  setEditedName: React.Dispatch<React.SetStateAction<string>>;
  modal: Modal;
  setModal: React.Dispatch<React.SetStateAction<Modal>>;
  team: Team[];
  setTeam: React.Dispatch<React.SetStateAction<Team[]>>;
  permissionID: string;
  setPermissionID: React.Dispatch<React.SetStateAction<string>>;
  globalPermission: string[];
  setGlobalPermission: React.Dispatch<React.SetStateAction<string[]>>;
}

export type Organization = {
  _id: string;
  fullName: string;
  numberType: string;
  number: string;
  companyName: string;
  organizationName: string;
  address: string;
  phoneNumber: string;
  email: string;
  postImageLink: string;
  isActive: boolean;
  __v: number;
  bank?: string;
  branch?: string;
  payout?: string;
  accountName?: string;
  accountNumber?: string;
};

export type User = {
  email: string;
  _id: string;
  firstName: string;
  image: string;
  lastName: string;
};

export type Team = {
  userData: User;
  permissionDocumentId: string;
};

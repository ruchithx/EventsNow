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
  team: any[];
  ticketSold: number;
  status: string;
  handleDashboard: voidFunc;
  handleMyEvent: voidFunc;
  handleMyTeam: voidFunc;
  handleReport: voidFunc;
  organization: any;
}

export type Organization = {
  map(
    arg0: (org: any) => import("react").JSX.Element
  ): import("react").ReactNode;
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

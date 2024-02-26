export type voidFunc = () => void;

export type DashBoardStatus = "Notification";
("Organization");
("Event");
("User");
("Payments");

export interface AdminContext {
  status: string;
  isLoading: boolean;
  handleNotification: voidFunc;
  handleOrganization: voidFunc;
  handleEvent: voidFunc;
  handleUser: voidFunc;
  handlePayments: voidFunc;
  notification: Organization[];
  organization: Organization[];
  event: Event[];
  user: User[];
  payment: any;
  setNotification: React.Dispatch<React.SetStateAction<Organization[]>>;
  setOrganization: React.Dispatch<React.SetStateAction<Organization[]>>;
  setEvent: React.Dispatch<React.SetStateAction<Event[]>>;
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
  setPayment: React.Dispatch<React.SetStateAction<any>>;
}

export type User = {
  email: string;
  _id: string;
  firstName: string;
  image: string;
  lastName: string;
};
export type Event = {
  selectedTab: string;
  duration: string;
  eventTimeZone: string;
  eventStartDate: string;
  startTime: string;
  _id: string;
  eventName: string;
  organizationId: string;
  description: string;
  postImageLink: string;
  isActive?: boolean;
  __v: number;
};
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

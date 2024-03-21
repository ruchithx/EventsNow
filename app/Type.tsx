export type UserType = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  role: string;
  wishListId: string[];
  registeredEvents: string[];
};

export type PostType = {
  _id: string;
  userImage: string;
  userName: string;
  description: string;
  image: string;
  like: number;
  likeBy: any;
  eventId: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
};

export type EventType = {
  selectedTab: string;
  eventStartDate: string;
  startTime: string;
  _id: string;
  eventName: string;
  organizationId: string;
  description: string;
  coverImage: string;
  dashboardImage: string;
  isPublished?: boolean;
  template: string;
  registerUser: string[];
  location: string;
  eventEndDate: string;
  endTime: string;
  __v: number;
};

export type OrganizationType = {
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
  bank?: string;
  branch?: string;
  payout?: string;
  accountName?: string;
  accountNumber?: string;
};

// admin dashboard
export type AdminDashBoardStatus = "Notification";
("Organization");
("Event");
("User");
("Payments");

export type voidFunc = () => void;

export interface AdminContext {
  status: string;
  isLoading: boolean;
  handleNotification: voidFunc;
  handleOrganization: voidFunc;
  handleEvent: voidFunc;
  handleUser: voidFunc;
  handlePayments: voidFunc;
  notification: OrganizationType[];
  organization: OrganizationType[];
  event: EventType[];
  user: UserType[];
  payment: any;
  setNotification: React.Dispatch<React.SetStateAction<OrganizationType[]>>;
  setOrganization: React.Dispatch<React.SetStateAction<OrganizationType[]>>;
  setEvent: React.Dispatch<React.SetStateAction<EventType[]>>;
  setUser: React.Dispatch<React.SetStateAction<UserType[]>>;
  setPayment: React.Dispatch<React.SetStateAction<any>>;
}

// event dashboard
export interface EventContextType {
  id: String;
  status: String;
  handleOverview: voidFunc;
  handleHostPage: voidFunc;
  handleMyteam: voidFunc;
  handleReports: voidFunc;
  handleCampaign: voidFunc;
  handleSetting: voidFunc;
  isSideBar: boolean;
  setIsSideBar: (value: boolean) => void;

  user: EventUserDeatils[];
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  eventPosts: PostType[];
  setEventPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  allComment: Comment[];
  setAllComment: React.Dispatch<React.SetStateAction<Comment[]>>;

  eventname: String;
  eventLocation: String;
  eventType: String;
  eventDate: String;
  eventStartTime: String;

  endTime: String;
  eventVisibility: boolean;

  setEventname: (value: string) => void;
  setEventLocation: (value: string) => void;
  setEventType: (value: string) => void;
  setEventDate: (value: string) => void;
  setEventStartTime: (value: string) => void;

  setEndTime: (value: string) => void;
  setEventVisibility: (value: boolean) => void;

  eventDashboardImage: string;
  eventCoverImage: string;
  eventEndTime: string;
  startTime: string;

  setEventEndDate: React.Dispatch<React.SetStateAction<string>>;
  eventEndDate: string;

  setEventDashboardImage: React.Dispatch<React.SetStateAction<string>>;
  setEventCoverImage: React.Dispatch<React.SetStateAction<string>>;
}

export type EventUserDeatils = {
  email: string;
  name: string;
};

export type Comment = {
  _id: string;
  userImage: string;
  postId: string;
  description: string;
};

// organization dashboard

export type OrgDashboardType =
  | "dashboard"
  | "myEvents"
  | "myTeam"
  | "report"
  | "setting";

export interface OrgContext {
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
  modal: ModalType;
  setModal: React.Dispatch<React.SetStateAction<ModalType>>;
  team: OrganizationTeamType[];
  setTeam: React.Dispatch<React.SetStateAction<OrganizationTeamType[]>>;
  permissionID: string;
  setPermissionID: React.Dispatch<React.SetStateAction<string>>;
  globalPermission: string[];
  setGlobalPermission: React.Dispatch<React.SetStateAction<string[]>>;
  events: EventType[];
  setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
  selectEventForPermission: any;
  setSelectEventForPermission: any;
  eventPermission: EventPermissionType[];
  setEventPermission: React.Dispatch<
    React.SetStateAction<EventPermissionType[]>
  >;
  id: string;
  organizationImage: string;
  setOrganizationImage: React.Dispatch<React.SetStateAction<string>>;
}

export type ModalType =
  | ""
  | "givenPermission"
  | "allPermission"
  | "permissionOneEvent"
  | "selectOneEvent";

export type EventPermissionType = {
  eventId: string;
  eventPermission: string[];
};

export type OrganizationTeamType = {
  userData: UserType;
  permissionDocumentId: string;
  globalPermission: string[];
  eventPermission: EventPermissionType[];
};

// profile dashboard

export interface ProfContext {
  lname: string;
  fname: string;
  isLoading: boolean;
  isSlideBar: boolean;
  isDashboardOpen: boolean;
  setIsSlideBar: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDashboardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  setLname: React.Dispatch<React.SetStateAction<string>>;
  setFname: React.Dispatch<React.SetStateAction<string>>;
  passwordExists: boolean;
  userId: any;
  status: string;
  handleSetting: voidFunc;
  handleProfile: voidFunc;
  handleWishList: voidFunc;
  handleMyEvents: voidFunc;
  handlemyTickets: voidFunc;
  setUserDeatails: React.Dispatch<React.SetStateAction<UserType>>;
  userDeatails: UserType;
  eventDetails: any;
  register: any;
  userImage: string;
  setUserImage: React.Dispatch<React.SetStateAction<string>>;
  registerEvent: RegisterEventType[];
}

export type RegisterEventType = {
  _id: string;
  eventName: string;
  postImageLink: string;
};
// Auth context

export interface AuthContext {
  eventPublish: boolean;
  setEventPublish: React.Dispatch<React.SetStateAction<boolean>>;
  organizationId: string | null;
  setOrganizationId: React.Dispatch<React.SetStateAction<string>>;
  emailAuth: string | null;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  organization: OrganizationProps[];
  setOrganization: React.Dispatch<React.SetStateAction<OrganizationProps[]>>;
}

// navbar
export type OrganizationProps = {
  map: any;
  name: string;
  image: string;
  id: string;
};

// props interface
export interface ChildrenType {
  children: React.ReactNode;
}

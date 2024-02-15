export type User = {
  map(
    arg0: (user: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  _id: string;
  firstName: String;

  email: String;
};

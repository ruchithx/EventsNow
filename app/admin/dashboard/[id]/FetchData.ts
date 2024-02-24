export const getAllOrganization = async () => {
  const res = await fetch(
    // `api/v1/organization/getAllOrganization`,
    `${process.env.NEXT_PUBLIC_URL}/api/v1/organization/getAllOrganization`,
    { cache: "no-store" }
  );
  return res;
};

export const getAllUser = async () => {
  const res = await fetch(
    // `api/v1/user/getAllUser`
    `${process.env.NEXT_PUBLIC_URL}/api/v1/user/getAllUser`,
    { next: { revalidate: 0 } }
  );
  return res;
};

export const getAllEvents = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/event/getAllEvents`,
    { cache: "no-store" }
    // `${process.env.NEXT_PUBLIC_URL}api/v1/event/getAllEvents`
  );
  return res;
};
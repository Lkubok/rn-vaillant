export type User = {
  _id: number;
  avatar: string;
  birthday: string;
  email: string;
  firstName: string;
  lastName: string;
  sex: "female" | "male";
  subscriptionTier: string;
  address: Address;
};

export type Address = {
  street: string;
  zipCode: string;
  city: string;
  country: string;
};

import store from "../store";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

type UserName = { title?: string; first: string; last: string };
type StreetAddress = { number: number; name: string };
type UserAddress = {
  street: StreetAddress;
  city: string;
  state: string;
  country: string;
  postcode: string;
};
type UserPicture = { large: string; medium: string; thumbnail: string };
type UserLoginInfo = { uuid: string };

export type Contact = {
  gender: string;
  name: UserName;
  location?: UserAddress;
  address: string;
  email: string;
  phone: string;
  cell: string;
  picture: UserPicture;
  nat: string;
  login: UserLoginInfo;
};

export type Field = {
  label: string;
  name: string;
  placeholder: string;
  id?: string;
};

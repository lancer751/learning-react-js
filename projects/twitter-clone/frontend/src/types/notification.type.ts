export type Notification = {
  _id: string;
  from: From;
  type: string;
};

export type From = {
  _id: string;
  username: string;
  profileImg: string;
};

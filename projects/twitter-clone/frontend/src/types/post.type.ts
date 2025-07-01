export type Post = {
  readonly _id: string;
  text: string;
  img?: string;
  user: User;
  comments: Comment[];
  likes: string[];
};

export type User = {
  username: string;
  profileImg: string;
  fullName: string;
};

export type Comment = {
  _id: string;
  text: string;
  user: User;
};

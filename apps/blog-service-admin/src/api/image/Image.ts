import { Post } from "../post/Post";

export type Image = {
  createdAt: Date;
  description: string | null;
  id: string;
  posts?: Array<Post>;
  updatedAt: Date;
  url: string | null;
};

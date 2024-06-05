import { Image } from "../image/Image";

export type Post = {
  content: string | null;
  createdAt: Date;
  id: string;
  image?: Image | null;
  published: boolean | null;
  title: string | null;
  updatedAt: Date;
};

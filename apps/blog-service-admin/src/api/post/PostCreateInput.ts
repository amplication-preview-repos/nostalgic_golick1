import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type PostCreateInput = {
  content?: string | null;
  image?: ImageWhereUniqueInput | null;
  published?: boolean | null;
  title?: string | null;
};

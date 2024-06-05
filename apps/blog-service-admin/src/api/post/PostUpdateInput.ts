import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  image?: ImageWhereUniqueInput | null;
  published?: boolean | null;
  title?: string | null;
};

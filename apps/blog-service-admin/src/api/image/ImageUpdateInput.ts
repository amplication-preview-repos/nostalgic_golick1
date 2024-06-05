import { PostUpdateManyWithoutImagesInput } from "./PostUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  description?: string | null;
  posts?: PostUpdateManyWithoutImagesInput;
  url?: string | null;
};

import { PostCreateNestedManyWithoutImagesInput } from "./PostCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  description?: string | null;
  posts?: PostCreateNestedManyWithoutImagesInput;
  url?: string | null;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  published?: BooleanNullableFilter;
  title?: StringNullableFilter;
};

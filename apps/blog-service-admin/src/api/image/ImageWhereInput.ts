import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type ImageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  posts?: PostListRelationFilter;
  url?: StringNullableFilter;
};

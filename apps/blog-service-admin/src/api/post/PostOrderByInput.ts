import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageId?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

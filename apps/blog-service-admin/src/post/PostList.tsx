import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { IMAGE_TITLE_FIELD } from "../image/ImageTitle";

export const PostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Posts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Image" source="image.id" reference="Image">
          <TextField source={IMAGE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Published" source="published" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

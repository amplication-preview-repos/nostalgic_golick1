import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { IMAGE_TITLE_FIELD } from "../image/ImageTitle";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Image" source="image.id" reference="Image">
          <TextField source={IMAGE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Published" source="published" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

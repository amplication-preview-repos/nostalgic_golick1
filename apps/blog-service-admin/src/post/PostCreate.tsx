import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ImageTitle } from "../image/ImageTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <ReferenceInput source="image.id" reference="Image" label="Image">
          <SelectInput optionText={ImageTitle} />
        </ReferenceInput>
        <BooleanInput label="Published" source="published" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};

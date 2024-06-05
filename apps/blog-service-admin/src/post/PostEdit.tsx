import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ImageTitle } from "../image/ImageTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <ReferenceInput source="image.id" reference="Image" label="Image">
          <SelectInput optionText={ImageTitle} />
        </ReferenceInput>
        <BooleanInput label="Published" source="published" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

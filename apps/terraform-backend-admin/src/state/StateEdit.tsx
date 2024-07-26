import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EnvironmentTitle } from "../environment/EnvironmentTitle";
import { UserTitle } from "../user/UserTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const StateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="version" source="version" />
        <div />
        <ReferenceInput
          source="environment.id"
          reference="Environment"
          label="environment"
        >
          <SelectInput optionText={EnvironmentTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="project.id" reference="Project" label="project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

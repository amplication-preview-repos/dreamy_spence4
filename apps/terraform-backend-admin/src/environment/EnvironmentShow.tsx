import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ENVIRONMENT_TITLE_FIELD } from "./EnvironmentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const EnvironmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Snapshot"
          target="environmentId"
          label="Snapshots"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="State"
          target="environmentId"
          label="States"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="version" source="version" />
            <TextField label="stateData" source="stateData" />
            <ReferenceField
              label="environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
